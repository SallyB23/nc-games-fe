import { useContext, useState } from "react"
import { postNewComment } from "../axios"
import { UserContext } from "../contexts/User"

export default function NewCommentForm ({ review_id, setCommentList, commentList }) {
    const { username } = useContext(UserContext)
    const [ newComment, setNewComment ] = useState("")
    const [ isErr, setIsErr ] = useState(false)
    const [ errMsg, setErrMsg ] = useState("")
    const [ isUpdating, setIsUpdating ] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsUpdating(true)
        let postComment = newComment
        setNewComment("")
        if (newComment.length !== 0) {
            postNewComment(review_id, username, postComment).then(({data}) => {
                setCommentList((currList) => {
                    const newList = [...currList]
                    newList.push(data.comment)
                    return newList                
                })
                setIsUpdating(false)
            })
            .catch(err => {
                setIsErr(true)
                console.log(err)
                setIsUpdating(false)
            })
        } else {
            setIsErr(true)
            setIsUpdating(false)
            setErrMsg("You have not entered anything!")
        }
    }

    const handleOnChange = (e) => {
        setIsErr(false)
        setNewComment(e.target.value)
    }

    return <section className="new-comment">
        <form onSubmit={handleSubmit}>
            {commentList.length === 0 ? 
            <label htmlFor="new-comment-body">Be the first to comment on this review</label>
            :<label htmlFor="new-comment-body">Leave a comment:</label>}
            <br/><br />
            {username ? 
                <> 
                    <textarea value={newComment}onChange={handleOnChange} name="new-comment-body" id="new-comment-body" cols="60" rows="10"></textarea><br />
                    <button disabled={isUpdating} type='submit'>Submit</button>
                </> :
                <p className="new-comment-logged-out">You need to be logged in to leave a comment</p>
            }   

            {isErr && <p>{errMsg}</p>}
            {isUpdating && <p>Please wait...</p>}
        </form>
    </section>
}