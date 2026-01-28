/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { useEffect, useState } from 'react';
import { Background, Container, Button } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { getMovieVideos } from '../../services/getAllData';

function Modal({ movieId, setModal, isTV }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      const videos = await getMovieVideos(movieId, isTV);

      if (videos && videos.length > 0) {
        const trailer =
          videos.find((v) => v.type === 'Trailer' && v.site === 'YouTube') ||
          videos.find((v) => v.type === 'Teaser' && v.site === 'YouTube') ||
          videos.find((v) => v.site === 'YouTube');
        setMovie(trailer);
      }
    }

    getMovies();
  }, [movieId, isTV]);

  return (
    <Background onClick={() => setModal(false)}>
      {movie && (
        <Container>
          <Button type="button" onClick={() => setModal(false)}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </Button>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
