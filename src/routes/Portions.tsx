import styled from 'styled-components';
import { Price } from '../components/Header/styles';
// import { Footer } from '../components/Footer';
import { motion } from "framer-motion";
import { Footer } from '../components/Footer';

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
                <Title>PORÇÕES</Title>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>COSTELINHA (MANDIOCA, CEBOLA)</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(MANDIOCA, CEBOLA)</TextSmall>
                    </div>
                    <Price> R$ 55,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>FRANGO A PASSARINHO (BATATA, CEBOLA)</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(BATATA, CEBOLA)</TextSmall>
                    </div>
                    <Price> R$ 55,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>PICANHA</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(VINAGRETE, FAROFA)</TextSmall>
                    </div>
                    <Price> R$ 90,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>MISTO NA CHAPA</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(CONTRA-FILÉ, FRANGO, LINGUIÇA, CALABRESA,VINAGRETE, FAROFA)</TextSmall>
                    </div>
                    <Price> R$ 70,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>FRIOS</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(SALAME, QUEIJO, TOMATE, OVO, AZEITONA, PALMITO)</TextSmall>
                    </div>
                    <Price> R$ 50,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>FRALDINHA</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(MANDIOCA)</TextSmall>
                    </div>
                    <Price> R$ 55,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>BATATA SIMPLES</TextSmall>
                    </div>
                    <Price> R$ 20,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>BATATA</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(QUEIJO, BACON)</TextSmall>
                    </div>
                    <Price> R$ 35,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>MEDALHÃO</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(TILÁPIA, QUEIJO, BACON, AZEITONA)</TextSmall>
                    </div>
                    <Price> R$ 60,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>SALAME</TextSmall>
                    </div>
                    <Price> R$ 20,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>MANDIOCA</TextSmall>
                    </div>
                    <Price> R$ 20,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>CALABRESA</TextSmall>
                    </div>
                    <Price> R$ 30,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>TILÁPIA</TextSmall>
                    </div>
                    <Price> R$ 55,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>TEMAKI</TextSmall>
                    </div>
                    <Price> R$ 20,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>SASHIMI</TextSmall>
                    </div>
                    <Price> R$ 50,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>PARMEGIANA DE CARNE</TextSmall>
                    </div>
                    <Price> R$ 20,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall>ESCONDIDINHO DE CARNE SECA</TextSmall>
                    </div>
                    <Price> R$ 15,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                    <TextSmall>CARNE SECA ACEBOLADA</TextSmall>
                    </div>
                    <Price> R$ 60,00</Price>
                </div>
                <HorizontalLine />
            </motion.div>
        </Container>
        <Footer />
       </>
    )
}

export default DrinkNotAlcohol;