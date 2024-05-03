import servicesData from "./data";
import Service from "./Service";
import './Services.css';

export default function Services(){
    return(<div id="service-div">
    {servicesData.map((service) => <Service {...service}/>)}
    </div>);
}