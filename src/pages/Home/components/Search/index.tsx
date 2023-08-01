import { SearchContainer, SearchInput, SearchTitle } from './styles';
import { ChangeEvent } from 'react';

const handleChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {};

export function Search() {
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
