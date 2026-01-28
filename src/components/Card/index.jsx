/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { Container } from './styles';
import { getImages } from '../../utils/getImages';

function Card({ item, onClick }) {
  console.log('Item no Card:', item);
  if (!item) return null;

  return (
    <Container onClick={onClick}>
      <img
        src={`${getImages(item?.poster_path || item?.profile_path || '')}`}
        alt={item.original_title}
      />
      <h3>{item?.original_title || item?.name}</h3>
    </Container>
  );
}

export default Card;
