import api from './api';

export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular');

  return results;
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated');

  return results;
}

export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated');

  return results;
}

export async function getSeriesById(series_id) {
  const { data } = await api.get(`/tv/${series_id}`, {
    params: {
      append_to_response: 'credits'
    }
  });
  return data;
}

export async function getPopularMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular');

  return results;
}

export async function getPopularArtists() {
  const {
    data: { results }
  } = await api.get('/person/popular');

  return results;
}

export async function getMovieVideos(movieId, isTV) {
  const path = isTV ? 'tv' : 'movie';
  const {
    data: { results }
  } = await api.get(`/${path}/${movieId}/videos`);

  return results;
}

export async function getRecommendations(series_id) {
  const {
    data: { results }
  } = await api.get(`/tv/${series_id}/recommendations`);

  return results;
}

export async function getOnTheAir() {
  const {
    data: { results }
  } = await api.get('/tv/on_the_air');

  return results;
}

export async function getAiringToday() {
  const {
    data: { results }
  } = await api.get('/tv/airing_today');

  return results;
}

export async function getCredits(movieId) {
  const {
    data: { cast }
  } = await api.get(`/movie/${movieId}/credits`);

  return cast;
}

export async function getSimilarMovies(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/similar`);

  return results;
}

export async function getMoviesById(movieId) {
  const { data } = await api.get(`/movie/${movieId}`);

  return data;
}

export async function getMoviesByGenre(genreId) {
  const {
    data: { results }
  } = await api.get(`/discover/movie`, {
    params: {
      with_genres: genreId
    }
  });

  return results;
}

export async function getFeaturedMovie() {
  const {
    data: { results }
  } = await api.get(`/movie/popular`);

  return results[0];
}
