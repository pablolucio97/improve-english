import { Container } from './styles'
import { FaFlagUsa } from 'react-icons/fa'
import Link from 'next/link'

export default function Header() {
    return (
        <Container>
            <Link href='/'>
                <a>
                    <FaFlagUsa
                        color='#e6473c'
                        style={{ margin: 4 }} />
                    Improve English
                </a></Link>
        </Container>
    )
}

