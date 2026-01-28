import { Routes, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Movies from '../containers/Movies';
import Series from '../containers/Series';
import Details from '../containers/Details';

import LayoutDefault from '../components/layouts/DefaultLayout';

function Router() {
  return (
    <Routes>
      <Route element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default Router;
