import './MediaChecker.css';
export default function MediaChecker({ media }) {
    return (
        <div className="media-checker">
            {/* handle the multiple image*/}
            <img src={media} className="media-img" />
        </div>
    );
}
