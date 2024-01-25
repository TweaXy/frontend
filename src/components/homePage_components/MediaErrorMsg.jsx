import './MediErrorMsg.css'
export default function MediaErrorMsg(){

    return(
        <div className="media-error-msg">
            <div className="error-text-container">
                <span className='error-text'>Please choose either 1 GIF or up to 4 photos.</span>
            </div>
        </div>
    );
}