import { NavLink, Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { DefaultLayoutHeader } from './styles';

export function DefaultLayout() {
  return (
    <>
      <NavLink to={'/'}>
        <Header />
      </NavLink>
      <DefaultLayoutHeader>
        <Outlet />
      </DefaultLayoutHeader>
    </>
  );
}
