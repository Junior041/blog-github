import { useParams } from 'react-router-dom';
import { PostInfo } from './components/PostInfo';

export function PostPage() {
  const params = useParams();

  return (
    <>
      <PostInfo issueId={params.postId} />
    </>
  );
}
