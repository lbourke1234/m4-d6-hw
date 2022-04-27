import {useState} from 'react'
import { Card } from 'react-bootstrap'

const SingleBook = ({book, selectedBook, changeSelectedBook}) => {

    
    const [selected, setSelected] = useState(false)

    const changeState = () => {
        setSelected(!selected)
    }

    const clickFunction = () => {
        changeSelectedBook(book.asin)
        changeState()
    }

        return (
            <>
                <Card
                    onClick={() => clickFunction()}
                    style={{ border: selectedBook === book.asin ? '3px solid red' : 'none' }}
                >
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
                    </Card.Body>
                </Card>
            </>
        )

}

export default SingleBook