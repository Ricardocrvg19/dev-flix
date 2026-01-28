import styled from 'styled-components';

export const Container = styled.div`
   
   background: #000;
   width: 70%;
   display: flex;       
   align-items: center;
   justify-content: center;
   position: fixed;
   padding: 50px;
   max-width: 1200px;

   iframe{
    border: none;

   }
   `;

export const Background = styled.div`
   
   height: 100vh;
   width: 100vw;
   z-index: 999;
   background-color: rgba(0, 0, 0, 0.8);
   position: absolute;
   
   display: flex;   
   align-items: center;
   justify-content: center;
`;

export const Button = styled.button`
    position: absolute; 
    top: -73px;           
    
    background: none;   
    border: none;        
    color: #ff0000;     
    font-size: 60px;     
    cursor: pointer;   
    z-index: 1000;       

    &:hover {
        color: #cc0000;  
        transform: scale(1.1);
    }
`;
