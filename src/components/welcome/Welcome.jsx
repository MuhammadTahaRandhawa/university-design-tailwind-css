const foregroundImage = 'src/assets/images/welcome-foreground.png';

export default function Welcome() {
    return (
        <div className="flex my-10">
            <div className="w-[100%] bg-[url('src/assets/images/welcome-bg.png')] bg-no-repeat">
                <img className="ml-28 mr-5" src={foregroundImage} alt="welcome foreground image" />
            </div>
            <div  className="w-[100%] mr-28 ml-5 my-12">
                <h2 className="text-[#ffaf42] text-xl">
                    WELCOME TO
                </h2>
                <h1 className="text-2xl">University Website Design</h1>
                <p className="text-base text-justify my-[50px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has tkn the
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