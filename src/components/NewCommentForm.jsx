import { useContext, useState } from "react"
import { postNewComment } from "../axios"
import { UserContext } from "../contexts/User"

export default function NewCommentForm ({ review_id }) {
    const { username } = useContext(UserContext)
    const [ newComment, setNewComment ] = useState("")

    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username)
        postNewComment(review_id, username, newComment)
        .catch(err => {
            console.log(err.response)
        })
    }

    return <section className="new-comment">
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-comment-body">Leave a comment:</label><br />
            <textarea onChange={(e) => {setNewComment(e.target.value)}} name="new-comment-body" id="new-comment-body" cols="60" rows="10"></textarea>
            <button type='submit'>Submit</button>
        </form>
    </section>
}