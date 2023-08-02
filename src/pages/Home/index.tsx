import { useContext, useEffect } from 'react';
import { Posts } from './components/Posts';
import { Profile } from './components/Profile';
import { Search } from './components/Search';
import { HomeContainer, PostsContainer } from './styles';
import { GithubContext } from '../../contexts/GithubContexts';

export function Home() {
  const { issues, fetchIssues } = useContext(GithubContext);
  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <HomeContainer>
      <Profile />
      <Search />
      <PostsContainer>
        {issues.map((item) => (
          <Posts key={item.id} issue={item} />
        ))}
      </PostsContainer>
    </HomeContainer>
  );
}
