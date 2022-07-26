import { useEffect, useState } from "react"
import { getCategories } from "../axios"
import { useNavigate } from "react-router-dom"

export default function SortByForm ({ setOrderBy, setCategory, category }) {
    const [ filterCategories, setFilterCategories ] = useState([])
    const [ selectedCategory, setSelectedCategory ] = useState()
    console.log(selectedCategory)
    // console.log(category, "<<category")
    const navigate = useNavigate()

    useEffect(() => {
        getCategories()
        .then(({ data }) => {
            setFilterCategories(data.categories)
        })
    }, [])

    const handleFilterClick = (e) => {
        e.preventDefault()
        navigate(selectedCategory)
    }

    return (
        <form className="sort-by-form">
            <label htmlFor="category-filter">Filter by Category</label>
            <select onClick={e => setSelectedCategory(e.target.value)} name="category" id="category-filter">
                <option value="" selected>all</option> 
                {filterCategories.map((category, i) => {
                    const categoryName = category.slug.replaceAll("-", " ")
                    return <option key={i} value={categoryName}>{categoryName}</option>
                })}   
            </select> 
            <button onClick={handleFilterClick}>Filter</button><br />
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