/** biome-ignore-all assist/source/organizeImports: <explanation> */
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Slider from '../../components/Slider';

import { useNavigate } from 'react-router-dom';

import { getImages } from '../../utils/getImages';

import { Background, ContainerButtons, Content, Info, Poster } from './styles';
import { useState, useEffect } from 'react';
import {
  getMovies,
  getPopularArtists,
  getPopularMovies,
  getTopMovies,
  getTopSeries
} from '../../services/getAllData';

function Home() {
  const [movies, setMovies] = useState();
  const [modal, setModal] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularArtists, setPopularArtists] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      getMovies(),
      getTopMovies(),
      getTopSeries(),
      getPopularMovies(),
      getPopularArtists()
    ])
      .then(([movies, topMovies, topSeries, popularMovies, popularArtists]) => {
        setMovies(movies);
        setTopMovies(topMovies);
        setTopSeries(topSeries);
        setPopularMovies(popularMovies);
        setPopularArtists(popularArtists);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      {movies && (
        <Background img={`${getImages(movies[0].backdrop_path)}`}>
          {modal && <Modal movieId={movies[0].id} setModal={setModal} />}
          <Content>
            <Info>
              <h1>{movies[0].title}</h1>
              <p>{movies[0].overview}</p>
              <ContainerButtons>
                <Button
                  red
                  onClick={() => navigate(`/details/${movies[0].id}`)}
                >
                  Assistir
                </Button>
                <Button onClick={() => setModal(true)}>
                  Assista o trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                src={`${getImages(movies[0].poster_path)}`}
                alt={movies[0].title}
              />
            </Poster>
          </Content>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title="Em alta" />}
      {topSeries && <Slider info={topSeries} title="Séries em alta" />}
      {popularMovies && (
        <Slider info={popularMovies} title="Filmes + procurados" />
      )}
      {popularArtists && <Slider info={popularArtists} title="Top Artistas" />}
    </>
  );
}

export default Home;
