import type {Info} from '../types';
import Details from './Details';
import {useState} from 'react';

/**
 * Displays the episodes
 */
type allInfo={
    all:Info[]
}

export default function Information({all}:allInfo){
    const [clicked, setClicked] = useState(Array(all.length).fill(0));

    function handleClick(i:number){

    }

    return <div>
        {all.map((c, index)=>(
            <ul key = {index}>
                <button><h5>{c.title}</h5></button>
                <Details all={c.slides} />
            </ul>
        ))}
    </div>
}