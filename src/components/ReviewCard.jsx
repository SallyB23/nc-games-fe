import { useNavigate } from "react-router-dom"

export default function ReviewCard ({ review }) {
    const { title, review_img_url, votes, comment_count, review_id } = review
    const navigate = useNavigate()


    const handleClick = () => {
          navigate(`../review/${review_id}`)
    }

    return <div className="review-card">
        <img src={review_img_url} alt="review img" />
        <div className="review-selection">
            <h3>{title}</h3>
            <div className="count">
                <p>votes: {votes}</p>
                <p>comments: {comment_count}</p>
            </div>
            <button onClick={handleClick}>Read Review</button>   
        </div>
    </div>
}