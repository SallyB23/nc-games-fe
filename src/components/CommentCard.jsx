import { useContext, useEffect, useState } from "react"
import { deleteComment, getUserDetails } from "../axios"
import { UserContext } from "../contexts/User"
import { formatDate } from "../utils/utils"

export default function CommentCard ({ setErrMsg, setIsErr, comment, setCommentList }) {
    const { author, created_at, body } = comment
    const { username } = useContext(UserContext)
    const [ authorDetails, setAuthorDetails ] = useState("")
    const [ isUpdating, setIsUpdating ] = useState(false)
    
    const postedDate = formatDate(created_at)

    useEffect(() => {
        getUserDetails(author).then((data) => {
            setAuthorDetails(data.data.user)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [])

    const handleDelete = () => {
        setIsUpdating(true)
        setIsErr(false)
        deleteComment(comment.comment_id).then(() => {
            setCommentList(currList => {
                const newList = [...currList]
                const deleteItemIndex = newList.findIndex(item => {
                    return item.comment_id === comment.comment_id
                })
                newList.splice(deleteItemIndex, 1)
                return newList
            })
            setIsUpdating(false)
        })
        .catch(err => {
            setIsErr(true)
            setIsUpdating(false)
            const message = <><p>Could not delete comment. Please try again later.</p><p>Error: {err.response.data.message}</p></>
            setErrMsg(message)
        })
    }

    return <div className="comment-card">
            {isUpdating ? <p>Please wait...</p> :
            <>
            <img className="user-avatar" src={authorDetails.avatar_url} alt="user avatar" />
            <h4>{authorDetails.username}</h4>
            <h5>posted on: {postedDate}</h5><br />
            <p>{body}</p>
            { username === authorDetails.username && 
            <button onClick={handleDelete} type="button" className="delete-button">Delete</button>}
            </>}
        </div>
}