import { useContext, useEffect } from 'react';
import { Posts } from './components/Posts';
import { Profile } from './components/Profile';
import { Search } from './components/Search';
import { HomeContainer, PostsContainer } from './styles';
import { GithubContext } from '../../contexts/GithubContexts';

export function Home() {
  const {
    issues: { items },
    fetchIssues,
  } = useContext(GithubContext);
  useEffect(() => {
    fetchIssues();
  }, []);
  return (
    <HomeContainer>
      <Profile />
      <Search />
      <PostsContainer>
        {items.map((item) => (
          // Certifique-se de passar a propriedade "issue" para cada instância do componente "Posts"
          <Posts key={item.id} issue={item} />
        ))}
      </PostsContainer>
    </HomeContainer>
  );
}
