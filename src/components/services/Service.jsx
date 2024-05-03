import './Service.css';
export default function Service({image , title , description}){
    return(<ul id='service-ul'>
        <li><img src={image} alt={title} /></li>
        <li><h2>{title}</h2></li>
        <li><p>{description}</p></li>
    </ul>);
}