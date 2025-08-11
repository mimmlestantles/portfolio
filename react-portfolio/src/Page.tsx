import {OtherHeading} from './appComponents/Heading';
import {useLocation} from 'react-router-dom';
import Types from './pageComponents/Types';
import Navigation from './pageComponents/Navigation';
import './Page.css'

export function Page(){
    const location = useLocation();
    const title: string[] = [
        "Education",
        "Work Experiences",
        "Projects",
        "Skills",
        "Extra Curriculars"
    ];
    const eduTypes: string[] = [
        'College'
    ];
    const workTypes: string[]= [
        'Math Tutoring',
        'Undergraduate Research Assistant',
        'Research at CEDAR'
    ];
    const projectTypes: string[]=[
        'moVRs',
        'Interactive Dashboard Website',
        'Illustrations'
    ];

    const skillTypes: string[]=[
        'Programming',
        'Frameworks/Libraries',
        'Languages',
        'Soft Skills',
        'Currently Learning'
    ];

    const activitiesTypes: string []=[
        'Study Abroad',
        'UW Symphony Orchestra',
        'Indonesian Student Association (INASA)',
        'Other Club Activities'
    ];
    
    type myMode={
        name: string;
        types: string[];
    }

    function mode(domainName: string):myMode{
        switch(domainName){
            case '/education':
                return {name:title[0],types:eduTypes};
            case '/workexperience':
                return {name:title[1],types:workTypes};
            case '/projects':
                return {name:title[2], types: projectTypes};
            case '/skills':
                return {name:title[3], types: skillTypes};
            case '/extracurriculars':
                return {name:title[4], types: activitiesTypes};
            default:
                return {name:"", types:[]};
        }
    }

    return (<div>
        <OtherHeading />
        <Navigation />
        <h1>
            {mode(location.pathname).name}
        </h1>
        <div className = "navigation">
            <Types types={mode(location.pathname).types} />
        </div>
    </div>);
}
