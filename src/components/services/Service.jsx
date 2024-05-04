
export default function Service({image , title , description}){
    return(<ul className="mx-6 my-20 text-center">
        <li><img className="content-center inline-block" src={image} alt={title} /></li>
        <li><h2>{title}</h2></li>
        <li><p>{description}</p></li>
    </ul>);
}