import './Chat.css'
import Message from './Message'
export default function Chat({}){

    const ref = useRef(null)

    const messages = [];
    useEffect(() => {
        ref.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'end' 
        })
      }, [messages])

// const messages=[{"hello", 1}]
    return (
        <div className="chat-wrapper">
            <Message text={'hello'} user={1}/>
            <Message text={'hello'} user={1}/>
            <Message text={'hello'} user={1}/>
            <Message text={'hello'} user={1}/>
            <Message text={'hello'} user={1}/>
            <Message text={'hello'} user={1}/>
            <Message text={'hello'} user={1}/>
            <Message text={'hello'} user={1}/>
            <Message text={'hello'} user={1}/>
        </div>
    )
}