import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { DefaultLayoutHeader } from './styles';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <DefaultLayoutHeader>
        <Outlet />
      </DefaultLayoutHeader>
    </>
  );
}
