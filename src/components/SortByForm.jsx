import { useEffect, useState } from "react"
import { getCategories } from "../axios"

export default function SortByForm ({ setOrderBy, setCategory }) {
    const [ filterCategories, setFilterCategories ] = useState([])

    useEffect(() => {
        getCategories()
        .then(({ data }) => {
            setFilterCategories(data.categories)
        })
    }, [])

    return (
        <form className="sort-by-form">
            <label htmlFor="category-filter">Filter by Category</label>
            <select name="category" id="category-filter">
                <option value="">all</option> 
                {filterCategories.map((category, i) => {
                    const categoryName = category.slug.replaceAll("-", " ")
                    return <option key={i} value={categoryName}>{categoryName}</option>
                })}   
            </select> <br />
            <label htmlFor="sort-options">Order By</label>
            <select name="sort" id="sort-options">
                <option value="created_at">date</option>
                <option value="title">title</option>
                <option value="owner">review author</option>
                <option value="votes">number of votes</option>
            </select>
            <button>Descending</button>
        </form>
    )
}