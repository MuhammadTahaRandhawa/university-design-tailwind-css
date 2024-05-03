const foregroundImage = 'src/assets/images/welcome-foreground.png';
import './Welcome.css';
export default function Welcome() {
    return (
        <div id = 'welcome-bg'>
            <div id='welcome-img-bg'>
                <img id='welcome-img-fg' src={foregroundImage} alt="welcome foreground image" />
            </div>
            <div  id='welcome-text'>
                <h2>
                    WELCOME TO
                </h2>
                <h1>University Website Design</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has tkn the
                    industry's standard dummy is text ever since the 1 when an unknown printer took a galley of tYFk
                    and scrambled it to make a type specimen bc»k. It has survived not only five centuries, but also the leap
                    into el«tronic typesetting a remaining essentially unchanged. It was popularised in the 190s with the
                    industry's standard dummy is text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen It has survived not only five centuries, but also the leap
                    into electronic typesetting a remaining essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and a more recently with desktop publishing
                    software like Aldus including versions Of Lorem Ipsum-</p>
            </div>
        </div>

    );
}