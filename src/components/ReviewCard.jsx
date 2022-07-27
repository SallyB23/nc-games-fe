export default function ReviewCard ({ review }) {
    const { title, review_img_url, votes, comment_count } = review
    return <div className="review-card">
        <img src={review_img_url} alt="review img" />
        <div className="review-selection">
            <h3>{title}</h3>
            <div className="count">
                <p>votes: {votes}</p>
                <p>comments: {comment_count}</p>
            </div>
            <button>Read Review</button>   
        </div>
    </div>
}