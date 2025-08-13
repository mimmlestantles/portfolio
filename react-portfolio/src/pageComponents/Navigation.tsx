import {useNavigate} from 'react-router-dom';
import './Navigation.css';

type tabClicked ={
    clicked : (i:number)=>void;
}
export default function Navigation({clicked}: tabClicked){
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
            case 2:
                navigate("/projects");
                break;
            case 3:
                navigate("/skills");
                break;
            case 4:
                navigate("/extracurriculars");
                break;
            default:
        }
    }
    function click(i:number){
        clicked(i);
        pick(i);
    }
    return <div className = "toolbar">
        {tabs.map((value: string,index)=>(
                <button onClick = {()=>click(index)} key = {index}>
                    {value}
                </button>
            ))}
    </div>
}