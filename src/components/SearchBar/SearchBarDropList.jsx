import './SearchBarDropList.css';
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({defaultText}) {

    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState(defaultText);
    const [isInputChanging, setIsInputChanging] = useState(false);
    // console.log("inside the search bar: ", defaultText);
    // console.log("inside the search bar2: ", searchInput);
    console.log("IS INPUT CHANGING? ",   isInputChanging);

    const test = () => {
        console.log("YAAAAY");
    };
  
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
            value={searchInput}
            onFocus={test}
            onBlur={setIsInputChanging(false)}
            onChange = {
              (e) => setSearchInput(e.target.value)
            }
            onKeyDown={handleKeyPress}
          />
        </div>
    );
}