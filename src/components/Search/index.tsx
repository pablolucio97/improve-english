import { Container } from './styles'
import { FiSearch } from 'react-icons/fi'
import { Dispatch, SetStateAction } from 'react'

interface SearchProps {
    term: string;
    searchPost: (term: string) => void;
    setTerm: Dispatch<SetStateAction<any>>

}

export default function Search({ searchPost, term, setTerm }: SearchProps) {
    return (
        <Container>
            <div>
                <input type="text"
                    placeholder='Search a post'
                    value={term}
                    onChange={setTerm}
                />
                <button onClick={() => searchPost(term)}><FiSearch color='#fff' />
                </button>
            </div>
        </Container>
    )
}