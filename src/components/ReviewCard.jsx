export default function ReviewCard ({ review }) {
    const { title, review_img_url} = review
    return <div className="review-card">
        <img src={review_img_url} alt="review img" />
        <div className="review-selection">
            <h3>{title}</h3>
            <button>Read Review</button>   
        </div>
    </div>
}