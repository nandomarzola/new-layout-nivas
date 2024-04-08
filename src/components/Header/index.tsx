import { useNavigate } from 'react-router';

import {
    Container,
    Title,
    HorizontalLine,
    Button
} from './styles'

import { HiArrowCircleDown } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Header(){

    const navigate = useNavigate();

    return (
        <Container>
            <Title>PARCEIROS</Title>
            <motion.div
                initial={{ x: -400, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1.5 }}
                style={{ width: '12v'}} 
            >
                <a href="https://www.instagram.com/nandomarzoladev/" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'5px',}}>
                    <img 
                        src="images/logo-transparent.png"  
                        alt="Nando Marzola"
                        style={{height:'12vh'}}
                    />
                </a>  
                <HorizontalLine />       
            </motion.div>
            
            <motion.div
                initial={{ x: 500, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1.5 }}
                style={{ width: '12v'}} 
            >
                <a href="https://www.instagram.com/omegatechservice/" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'5px', }}>
                    <img 
                        src="images/omega.png"  
                        alt="Omega"
                        style={{width:'36vh'}}
                    />    
                </a>  
                <HorizontalLine />
            </motion.div>
            <motion.div
                initial={{ x: -400, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1.5 }}
                style={{ width: '12v'}} 
            >      
                <a href="https://www.instagram.com/planetpetmarilia/" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'5px',}}>
                    <img 
                        src="images/logo-planet.png"  
                        alt="Planet Pet"
                        style={{height:'6vh',  marginTop:'10px', marginBottom:'10px'}}
                    />
                </a>  
                <HorizontalLine />
            </motion.div>
            <motion.div
                initial={{ x: 500, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1.5 }}
                style={{ width: '12v'}} 
            >   
                <a href="https://www.instagram.com/planetpetmarilia/" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'5px',}}>
                    <img 
                        src="images/zoio.png"  
                        alt="Planet Pet"
                        style={{height:'13vh',  marginTop:'10px', marginBottom:'10px'}}
                    />
                </a>  
                <HorizontalLine />
            </motion.div>
            <Button onClick={() => navigate('/menu')} style={{marginTop:'4vh'}}>
                <HiArrowCircleDown size={32} />
                <p>Ver cárdapio completo</p>
            </Button>
        </Container>
    )
}