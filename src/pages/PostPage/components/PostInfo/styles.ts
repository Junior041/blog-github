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

  div:first-child {
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

  &:hover {
    text-decoration: underline;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
