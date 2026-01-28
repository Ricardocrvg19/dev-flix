import { Outlet } from 'react-router-dom';
import Header from '../Header';

function LayoutDefault() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default LayoutDefault;
