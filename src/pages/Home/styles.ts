import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0 1;
  flex-direction: column;
`;

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 3rem 0rem;
  gap: 3rem;
`;
