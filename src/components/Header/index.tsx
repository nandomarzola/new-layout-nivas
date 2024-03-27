import { useNavigate } from 'react-router';

import {
    Container,
    Title,
    HorizontalLine,
    Button
} from './styles'

import { HiArrowCircleDown } from "react-icons/hi";

export default function Header(){

    const navigate = useNavigate();

    return (
        <Container>
            <Title>PARCEIROS</Title>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'5px', marginTop:'15px'}}>
                <img 
                    src="images/logo-transparent.png"  
                    alt="Omega"
                    style={{height:'8vh'}}
                />
                  <img 
                    src="https://3ff5263b8f.cbaul-cdnwnd.com/ca391f83a3a3faaf706896ebafa56111/200000078-ac999ac99c/logo%20omega%20PNG.png?ph=3ff5263b8f"  
                    alt="Omega"
                    style={{height:'8vh'}}
                />
            </div>
            <HorizontalLine />
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'5px', marginTop:'15px'}}>
                <img 
                    src="images/logo-transparent.png"  
                    alt="Omega"
                    style={{height:'8vh'}}
                />
                  <img 
                    src="https://3ff5263b8f.cbaul-cdnwnd.com/ca391f83a3a3faaf706896ebafa56111/200000078-ac999ac99c/logo%20omega%20PNG.png?ph=3ff5263b8f"  
                    alt="Omega"
                    style={{height:'8vh'}}
                />
            </div>
            <HorizontalLine />
            <Button onClick={() => navigate('/menu')} style={{marginTop:'5vh'}}>
                <HiArrowCircleDown size={32} />
                <p>Ver cárdapio completo</p>
            </Button>
        </Container>
    )
}