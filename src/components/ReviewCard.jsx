import { useNavigate } from "react-router-dom"

export default function ReviewCard ({ review }) {
    const { title, review_img_url, review_id } = review
    const navigate = useNavigate()


    const handleClick = () => {
          navigate(`../review/${review_id}`)
    }

    return <div className="review-card">
        <img src={review_img_url} alt="review img" />
        <div className="review-selection">
            <h3>{title}</h3>
            <button onClick={handleClick}>Read Review</button>   
        </div>
    </div>
}