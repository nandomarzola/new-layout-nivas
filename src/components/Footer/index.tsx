import { Container, Text } from "./styles"
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <Container>
            <a href="https://www.instagram.com/nivaldomarques350/" target="_blank">
                <FaInstagram size={28} style={{marginBottom: '3px'}} color="#FFF"/>
            </a>
            <Text>@2024 Todos os direitos reservados, Bar Vitória</Text>
            <Text>Desenvolvido por <a href="https://www.instagram.com/nandomarzoladev/" target="_blank">Nando Marzola</a></Text>
        </Container>
    )
}