import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    position: fixed;
    z-index: 99;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    background-color: ${(props) => (props.$changeBg ? 'rgba(2, 11, 10, 1)' : 'transparent')};
    min-height: 80px;
    max-height: 100px;

    transition: background-color .7s ease-in-out;

    img{
        padding: 30px;
        width: 10%;
        border: none;
        border-radius: 10px 5px;
        
    }
`;

export const Menu = styled.ul`
   
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    gap: 50px;

    
`;

export const Li = styled.li`
  
    font-weight: 600;
    cursor: pointer;  
    font-size: 28px;
    position: relative;

    a{
        text-decoration: none;
        color: #fff;
    }

    
    &::after {
        content: '';
        width: ${(props) => (props.$isActive ? '100%' : 0)};
        height: 2px;
        background-color: blue;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.5s ease-in-out;
    }

    &:hover::after{
        width: 100%;
    }
`;
