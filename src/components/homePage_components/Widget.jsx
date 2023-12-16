import "./Widget.css";
import WidgetTrending from "./WidgetTrending";
import SearchBar from "../SearchBar/SearchBar";
export default function Widget({hideSearchBar}) {
  return (
    <div className="widget">
      <div className="empty-container"></div>
      <div className="widget-main">
        {!hideSearchBar && <SearchBar />}
        <WidgetTrending />
      </div>
    </div>
  );
}
