import {
  PostInfoContainer,
  PostInfoLinks,
  PostLinks,
  PostTitle,
} from './styles';
import Voltar from '../../../../assets/Voltar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import GithubSVG from '../../../../assets/Github.svg';
import { useContext, useEffect } from 'react';
import { GithubContext } from '../../../../contexts/GithubContexts';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ptBR from 'dayjs/locale/pt-br';

interface PostComponentPros {
  issueId: number;
}

export function PostInfo(issueId: PostComponentPros) {
  dayjs.extend(relativeTime);
  dayjs.locale(ptBR);
  const { fetchOneIssue, oneIssue } = useContext(GithubContext);

  useEffect(() => {
    fetchOneIssue(Number(issueId));
  }, []);

  return (
    <PostInfoContainer>
      <div>
        <PostInfoLinks to={'/'}>
          <img src={Voltar} alt="" />
          <span>Voltar</span>
        </PostInfoLinks>
        <PostInfoLinks to={'/'}>
          <span>ver no github</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </PostInfoLinks>
      </div>
      <PostTitle>JavaScript data types and data structures</PostTitle>
      <PostLinks>
        <div>
          <img src={GithubSVG} alt="" />
          <span>{oneIssue?.author_association}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{dayjs().to(dayjs(oneIssue?.created_at))}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>{oneIssue?.comments} comentários</span>
        </div>
      </PostLinks>
    </PostInfoContainer>
  );
}
