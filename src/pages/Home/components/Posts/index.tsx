import { IssueType } from '../../../../@types/issue';
import { PostCard, PostDescricao, PostTitle } from './styles';

export function Posts({ issue }: { issue: IssueType }) {
  return (
    <PostCard>
      <PostTitle>
        <h4>{issue.title}</h4>
        <span>Há 1 dia</span>
      </PostTitle>
      <PostDescricao>{issue.body}</PostDescricao>
    </PostCard>
  );
}
