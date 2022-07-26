import { useState } from "react"
import ReviewList from "../components/ReviewList"
import SortByForm from "../components/SortByForm"
import "./ReviewListPage.css"

export default function ReviewsListPage () {
    // const [ orderBy, setOrderBy ] = useState("desc")

    return (
        <main>
            <SortByForm />
            <ReviewList />
        </main>
    )

}