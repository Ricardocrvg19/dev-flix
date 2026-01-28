import styled from 'styled-components';

export const Title = styled.h4`

    color: #fff;
    font-size: 30px;
    font-weight: 700;

`;
export const Container = styled.div`

    
    display: flex;  
    margin-top: 40px;
    gap: 10px;  
    padding: 10px;
    overflow-x: hidden;
    z-index: 99;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    h5{
        color: #fff;
        font-size: 20px;
       
    }

    img{
        height: 250px;
    }

   
`;
