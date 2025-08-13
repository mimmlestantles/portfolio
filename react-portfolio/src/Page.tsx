import {OtherHeading} from './appComponents/Heading';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import Navigation from './pageComponents/Navigation';
import data from './data.json';
import Information from './pageComponents/Information';
import './Page.css'
import type {Pages,Info} from './types';

/**
 * This function handles the page where the user can navigate between my resume
 * @returns 
 */

export function Page(){
    const location = useLocation();
    const page: Pages[]= data.pages;
    function mode(domainName: string):number{
        switch(domainName){
            case "/education":
                return 0;
            case "/workexperience":
                return 1;
            case "/projects":
                return 2;
            case "/skills":
                return 3;
            case "/extracurriculars":
                return 4;
            default:
                return 5;
        }
    }

    const [selectedPage, selectPage] = useState(mode(location.pathname));
    const [selectedCategory, selectCategory] = useState(0);
    const setPage = (i: number) =>{
        selectPage(i);
        selectCategory(0);
    };

    if(!page[selectedPage]){
        return (<div>
            <OtherHeading/>
            <Navigation clicked={setPage}/>
            <h1>Page not found</h1>
        </div>);
    }

    
    const informationList: Info[] = page[selectedPage].categories[selectedCategory].information;
    
    return(<div>
        <OtherHeading />
        <Navigation clicked={setPage}/>
        <h1>{page[selectedPage].title}</h1>
        <div className = 'navigation'>
            <div>
                <h3>Categories</h3>
                {page[selectedPage].categories.map((val,index)=>(
                <ul key={val.id}>
                    <button onClick = {()=>selectCategory(index)}>{val.title}</button>
                </ul>
            ))}
            </div>
            <Information key={selectedPage-selectedCategory}all = {informationList}/>
        </div>
    </div>)
}