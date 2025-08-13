import type {Info, Slide} from '../types';
import Details from './Details';
import {useState} from 'react';

/**
 * Displays the episodes
 */
type allInfo={
    all:Info[]
}

export default function Information({all}:allInfo){
    const [clicked, setClicked] = useState(Array(all.length).fill(false));
    

    function handleClick(i:number){
        const newClicked = clicked.slice();

        newClicked[i] = !newClicked[i];
        setClicked(newClicked);
    }
    
    function showDetails(slides:Slide[], i: number){
        if(clicked[i]){
            return <div>
            <Details all={slides} />
            </div>
        }
        else{
            return;
        }
        
    }

    return <div>
        {all.map((c, index)=>(
            <ul key = {c.id}>
                <button onClick={()=>handleClick(index)}><h5>{c.title}</h5></button>
                {showDetails(c.slides,index)}
            </ul>
        ))}
    </div>
}