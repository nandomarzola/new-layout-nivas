import { useNavigate } from 'react-router';

import {
    Container,
    Title,
    Text,
    TextSmall,
    Price,
    HorizontalLine,
    Button
} from './styles'

import { HiArrowCircleDown } from "react-icons/hi";

export default function Header(){

    const navigate = useNavigate();

    return (
        <Container>
            <Title>NOVIDADES BAR VITÓRIA</Title>
            <Text>CHEVICHE</Text>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>FILE DE TILÁPIA, MOLHO BRANCO, CEBOLA ROXA E LIMÃO (MÉDIA)</TextSmall>
                <Price>- R$ 45,00</Price>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>FILE DE TILÁPIA, MOLHO BRANCO, CEBOLA ROXA E LIMÃO (INTEIRA)</TextSmall>
                <Price>- R$ 86,00</Price>
            </div>
            <HorizontalLine />
            <Text>SALGADOS</Text>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>COXINHA NO SABORES (FRANGO, CARNE)</TextSmall>
                <Price>- R$ 12,00</Price>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom:'8px'}}>
                <TextSmall>ESFIRRA NO SABORES (FRANGO, CARNE)</TextSmall>
                <Price>- R$ 12,00</Price>
            </div>

            <HorizontalLine />
            <Button onClick={() => navigate('/menu')}>
                <HiArrowCircleDown size={32} />
                <p>Ver cárdapio completo</p>
            </Button>
        </Container>
    )
}