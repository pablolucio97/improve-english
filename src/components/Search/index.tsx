import { Container } from './styles'
import { FiSearch } from 'react-icons/fi'

export default function Search() {
    return (
        <Container>
            <input type="text" placeholder='Search here'/>
            <button><FiSearch color='#fff'/></button>
        </Container>
    )
}