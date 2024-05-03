const contentImage = 'src/assets/images/header-content.png';
import './Content.css';

export default function Content() {
    return (
        <div id='header-content-div'>
            <ul id = 'header-content-ul'>
                <li><h1>University Website Design</h1></li>
                <li><p>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    tandard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.</p></li>
                    <li><button id='content-button'>Apply Now</button></li>
            </ul>
            <img src={contentImage} alt="content Image"  id='content-img'/>
        </div>
    );
}