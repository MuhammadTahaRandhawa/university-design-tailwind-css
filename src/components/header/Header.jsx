import NavBar from "./NavBar";
import Content from "./Content";

export default function Header(){
    return(<header className="bg-[url('src/assets/images/header-bg.png')] bg-no-repeat">
        <NavBar/>
        <Content/>
    </header>);
}