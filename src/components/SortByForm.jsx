import { useEffect, useState } from "react";
import { getCategories } from "../axios";
import { useNavigate } from "react-router-dom";

export default function SortByForm({
  setOrderBy,
  setCategory,
  category,
  setOrderDirection,
}) {
  const [filterCategories, setFilterCategories] = useState([]);
  const [ selectedOrder , setSelectedOrder ] = useState("")
  const [ selectedDirection, setSelectedDirection ] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then(({ data }) => {
      setFilterCategories(data.categories);
    });
  }, []);

  const handleFilterClick = () => {
    if (category !== "all") navigate(category);
    else navigate("/reviews")
  };

  const handleOrderClick = () => {
    setOrderBy(selectedOrder)
    setOrderDirection(selectedDirection)
  };

  return (
    <form className="sort-by-form">
      <label htmlFor="category-filter">Filter by Category</label>
      <select
        onChange={(e) => setCategory(e.target.value)}
        name="category"
        id="category-filter"
      >
        <option defaultValue="">
          all
        </option>
        {filterCategories.map((category, i) => {
          const categoryName = category.slug.replaceAll("-", " ");
          return (
            <option key={i} value={categoryName}>
              {categoryName}
            </option>
          );
        })}
      </select>
      <button type="button" onClick={handleFilterClick}>Filter</button>
      <br />
      <label htmlFor="sort-options">Order By</label>
      <select onChange={(e) => setSelectedOrder(e.target.value)} name="sort" id="sort-options">
        <option value="created_at">date</option>
        <option value="title">title</option>
        <option value="comment_count">comment count</option>
        <option value="votes">number of votes</option>
      </select>
      <div className="order-direction-buttons">
        <div className="radio-button">
          <input
            type="radio"
            id="asc"
            name="order-direction"
            value="asc"
            checked={selectedDirection === "asc"}
            onChange={() => {
              setSelectedDirection("asc");
            }}
          />
          <label htmlFor="asc">ascending</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            id="desc"
            name="order-direction"
            value="desc"
            checked={selectedDirection === "desc"}
            onChange={() => {
              setSelectedDirection("desc");
            }}
          />
          <label htmlFor="desc">descending</label>
        </div>
      </div>
      <button type="button" onClick={handleOrderClick}>Order Reviews</button>
    </form>
  );
}
