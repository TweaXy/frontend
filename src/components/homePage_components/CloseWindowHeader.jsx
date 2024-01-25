import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './CloseWindowHeader.css'
export default function CloseWindowHeader({closeHandler, height}){
    
    return(
        <div className="close-window-header" style={
            {
                height:height
            }
        }>
            {/* render the icon  */}
            <div className="close-icon-container" onClick={closeHandler } >
                              <CloseOutlinedIcon/>
                            </div>
        </div>

    )
}