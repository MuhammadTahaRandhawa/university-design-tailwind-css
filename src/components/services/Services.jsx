import servicesData from "./data";
import Service from "./Service";


export default function Services(){
    return(<div className="bg-[url('src/assets/images/services-bg.png')] justify-center">
    <div className="flex mx-28">{servicesData.map((service) => <Service {...service}/>)}</div>
    
    </div>);
}