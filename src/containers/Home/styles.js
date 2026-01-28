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
    background-position: center;
        background-size: cover;
  height: 100vh;
  display: flex ;
  align-items: center;  
  justify-content: center;
  position: relative;

    &::before {
        content: '';  
        position: absolute;
        top: 0;         
        left: 0;
        width: 100%;
        height: 100%;       
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

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;  
    `;

export const Info = styled.div`
    z-index: 2;
    width: 50%;
    padding: 20px;
    
    h1{
        color: #fff;
        font-size: 5rem;
        font-weight: 700;
    };

    p{
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    
    `;

export const Poster = styled.div`
    z-index: 2;
        img{
            width: 380px;
            border-radius: 30px;
            box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
            animation: ${scaleUp} 0.5s ease-in-out;
        }
        
`;

export const ContainerButtons = styled.div`
    display: flex;
    gap: 10px;
`;
