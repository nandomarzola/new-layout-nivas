import {
    Container,
    Image,
    SubTitle,
    AreaCard,
    Content,
    SocialContent,
    SocialInsta,
    SocialWpp,
    HorizontalLine
} from './styles'

import { FaInstagram, FaWhatsapp } from "react-icons/fa";


export default function Header(){

    return (
        <Container>
            <AreaCard />
            
            <Image src="images/logo-new.png" alt="Logo Nivas" />
            <SubTitle>As melhores porções de marília</SubTitle>


            <Content>
                <h1>#HORÁRIO DE FUNCIONAMENTO</h1>
                <div style={{background:'red', width:'36vh', textAlign:'center', margin:0}}>
                    <h1>OBS: NÃO ABRIMOS NAS TERÇAS</h1>
                </div>
                <h1 style={{margin:'10px 0 0 0'}}>DE SE SEGUNDA À SEXTA DAS 13:00 AS 00:00</h1>
                <h1 style={{margin:'3px 0 0 0'}}>SÁBADO E DOMINGO DAS 10:00 AS 20:00</h1>
            </Content>

            <SocialContent>
                <SocialInsta href="aaa">
                    <FaInstagram size={32} color='#FFF'/>
                    @BARVITORIAMARILIA    
                </SocialInsta>
                <SocialWpp href="aaa">
                    <FaWhatsapp size={32} color='#FFF'/>
                    (14) 99624-2006
                </SocialWpp>
            </SocialContent>
            <HorizontalLine />
        </Container>
    )
}
