import {useState} from 'react';
import Information from './Information';
import '../Page.css';

type childType = {
    title: string;
    types: string[];
}
export default function Types({title,types}:childType){
    function displayContent(index:number){

    }
    return <div className = "navigation">
        <div>
            <h6>Types</h6>
            <ul className = "list-group">
                {types.map((vals,index)=>(
                    <li className = "list-group-item"
                    key = {index}
                    onClick = {()=>displayContent(index)}>
                        {vals}
                    </li>
                ))}
            </ul>
        </div>
        
    </div>
}