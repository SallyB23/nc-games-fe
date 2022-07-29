import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { postNewUser } from "../axios"
import { UserContext } from "../contexts/User"
import { isPictureUrl } from "../utils/utils"

export default function SignUpForm () {
    const { setUsername } = useContext(UserContext)
    const [ inputUsername, setInputUsername ] = useState("")
    const [ inputAvatarUrl, setInputAvatarUrl ] = useState("")
    const [ inputName, setInputName ] = useState("")
    const [ isErr, setIsErr ] = useState(false)
    const [ errMsg, setErrMsg ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsErr(false)
        setErrMsg("")

        if (isPictureUrl (inputAvatarUrl)) {
            postNewUser(inputName, inputUsername, inputAvatarUrl).then(({ data }) => {
            setUsername(data.user.username)
        })
        .catch(err => {
            setIsErr(true)
        })
        } else {
            setIsErr(true)
            setErrMsg("please enter a link to a picture")
        }
    }

    return <section className="sign-in-forms">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input onChange={(e) => setInputName(e.target.value)} id="name" name="name" value={inputName} type="text" /><br />
            <label htmlFor="username">Username</label>
            <input onChange={(e) => setInputUsername(e.target.value)}id="username" name="username" value={inputUsername} type="text" /><br />
            <label htmlFor="userAvatar">Link to profile avatar</label>
            <input onChange={(e) => setInputAvatarUrl(e.target.value)}id="userAvatar" name="userAvatar" value={inputAvatarUrl} type="text" /><br />
            <button>Sign up!</button>
        </form>
        <p>Already have an account? <Link to="/sign-in">Sign in here</Link></p>
    </section>
}