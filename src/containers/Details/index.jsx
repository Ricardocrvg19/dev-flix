/** biome-ignore-all assist/source/organizeImports: <explanation> */
/** biome-ignore-all lint/complexity/useOptionalChain: <explanation> */
import { useEffect } from 'react';
import { Container, Background, Cover, Info, ContainerMovies } from './styles';
import { useState } from 'react';
import { getImages } from '../../utils/getImages';

import Slider from '../../components/Slider';
import { useParams } from 'react-router-dom';

import {
  getMovieVideos,
  getCredits,
  getSimilarMovies,
  getMoviesById
} from '../../services/getAllData';
import Generos from '../../components/Genres';
import Credits from '../../components/Credits';

function Details() {
  const { id } = useParams();
  const [movieVideos, setMovieVideos] = useState();
  const [credits, setCredits] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  const [moviesById, setMoviesById] = useState();

  useEffect(() => {
    Promise.all([
      getMovieVideos(id),
      getCredits(id),
      getSimilarMovies(id),
      getMoviesById(id)
    ])
      .then(([movieVideos, credits, similarMovies, moviesById]) => {
        setMovieVideos(movieVideos);
        setCredits(credits);
        setSimilarMovies(similarMovies);
        setMoviesById(moviesById);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <>
      {moviesById && (
        <>
          <Background image={getImages(moviesById.backdrop_path)} />
          <Container>
            <Cover>
              <img
                src={getImages(moviesById.poster_path)}
                alt={moviesById.title}
              />
            </Cover>
            <Info>
              <h1>{moviesById.title}</h1>
              <Generos genres={moviesById.genres} />
              <p>{moviesById.overview}</p>
              <Credits credits={credits} />
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {similarMovies && (
            <Slider info={similarMovies} title="Filmes Similares" />
          )}
        </>
      )}
    </>
  );
}

export default Details;
