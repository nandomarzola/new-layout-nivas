import {
    Container,
    ImgLogo,
} from './styles'

import { LogoProps } from './logo'

export default function Logo({ urlImg }: LogoProps){
    return (
        <Container>
            <ImgLogo src={urlImg} alt='Logo' />
        </Container>
    )
}