import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({ commentsToShow, asin }) => (
    <ListGroup style={{ color: 'black' }}>
        {
            commentsToShow.map(comment => (
                <SingleComment asin={asin} comment={comment} key={comment._id} />
            ))
        }
    </ListGroup>
)

export default CommentList