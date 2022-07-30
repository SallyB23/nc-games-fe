import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { getUserDetails } from "../axios"
import { UserContext } from "../contexts/User"
import LoadingSpinner from "./LoadingSpinner"

export default function SignInForm () {
    const { setUsername } = useContext(UserContext)
    const [ inputUsername, setInputUsername ] = useState("")
    const [ isErr, setIsErr ] = useState(false)
    const [ errMsg, setErrMsg ] = useState("")
    const [ isLoading, setIsLoading ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputUsername.length === 0) {
            setIsErr(true)
            setErrMsg("Please enter a valid username")
            isLoading(false)
        } else {
            setIsErr(false)
            setErrMsg("")
            setIsLoading(true)
            getUserDetails(inputUsername).then(({ data }) => {
                setUsername(data.user.username)
                setIsLoading(false)
            })
            .catch(err => {
                setIsErr(true)
                setErrMsg(err.response.data.message)
                setIsLoading(false)
            })
        }
    }

    return <section className="sign-in-forms">
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input onClick={() => {setIsErr(false)}} onChange={(e) => {setInputUsername(e.target.value)}} value={inputUsername} type="text" /><br/>
        {isLoading? <LoadingSpinner /> : <button type="submit">Sign in!</button>}
    </form>
    <p>Need an account? <Link to="/sign-up">Sign up here!</Link></p>
    {isErr && <p className="error-msg">{errMsg}</p>}
</section>
}