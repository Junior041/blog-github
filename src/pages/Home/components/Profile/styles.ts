import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2.625rem 2rem;
  position: relative;
  top: -90px;
  width: 100%;

  display: flex;
  align-items: initial;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;

  > img {
    border-radius: 8px;
  }
`;

export const DadosProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const NomeProfile = styled.div`
  display: flex;
  width: 100%;
  align-items: initial;
  justify-content: space-between;

  > span {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
  }
  > a {
    display: inline-flex;
    align-items: center;
    font-size: 0.75rem;
    gap: 0.5rem;
    font-weight: 700;
    text-decoration-line: none;
    text-decoration-thickness: 2px;

    &:focus,
    &:hover {
      outline: 0;
      box-shadow: 0 0 0;
      text-decoration-line: underline;
      text-decoration-thickness: 2px;
      text-decoration-color: ${(props) => props.theme['base-blue']};
    }

    > span {
      color: ${(props) => props.theme['base-blue']};
    }
  }
`;

export const ResumoProfile = styled.div`
  margin-top: 0.5rem;
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%; /* 1.6rem */
`;

export const LinksProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    > span {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;
