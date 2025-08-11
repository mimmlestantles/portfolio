import {useNavigate} from "react-router-dom";
import Contents from './Contents';
export default function QualCards(){
    const traits = [
        <Contents title = 'Education'/>,
        <Contents title = 'Work Experience'/>,
        <Contents title = 'Projects'/>,
        <Contents title = 'Skills'/>,
        <Contents title = 'Extra Curriculars'/>
    ];
    const navigate = useNavigate();
    function pick(index:number){
        switch(index){
            case 0:
                navigate("/education");
                break;
            case 1:
                navigate("/workexperience");
                break;
            default:
                console.log("nothing yet :)");
        }
    }

    return (
        <div>
            {traits.map((val,index)=>(
                <li key={index} onClick={()=>pick(index)}>
                    {val}
                </li>
            ))}
        </div>
    );
}
