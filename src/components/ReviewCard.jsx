export default function ReviewCard ({ review }) {
    const { title, owner, category, review_img_url, created_at, votes, review_body, comment_count} = review
    return <div className="review-card">
        <img src={review_img_url} alt="review img" />
        <div className="review-selection">
            <h3>{title}</h3>
            <button>Read Review</button>   
        </div>
    </div>
}