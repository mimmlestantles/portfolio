export default function Information({info}: {info: String[]}){
    return <div>
        {info.map((content, index)=>(
            <li key = {index}>
                {content}
            </li>
        ))}
    </div>
}