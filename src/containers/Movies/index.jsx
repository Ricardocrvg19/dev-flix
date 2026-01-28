import { useEffect, useState } from 'react';

import Slider from '../../components/Slider';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { getImages } from '../../utils/getImages';
import { getMoviesByGenre, getTopMovies } from '../../services/getAllData';
import { Background, Content, Info } from './styles';

import { getFeaturedMovie } from '../../services/getAllData';

function Movies() {
  const [actionMovies, setActionMovies] = useState();
  const [comedyMovies, setComedyMovies] = useState();
  const [topRated, setTopRated] = useState();
  const [horrorMovies, setHorrorMovies] = useState();
  const [featuredMovie, setFeaturedMovie] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getAllData() {
      const [action, comedy, horror, top, featured] = await Promise.all([
        getMoviesByGenre(28),
        getMoviesByGenre(35),
        getMoviesByGenre(27),
        getTopMovies(),
        getFeaturedMovie()
      ]);
      setActionMovies(action);
      setComedyMovies(comedy);
      setHorrorMovies(horror);
      setTopRated(top);
      setFeaturedMovie(top[0]);
    }
    getAllData();
  }, []);

  const handleMovieClick = (movie) => {
    setFeaturedMovie(movie);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {featuredMovie && (
        <Background img={getImages(featuredMovie.backdrop_path)}>
          {showModal && featuredMovie && (
            <Modal movieId={featuredMovie.id} setModal={setShowModal} />
          )}

          <Content>
            <Info>
              <h1>{featuredMovie.title || featuredMovie.name}</h1>
              <p>{featuredMovie.overview}</p>
              <Button red onClick={() => setShowModal(true)}>
                Assistir
              </Button>
            </Info>
          </Content>
        </Background>
      )}
      {actionMovies && (
        <Slider title="Ação" info={actionMovies} onClick={handleMovieClick} />
      )}
      {comedyMovies && (
        <Slider
          title="Comédia"
          info={comedyMovies}
          onClick={handleMovieClick}
        />
      )}
      {horrorMovies && (
        <Slider title="Terror" info={horrorMovies} onClick={handleMovieClick} />
      )}
      {topRated && (
        <Slider
          title="Filmes + assistidos"
          info={topRated}
          onClick={handleMovieClick}
        />
      )}
    </>
  );
}

export default Movies;
