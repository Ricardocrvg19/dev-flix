import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
     transform: scale(1.1); 
    }

    img {
        border-radius: 30px;
        width: 200px;
        height: 100%
    }

    h3{
        color: #fff;
        margin-top: 15px;
    }
`;
