import { useState } from "react";
import "./SearchBar.css";
export default function SearchBar() {
  const [query, setQuery] = useState("");
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <p>Search Query: {query}</p>
    </div>
  );
}
