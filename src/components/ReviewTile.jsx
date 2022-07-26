export default function ReviewTile ({ reviewData }) {
    const { title, review_body, review_img_url, votes, owner, created_at, comment_count} = reviewData
    return <section className="review-tile">
        <h2>{title}</h2>
        <p className="author-details">posted by {owner} on {created_at}</p>
        <picture>
            <img src={review_img_url} alt="review img" />
        </picture>
        <section className="review-body">
            <p className="review-text">{review_body}</p>
            <div className="counts">
                <p>votes: {votes}</p> 
                <p>comments: {comment_count}</p>
            </div>
        </section>
    </section>
}