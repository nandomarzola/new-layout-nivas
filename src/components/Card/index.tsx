import { CardProps } from './card';
import { Container, Text } from './styles';

export const Card = ({ href, children, text }: CardProps) => {
    return (
        <Container href={href}>
            {children}
            <Text>{text}</Text>
        </Container>
    )
}