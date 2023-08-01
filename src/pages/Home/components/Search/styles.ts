import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  span:first-child {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 160%; /* 1.8rem */
  }

  span:last-child {
    color: ${(props) => props.theme['base-span']};
    text-align: right;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 1.4rem */
  }
`;

export const SearchInput = styled.input`
  margin-top: 1.5rem;
  display: flex;
  width: 100%;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme['base-border']};
  background: ${(props) => props.theme['base-input']};

  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%; /* 1.6rem */

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`;
