import { useParams } from 'react-router-dom';
import { PostInfo } from './components/PostInfo';
import { PostPageContainer } from './styles';

export function PostPage() {
  const params = useParams();

  return (
    <PostPageContainer>
      <PostInfo issueId={Number(params.postId)} />
    </PostPageContainer>
  );
}
