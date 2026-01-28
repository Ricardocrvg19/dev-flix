import styled, { css } from 'styled-components';

const buttonStyled = css`

    border: 3px solid #fff;
    background-color: transparent;  
    color: #fff;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight:500;

    &:hover {
        background-color: #fff;
        color: #ff0000;
    }

`;

export const ButtonWhite = styled.button`
    ${buttonStyled}
`;
export const ButtonRed = styled.button`
    ${buttonStyled}
        background-color: #ff0000;
        border: none;
        color: #fff;
        cursor: pointer;
        box-shadow: 1px 0px 35px 2px rgba(255,0,0,0.69);

           &:hover {
        background-color: #ff0000;
        color: #fff;
        box-shadow: 2px 0px 40px 6px rgba(255,0,0,0.69);
    }
`;
