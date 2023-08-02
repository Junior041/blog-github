import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GithubContext } from '../../contexts/GithubContexts';
import { ProfileContainer } from '../Home/components/Profile/styles';
import { PostInfo } from './components/PostInfo';

export function PostPage() {
  const params = useParams();
  const { fetchOneIssue, oneIssue } = useContext(GithubContext);

  // useEffect(() => {
  //   fetchOneIssue(Number(params.postId));
  // }, []);
  console.log(oneIssue);

  return (
    <>
      <PostInfo />
    </>
  );
}
