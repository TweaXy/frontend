import "./Widget.css";
import WidgetTrending from "./WidgetTrending";
import SearchIcon from "@mui/icons-material/Search";
import TextareaAutosize from "react-textarea-autosize";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Widget() {

  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate('/search', {state: {search: searchInput}});
    }
  };

  return (
    <div className="widget">
      <div className="empty-container"></div>

      <div className="widget-main">
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
            onChange = {
              (e) => setSearchInput(e.target.value)
            }
            onKeyDown={handleKeyPress}
          />
        </div>
        <WidgetTrending />
      </div>
    </div>
  );
}
