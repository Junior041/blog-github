import styled from 'styled-components';

export const PostCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme['base-post']};
  gap: 1.25rem;
  min-width: 300px;
`;

export const PostTitle = styled.div`
  display: grid;
  grid-template-columns: 70% 1fr;
  line-height: 160%;

  > h4 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.25rem;
    font-weight: 700;
  }

  > span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    font-weight: 400;
    text-align: right;
  }
`;

export const PostDescricao = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  height: 100%;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};
`;
