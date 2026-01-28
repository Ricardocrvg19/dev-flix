/** biome-ignore-all assist/source/organizeImports: <explanation> */
import { getImages } from '../../utils/getImages';
import Card from '../Card';
import { Container } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';

function Slider({ info, title, onClick }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={20}
        slidesPerView={'auto'}
        className="swiper"
      >
        {info.map((item) => (
          <SwiperSlide key={item.id}>
            <Card item={item} onClick={() => onClick(item)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Slider;
