import { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = ({asin}) => {


    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [asin])

    const fetchData = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NTEwNjA1MjgsImV4cCI6MTY1MjI3MDEyOH0.9BrLnG4aN2N5V74FypgjQ0KUrzWzWLSL6fKhbhiISjY'
                }
            })
            console.log(response)
            if (response.ok) {
                let data = await response.json()
                setComments(data)
                setIsLoading(false)
                setIsError(false)
            } else {
                console.log('error')
                setIsLoading(false)
                setIsError(true)
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            setIsError(true)
        }

    }

    
        return (
            <div>
                {isLoading && <Loading />}
                {isError && <Error />}
                <AddComment asin={asin} />
                <CommentList asin={asin} commentsToShow={comments} />
            </div>
        )
    
}

export default CommentArea