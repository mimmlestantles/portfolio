export default function Types({types}: {types: string[]}){
    return <div>
        <h6>Types</h6>
        <ul className = "list-group">
            {types.map((vals,index)=>(
                <li className = "list-group-item"
                key = {index}>
                    {vals}
                </li>
            ))}
        </ul>
    </div>
}