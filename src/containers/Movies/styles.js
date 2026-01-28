import styled from 'styled-components';

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 80vh; 
  background-position: center;
  background-size: cover;
  display: flex;
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
    background-color: rgba(0, 0, 0, 0.5); 
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
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
`;

export const Info = styled.div`

    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        color: #ffffff;
    }

    p {
        font-size: 1rem;
        font-weight: 500;
        color: rgba(255, 255, 255, .7 );

        margin-top: 30px;
        margin-bottom: 50px;
    }
`;
