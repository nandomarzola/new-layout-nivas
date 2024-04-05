import styled from 'styled-components';
import { Price } from '../components/Header/styles';
// import { Footer } from '../components/Footer';
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

const DrinkNotAlcohol = () => {
    return (
       <>
         <Container>
            <motion.div
                initial={{ x: -400, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.8 }}
                style={{ width: '12v'}} 
            >
                <Title>BEBIDAS NÃO ALCOOLICAS</Title>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <TextSmall>COCA-COLA 290ML</TextSmall>
                    <Price> R$ 5,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>COCA-COLA LATA</TextSmall>
                    <Price> R$ 6,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>COCA-COLA 1L</TextSmall>
                    <Price> R$ 8,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>COCA-COLA 600ML</TextSmall>
                    <Price> R$ 7,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>SUCO 1L</TextSmall>
                    <Price> R$ 14,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>COCA-COLA 2L</TextSmall>
                    <Price> R$ 13,00</Price>
                </div>
                <HorizontalLine />
            </motion.div>
        </Container>
        {/* <Footer /> */}
       </>
    )
}

export default DrinkNotAlcohol;