/** biome-ignore-all lint/complexity/useOptionalChain: <explanation> */
import { Container } from './styles';

function Generos({ genres }) {
  return (
    <Container>
      {genres &&
        genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
    </Container>
  );
}

export default Generos;
