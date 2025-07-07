import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Search order #" className="bg-yellow-100 px-4 py-2 rounded-full text-sm w-28 transition-all duration-300 placeholder:text-stone-400 sm:w-64 sm:focus:w-72 focus:ring focus:ring-yellow-500 focus:outline-none focus:ring-opacity-50" value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
  )
}

export default SearchOrder
