import {useNavigate} from 'react-router-dom';
import './Navigation.css';
export default function Navigation(){
    const tabs:string[] = ["Education", "Work Experiences", "Projects", "Skills", "Extra Curriculars"];
    const navigate = useNavigate();

    function pick(i: number){
        switch (i){
            case 0:
                navigate("/education");
                break;
            case 1:
                navigate("/workexperience");
                break;
            default:
        }
    }
    return <div className = "toolbar">
        {tabs.map((value: string,index)=>(
                <button onClick = {()=>pick(index)}>
                    {value}
                </button>
            ))}
    </div>
}