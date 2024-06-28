import styled from 'styled-components';
import { Price } from '../components/Header/styles';
import { motion } from "framer-motion";

export const Container = styled.div`
   display:flex;
   justify-content:center;
   flex-direction:column;
   padding: 1rem;
   color:#FFF;
`;

export const Title = styled.h1`
   font-size:18px;
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

const Cookies = () => {
    return (
       <>
         <Container>
            <motion.div
                initial={{ x: -400, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.8 }}
                style={{ width: '12v'}} 
            >
                <Title>SALGADOS</Title>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <TextSmall>ESFIRRA</TextSmall>
                    <Price> R$ 10,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>COXINHA</TextSmall>
                    <Price> R$ 10,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>KIBE</TextSmall>
                    <Price> R$ 8,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>CARNE</TextSmall>
                    <Price> R$ 10,00</Price>
                </div>
                <HorizontalLine />
                <Title>BOLINHOS</Title>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <TextSmall>CARNE SECA</TextSmall>
                    <Price> R$ 3,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>BACALHAU</TextSmall>
                    <Price> R$ 3,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>QUEIJO</TextSmall>
                    <Price> R$ 3,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>LINGUIÇA</TextSmall>
                    <Price> R$ 3,00</Price>
                </div>
                <HorizontalLine />
                <Title>PASTEIS</Title>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <TextSmall>CARNE</TextSmall>
                    <Price> R$ 10,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>PIZZA</TextSmall>
                    <Price> R$ 10,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>QUEIJO</TextSmall>
                    <Price> R$ 10,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>TILÁPIA</TextSmall>
                    <Price> R$ 10,00</Price>
                </div>
                <HorizontalLine />
                <Title>ESPETOS</Title>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <TextSmall>TILÁPIA</TextSmall>
                    <Price> R$ 10,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>CARNE</TextSmall>
                    <Price> R$ 10,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>FRANGO</TextSmall>
                    <Price> R$ 10,00</Price>
                </div>
                <HorizontalLine />
                
            </motion.div>
        </Container>
       </>
    )
}

export default Cookies;