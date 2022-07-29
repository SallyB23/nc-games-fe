import { Link } from "react-router-dom"

export default function SignUpForm () {
    return <section>
        <p><em>Non-functional - need to write post user in backend</em></p>
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" />
            <button>Sign up!</button>
        </form>
        <p>Already have an account? <Link to="/sign-in">Sign in here</Link></p>
    </section>
}