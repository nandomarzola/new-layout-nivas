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

const Soup = () => {
    return (
       <>
         <Container>
            <motion.div
                initial={{ x: -400, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.8 }}
                style={{ width: '12v'}} 
            >
                <Title>CALDOS</Title>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px', marginTop:'10px'}}>
                    <TextSmall>DOBRADINHA</TextSmall>
                    <Price> R$ 35,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>MOÉLA</TextSmall>
                    <Price> R$ 35,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>LINGUA</TextSmall>
                    <Price> R$ 35,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>MOCOTÓ</TextSmall>
                    <Price> R$ 10,00</Price>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                    <TextSmall>ESCONDIDINHO DE CARNE SECA</TextSmall>
                    <Price> R$ 20,00</Price>
                </div>
                <HorizontalLine />
            </motion.div>
            <motion.div
                initial={{ y: 500, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 1.5 }}
                style={{ width: '12v'}} 
            >   
                <a href="https://www.instagram.com/roseemarquess/" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'5px',}}>
                    <img 
                        src="images/rm.png"  
                        alt="Planet Pet"
                        style={{height:'38vh',  marginTop:'10px', marginBottom:'10px'}}
                    />
                </a>  
            </motion.div>
        </Container>
        {/* <Footer /> */}
       </>
    )
}

export default Soup;