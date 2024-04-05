import styled from 'styled-components';
import { Price } from '../components/Header/styles';
// import { Footer } from '../components/Footer';
import { motion } from "framer-motion";
// import { Footer } from '../components/Footer';

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
       <>
         <Container>
            <motion.div
                initial={{ x: -400, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.8 }}
                style={{ width: '12v'}} 
            >
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
                    <Price> R$ 8,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>SPATEN 600ML</TextSmall>
                    <Price> R$ 11,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>STELLA 600ML</TextSmall>
                    <Price> R$ 11,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>IMPÉRIO 600ML</TextSmall>
                    <Price> R$ 10,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>AMSTEL 600ML</TextSmall>
                    <Price> R$ 10,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>ORIGINAL 600ML</TextSmall>
                    <Price> R$ 11,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>MOINHO 600ML</TextSmall>
                    <Price> R$ 8,00</Price>
                </div>
                <HorizontalLine />
            </motion.div>
            <motion.div
                initial={{ x: 400, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.8 }}
                style={{ width: '12v'}} 
            >
                <Title>DESTILADOS</Title>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <TextSmall>CAIPIRINHA</TextSmall>
                    <Price> R$ 15,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>PINGA 51</TextSmall>
                    <Price> R$ 3,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>CONHAQUE</TextSmall>
                    <Price> R$ 4,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>JURUBEBA</TextSmall>
                    <Price> R$ 5,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>RABO DE GALO</TextSmall>
                    <Price> R$ 5,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>CAMPARI</TextSmall>
                    <Price> R$ 10,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>VINHO</TextSmall>
                    <Price> R$ 5,00</Price>
                </div>
            </motion.div>
        </Container>
        {/* <Footer /> */}
       </>
    )
}

export default Drink;