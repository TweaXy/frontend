import './SearchBar.css';
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({defaultText}) {

    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState('');
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        navigate(`/search/${searchInput}`, {state: {search: searchInput, isSearch: true}});
      }
    };

    return (
        <div className="search-bar-container">
          <div className="search-icon-container">
            <SearchIcon />
          </div>
          <input
            type="search"
            name="widget-search"
            id="widget-search"
            className="search-bar"
            placeholder="Search"
            defaultValue={defaultText}
            onChange = {
              (e) => setSearchInput(e.target.value)
            }
            onKeyDown={handleKeyPress}
          />
        </div>
    );
}