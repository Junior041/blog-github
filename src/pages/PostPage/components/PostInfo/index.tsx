import { PostInfoContainer, PostInfoLinks } from './styles';
import Voltar from '../../../../assets/Voltar.svg';
import GithubSVG from '../../../../assets/Github.svg';

export function PostInfo() {
  return (
    <PostInfoContainer>
      <div>
        <PostInfoLinks to={'/'}>
          <img src={Voltar} alt="" />
          <span>Voltar</span>
        </PostInfoLinks>
        <PostInfoLinks to={'/'}>
          <span>ver no github</span>
          <img src={GithubSVG} alt="" />
        </PostInfoLinks>
        <PostInfoLinks to={'/'}></PostInfoLinks>
      </div>
      <div></div>
    </PostInfoContainer>
  );
}
