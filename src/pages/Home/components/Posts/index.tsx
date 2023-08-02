import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-br';
import { IssueType } from '../../../../@types/issue';
import { PostCard, PostDescricao, PostTitle } from './styles';
import relativeTime from 'dayjs/plugin/relativeTime';

export function Posts({ issue }: { issue: IssueType }) {
  dayjs.extend(relativeTime);
  dayjs.locale(ptBR);
  return (
    <PostCard to={`/post/${issue.number}`}>
      <PostTitle>
        <h4>{issue.title}</h4>
        <time> {dayjs().to(dayjs(issue.created_at))}</time>
      </PostTitle>
      <PostDescricao>{issue.body}</PostDescricao>
    </PostCard>
  );
}
