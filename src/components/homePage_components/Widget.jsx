import "./Widget.css";
import WidgetTrending from "./WidgetTrending";
import SearchIcon from "@mui/icons-material/Search";
import TextareaAutosize from "react-textarea-autosize";
import Button from "@mui/material/Button";
export default function Widget() {
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
          />
        </div>
        <WidgetTrending />
      </div>
    </div>
  );
}
