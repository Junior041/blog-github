import { GithubContext } from '../../../../contexts/GithubContexts';
import { SearchContainer, SearchInput, SearchTitle } from './styles';
import { ChangeEvent, useContext } from 'react';

export function Search() {
  const { filterIssues } = useContext(GithubContext);
  const handleChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    filterIssues(event.target.value);
  };
  return (
    <SearchContainer>
      <SearchTitle>
        <span>Publicações</span>
        <span>6 Publicações</span>
      </SearchTitle>
      <SearchInput
        onChange={handleChangeSearchInput}
        placeholder="Buscar conteúdo"
      />
    </SearchContainer>
  );
}
