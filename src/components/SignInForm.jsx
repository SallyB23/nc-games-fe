import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { getUserDetails } from "../axios"
import { UserContext } from "../contexts/User"

export default function SignInForm () {
    const { setUsername } = useContext(UserContext)
    const [ inputUsername, setInputUsername ] = useState("")
    const [ isErr, setIsErr ] = useState(false)
    const [ errMsg, setErrMsg ] = useState("")

    const handleSubmit = (e) => {
        setIsErr(false)
        e.preventDefault()
        getUserDetails(inputUsername).then(({ data }) => {
            setUsername(data.user.username)
        })
        .catch(err => {
            setIsErr(true)
            setErrMsg(err.response.data.message)
        })
    }

    return <section className="sign-in-forms">
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input onChange={(e) => {setInputUsername(e.target.value)}} type="text" /><br/>
        <button type="submit">Sign in!</button>
    </form>
    <p>Need an account? <Link to="/sign-up">Sign up here!</Link></p>
    {isErr && <p className="error-msg">{errMsg}</p>}
</section>
}