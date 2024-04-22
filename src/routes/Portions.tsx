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
                        <TextSmall style={{fontSize: '14px'}}>COSTELINHA</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(MANDIOCA, CEBOLA)</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 55,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>FRANGO A PASSARINHO</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(BATATA, CEBOLA)</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 55,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>PICANHA</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(VINAGRETE, FAROFA)</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 90,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>MISTO NA CHAPA</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(CONTRA-FILÉ, FRANGO, LINGUIÇA, CALABRESA,VINAGRETE, FAROFA)</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 70,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>FRIOS</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(SALAME, QUEIJO, TOMATE, OVO, AZEITONA, PALMITO)</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 50,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>FRALDINHA</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(MANDIOCA)</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 55,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>BATATA SIMPLES</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 20,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>BATATA</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(QUEIJO, BACON)</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 35,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>MEDALHÃO</TextSmall>
                        <TextSmall style={{fontSize: '9px', fontWeight:'bold'}}>(TILÁPIA, QUEIJO, BACON, AZEITONA)</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 60,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>SALAME</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 20,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>MANDIOCA</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 20,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>CALABRESA</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 30,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>TILÁPIA</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 55,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>SASHIMI</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 50,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                    <TextSmall style={{fontSize: '14px'}}>CARNE SECA ACEBOLADA</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 60,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>PASTELZINHO (20 UNIDADES)</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 25,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <div>
                        <TextSmall style={{fontSize: '14px'}}>SUSHI</TextSmall>
                    </div>
                    <Price style={{fontSize:'14px'}}> R$ 25,00</Price>
                </div>
                <HorizontalLine />
            </motion.div>
        </Container>
        {/* <Footer /> */}
       </>
    )
}

export default DrinkNotAlcohol;