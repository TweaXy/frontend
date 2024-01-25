import './ChatHeader.css'

export default function({username}){

    return(
        <div className="chat-header">
            <div className="name-wrapper">
                <span className="text-span">
                    {username}
                </span>
            </div>
        </div>
    )
}