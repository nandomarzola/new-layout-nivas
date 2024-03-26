import styled from 'styled-components';
import { Price } from '../components/Header/styles';

export const Container = styled.div`
   display:flex;
   justify-content:center;
   flex-direction:column;
   padding: 1rem;
   color:#FFF;
`;

export const Title = styled.h1`
   font-size:18px;
   width:240px;
   border-radius:8px;
   color:#F29F05;
`
export const TextSmall = styled.p`
   font-size:12px;
   font-family: "Roboto", sans-serif;
   max-width:250px;
    font-weight:bold
`
export const HorizontalLine = styled.hr`
   border: 0;
   height: 1px; /* Altura da linha */
   background: linear-gradient(to right, #888, #F29F05, #888); /* Gradiente de cores */
   margin: 20px 0; /* Espaçamento acima e abaixo da linha */
`;

const Drink = () => {
    return (
        <Container>
            <Title>CERVEJAS</Title>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                <TextSmall>HEINEKEN 600ML</TextSmall>
                <Price> R$ 13,00</Price>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>SKOL 600ML</TextSmall>
                <Price> R$ 10,00</Price>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>BRAHMA 600ML</TextSmall>
                <Price> R$ 10,00</Price>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>ANTARTICA BOA 600ML</TextSmall>
                <Price> R$ 10,00</Price>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>SUBZERO 600ML</TextSmall>
                <Price> R$ 10,00</Price>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>SPATEN 600ML</TextSmall>
                <Price> R$ 10,00</Price>
            </div>
            <HorizontalLine />
            <Title>DESTILADOS</Title>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                <TextSmall>VODKA</TextSmall>
                <Price> R$ 8,00</Price>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>PINGA 51</TextSmall>
                <Price> R$ 4,00</Price>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>CONHAQUE</TextSmall>
                <Price> R$ 4,00</Price>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>CATUABA</TextSmall>
                <Price> R$ 4,00</Price>
            </div>
        </Container>
    )
}

export default Drink;