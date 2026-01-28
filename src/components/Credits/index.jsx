/** biome-ignore-all lint/complexity/useOptionalChain: <explanation> */
import { getImages } from '../../utils/getImages';
import { Container, Title } from './styles';

function Credits({ credits }) {
  return (
    <>
      <Title>Credits</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5).map((artist) => (
            <div key={artist.id}>
              <img src={getImages(artist.profile_path)} alt={artist.name} />
              <h5>{artist.original_name}</h5>
            </div>
          ))}
        </Container>
      )}
    </>
  );
}

export default Credits;
