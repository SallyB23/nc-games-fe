import { useState } from "react"
import ReviewList from "../components/ReviewList"
import SortByForm from "../components/SortByForm"
import "./ReviewListPage.css"

export default function ReviewsListPage () {
    const [ category, setCategory] = useState("")

    return (
        <main>
            <SortByForm category={category} setCategory={setCategory}/>
            <ReviewList setCategory={setCategory}/>
        </main>
    )

}