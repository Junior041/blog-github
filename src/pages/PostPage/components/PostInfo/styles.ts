import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PostInfoContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2.625rem 2rem;
  position: relative;
  top: -90px;
  width: 100%;
  min-height: 232px;

  display: flex;
  align-items: initial;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const PostInfoLinks = styled(NavLink)`
  color: ${(props) => props.theme['base-blue']};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  text-decoration: none;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostTitle = styled.h1`
  display: flex;
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%; /* 1.95rem */
`;

export const PostLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg {
      color: ${(props) => props.theme['base-label']};
    }
    > span {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;
