import './EditProfileWindowHeader.css';

const EditProfileWindowHeader = ({ onClose, saveHandler }) => (
    <div className="EditProfile-window-header">
        <button
            className="EditProfile-window-header-close-button"
            onClick={onClose}
        >
            &times;
        </button>
        <span className="edit-text">Edit profile</span>
        <button className="save-button" onClick={saveHandler}>Save</button>


    </div>
);

export default EditProfileWindowHeader;
