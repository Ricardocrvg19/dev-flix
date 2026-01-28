import styled, { keyframes } from 'styled-components';

const scaleUp = keyframes`
   from {
       transform: scale(0);
   }
   to {
       transform: scale(1);
   }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh; 
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

    animation: ${scaleUp} 0.5s ease-in-out;

  

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); 
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 1500px;
    z-index: 2; 
    padding: 0 20px;

    
`;

export const Info = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    
    align-items: flex-start; 

    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        color: #ffffff;
        line-height: 1;
    }

    p {
        font-size: 1.1rem;
        font-weight: 500;
        color: rgba(255, 255, 255, .7 );
        margin-top: 20px;
        margin-bottom: 20px;
        max-width: 600px;
    }

    Button{
      margin-top: 45px;
      height: 80px;
      width: 200px;
    }
`;

export const Cover = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;

    img {
        width: 300px;
        border-radius: 20px;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
   
    }
`;
