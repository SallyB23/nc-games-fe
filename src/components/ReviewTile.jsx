import CommentsTile from "./CommentsTile"

export default function ReviewTile ({ reviewData }) {
    const { title, review_body, review_img_url, votes, owner, created_at, comment_count, review_id} = reviewData

    const dateTime = created_at.split("T")
    const date = dateTime[0].split("-").reverse().join("/")
    const timeArr = dateTime[1].split(":")
    const time = timeArr.splice(0, 2).join(":")


    return <section className="review-tile">
        <h2>{title}</h2>
        <p className="author-details">posted by {owner} on {date} at {time}</p>
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
        <section>
            <CommentsTile review_id={review_id}/>
        </section>
    </section>
}