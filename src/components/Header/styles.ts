import styled from 'styled-components';

export const Container = styled.div`
   display:flex;
   justify-content:center;
   flex-direction:column;
   color:#FEC108;
   width:100%;
`;

export const Image = styled.img`
   margin:0 auto;
`;

export const SubTitle = styled.h1`
   color:#FEC108;
   font-family: "Lobster Two", sans-serif;
   font-weight: 400;
   font-style: normal;
   text-align:center;
`

export const AreaCard = styled.div`
   height:6vh;
   background:#FEC108;
   width:100%;
`

export const Content = styled.div`
   width:100%;
   display:flex;
   flex-direction:column;

   & h1{
      color:#fff;
      font-size:18px;
      margin:8px 0 5px 0;
      font-family: "Roboto Condensed", sans-serif;
      font-optical-sizing: auto;
      font-weight: bold;
      font-style: normal;
   }
`

export const SocialContent = styled.div`
   margin-top:18px;
   display:flex;
   gap:42px;
   justify-content:space-between;
`

export const SocialWpp = styled.a`
   background:green;
   width:33vh;
   height:6vh;
   border-radius:8px;
   display:flex;
   justify-content:center;
   padding:22px;
   align-items:center;
   gap:8px;
   font-size:22px;
   color:#FFF;
   font-family: "Roboto Condensed", sans-serif;
   font-optical-sizing: auto;
   font-weight: bold;
   font-style: normal;
   text-align:center;
`

export const SocialInsta = styled.a`
   background:red;
   width:34vh;
   height:6vh;
   border-radius:8px;
   display:flex;
   gap:8px;
   padding:4px;
   justify-content:center;
   align-items:center;
   font-size:22px;
   color:#FFF;
   font-family: "Roboto Condensed", sans-serif;
   font-optical-sizing: auto;
   font-weight: bold;
   font-style: normal;
   text-align:center;
`

export const HorizontalLine = styled.hr`
   margin-top:12px;
   border: 2px solid red;
   border-style: dotted;
`;

export const Price = styled.p`
   font-size:12px;
   font-weight:bold;
   color:#F29F05;
   font-family: "Roboto", sans-serif;
`

