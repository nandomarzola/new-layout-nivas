import styled from 'styled-components';

export const Container = styled.div`
   display:flex;
   justify-content:center;
   flex-direction:column;
   padding: 1rem;
   color:#FFF;
`;

export const ImgLogo = styled.img`
   width:12rem;
   margin:0 auto;
`;

export const HorizontalLine = styled.hr`
   border: 0;
   height: 1px; /* Altura da linha */
   background: linear-gradient(to right, #888, #F29F05, #888); /* Gradiente de cores */
   margin: 10px 0; /* Espaçamento acima e abaixo da linha */
`;

export const Title = styled.h1`
   font-size:18px;
   padding:5px;
   width:240px;
   border-radius:8px;
   color:#F29F05;
`

export const Text = styled.p`
   font-family: "Roboto", sans-serif;
   margin-top:10px;
   font-weight:bold;
   margin-bottom:12px;
`

export const TextSmall = styled.p`
   font-size:10px;
   font-family: "Roboto", sans-serif;
   max-width:250px;

`

export const Price = styled.p`
   font-size:12px;
   font-weight:bold;
   color:#F29F05;
   font-family: "Roboto", sans-serif;
`

export const Button = styled.button`
   background: #F29F05;
   font-family: "Roboto", sans-serif;
   border:0;
   height:45px;
   border-radius:8px;
   display:flex;
   justify-content:center;
   align-items:center;
   text-transform:uppercase;
   font-weight:bold;
   margin-top:12px;
   font-size:14px;
   gap:10px;
   cursor:pointer;
`  