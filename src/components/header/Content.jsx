const contentImage = 'src/assets/images/header-content.png';

export default function Content() {
    return (
        <div className="flex mx-28">
            <ul className="text-white mt-20">
                <li><h1 className="text-2xl"><b>University Website Design</b></h1></li>
                <li><p className="text-lg">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    tandard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.</p></li>
                    <li><button className="bg-white text-black w-40 py-2 rounded-2xl my-8">Apply Now</button></li>
            </ul>
            <img className = 'mt-20' src={contentImage} alt="content Image"  id='content-img'/>
        </div>
    );
}