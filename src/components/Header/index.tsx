import { Container } from './styles'
import { FaFlagUsa } from 'react-icons/fa'

export default function Header() {
    return (
        <Container>
            <h1>
                <FaFlagUsa
                    color='#e6473c'
                    style={{ margin: 4 }} />
                Improve English
            </h1>
        </Container>
    )
}

