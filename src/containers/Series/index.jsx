import { useEffect, useState, useCallback } from 'react';
import Slider from '../../components/Slider';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Credits from '../../components/Credits';
import Generos from '../../components/Genres';
import { getImages } from '../../utils/getImages';
import { Background, Content, Info, Cover } from './styles';
import {
  getTopSeries,
  getSeriesById,
  getAiringToday,
  getOnTheAir,
  getRecommendations
} from '../../services/getAllData';

function Series() {
  const [topSeries, setTopSeries] = useState(null);
  const [seriesList, setSeriesList] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [credits, setCredits] = useState(null);

  const loadSeriesDetails = useCallback(async (id) => {
    try {
      const [details, recs] = await Promise.all([
        getSeriesById(id),
        getRecommendations(id)
      ]);

      setTopSeries(details);
      setCredits(details.credits);
      setRecommendations(recs);
    } catch (error) {
      console.error('Erro ao buscar detalhes da série:', error);
    }
  }, []);

  useEffect(() => {
    async function getAllData() {
      try {
        const allSeries = await getTopSeries();
        const onAirData = await getOnTheAir();
        const todayData = await getAiringToday();
        if (allSeries && allSeries.length > 0) {
          setSeriesList(allSeries);
          setOnTheAir(onAirData);
          setAiringToday(todayData);

          await loadSeriesDetails(allSeries[0].id);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
    getAllData();
  }, [loadSeriesDetails]);

  const handleMovieClick = (series) => {
    loadSeriesDetails(series.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {topSeries && (
        <Background img={getImages(topSeries.backdrop_path)}>
          {showModal && (
            <Modal movieId={topSeries.id} setModal={setShowModal} isTV={true} />
          )}
          <Content>
            <Cover>
              <img
                src={getImages(topSeries.poster_path)}
                alt={topSeries.name}
              />
            </Cover>

            <Info>
              <h1>{topSeries.name}</h1>
              <Generos genres={topSeries.genres} />

              {topSeries.number_of_seasons && (
                <p style={{ fontWeight: 'bold', color: '#fff' }}>
                  {topSeries.number_of_seasons} Temporada
                  {topSeries.number_of_seasons > 1 ? 's' : ''}
                </p>
              )}

              <p>{topSeries.overview}</p>

              {credits && <Credits credits={credits.cast} />}

              <Button red onClick={() => setShowModal(true)}>
                Assistir
              </Button>
            </Info>
          </Content>
        </Background>
      )}

      {seriesList.length > 0 && (
        <Slider
          title="Séries Populares"
          info={seriesList}
          onClick={handleMovieClick}
        />
      )}
      {recommendations.length > 0 && (
        <Slider
          title="Recomendações"
          info={recommendations}
          onClick={handleMovieClick}
        />
      )}
      {onTheAir.length > 0 && (
        <Slider
          title="Em Exibição"
          info={onTheAir}
          onClick={handleMovieClick}
        />
      )}
      {airingToday.length > 0 && (
        <Slider
          title="No ar hoje"
          info={airingToday}
          onClick={handleMovieClick}
        />
      )}
    </>
  );
}

export default Series;
