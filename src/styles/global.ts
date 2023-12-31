import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }

    body{
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme.white};
        -webkit-font-smoothing: antialiased;
    }

    body, input, text-area, button{
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size:1rem;
    }
`;
