import styled from 'styled-components';

export const Container = styled.div`
   display:flex;
   justify-content:center;
   flex-direction:column;
   align-items:center;
   position:absolute;
   bottom:0;
   background:#323131;
   height: 10vh;
   width:100%;
`;

export const Text = styled.p`
    color:white;
    font-size:10px;
    font-family: "Roboto", sans-serif;

    & a {
        color: inherit;
        text-decoration: underline;
        font-weight:bold 
    }
`