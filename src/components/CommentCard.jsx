import { useContext, useEffect, useState } from "react"
import { deleteComment, getUserDetails } from "../axios"
import { UserContext } from "../contexts/User"
import { formatDate } from "../utils/utils"
import BounceLoader from "./BounceLoader"

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
        deleteComment(comment.comment_id).then(({ data }) => {
            setCommentList(currList => {
                const newList = currList.filter(item => {
                    return item.comment_id !== comment.comment_id
                })
                return newList
            })
            setIsUpdating(false)
        })
        .catch(err => {
            setIsErr(true)
            setIsUpdating(false)
            setErrMsg(<p>Comment could no be deleted. Please try again later.</p>)
        })
    }

    return <div className="comment-card">
            {isUpdating ? <BounceLoader /> :
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