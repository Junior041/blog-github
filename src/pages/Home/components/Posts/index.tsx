import { IssueType } from '../../../../@types/issue';
import { PostCard, PostDescricao, PostTitle } from './styles';

interface PostsProps {
  issue: IssueType[];
}

export function Posts(issue: PostsProps) {
  console.log(issue);

  return (
    <PostCard>
      <PostTitle>
        <h4>JavaScript data types and data structures</h4>
        <span>Há 1 dia</span>
      </PostTitle>
      <PostDescricao>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures.
      </PostDescricao>
    </PostCard>
  );
}
