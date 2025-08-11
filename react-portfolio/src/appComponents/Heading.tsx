import {useNavigate} from 'react-router-dom';
import './Heading.css';
export function MainHeading(){
    return <div className = 'heading'>
        <p>Contact Me: Email and LinkedIn</p>
    </div>
}
export function OtherHeading(){
    const navigate = useNavigate();
    return <div className = 'heading'>
        <button onClick={ ()=> navigate("/")}>Back</button>
        <p>Contact Me: Email and LinkedIn</p>
    </div>
}
