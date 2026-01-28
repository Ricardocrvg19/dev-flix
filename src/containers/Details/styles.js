import styled, { keyframes } from 'styled-components';

const scaleUp = keyframes`
   from {
       transform: scale(0);
   }
   to {
       transform: scale(1);
   }
`;

export const Container = styled.div`

   display: flex;
   align-items: flex-start;
   justify-content: center;
   height: 100%;
   max-width: 3000px;
   margin-top: -100px;
   background-color: black;

   
`;

export const Background = styled.div`

   background-image: url(${(props) => props.image});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   height: 50vh;
   width: 100%;
   position: relative;
   

   &::before{
       content: '';
       position: absolute;
       top: 0;
       left: 0;
        width: 100%;
        height: 100%;
       background: rgba(0, 0, 0, 0.5);
   }

   &::after {
       content: '';
       position: absolute;
       bottom: 0;
       left: 0;
       width: 100%;
       height: 150px;
       background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
   }
`;

export const Cover = styled.div`

   display: flex;
   padding: 20px;
   align-items: flex-start;
   height: 100%;
   z-index: 99;
   

   img{
    width: 400px;   
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scaleUp} 0.5s ease-in-out;
   }
`;

export const Info = styled.div`

    padding: 20px;
    width: 50%;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1{
        font-size: 4rem;
        font-weight: 700;
        color: #fff;
    }

    p{
        font-size: 2rem;
        font-weight: 700;
        color: #fff;
        margin-top: 20px;
        margin-bottom: 30px;
    }
`;

export const ContainerMovies = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;

    background-color: #000;

    div{
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        width: 100%;    
        height: 100%;
        margin: 50px 0;
    }

    h4{
        color: #fff;
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    iframe{
        border: none;
    }
`;
