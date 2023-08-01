import Cover from '../../assets/Cover.svg';
import { HeaderContainer } from './styles';
export function Header() {
  return (
    <HeaderContainer>
      <img width="100%" src={Cover} alt="" />
    </HeaderContainer>
  );
}
