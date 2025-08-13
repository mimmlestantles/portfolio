import type {Slide} from '../types';

/**
 * Displays the slides
 */
type allSlides={
    all: Slide[]
}
export default function Details({all}: allSlides){
    return<div>
        {all.map((val)=>(
            <ul key={val.id}>
                <h6>{val.title}</h6>
                {val.content.map((con,id)=>(
                    <li key={id}>
                        {con}
                    </li>
                ))}
            </ul>
        ))}
    </div>
}