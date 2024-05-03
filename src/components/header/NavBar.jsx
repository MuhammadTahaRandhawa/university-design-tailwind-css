import './NavBar.css';
const searchIcon  = 'src/assets/images/search-icon.png';
export default function NavBar(){
return(<nav>
    <h1>
       <span>Unlimited </span><br />University web design 
    </h1>
    <ul id = "nav-ul">
        <li className = "nav-li"><a className='nav-a' href="">HOME</a></li>
        <li className = "nav-li"><a className='nav-a' href="">ABOUT US</a></li>
        <li className = "nav-li"><a className='nav-a' href="">SERVICES</a></li>
        <li className = "nav-li"><a className='nav-a' href="">PROJECT</a></li>
        <li className = "nav-li"><a className='nav-a' href="">PAGES</a></li>
        <li className = "nav-li"><a className='nav-a' href="">BLOG</a></li>
        <li className = "nav-li"><a className='nav-a' href="">SHOP</a></li>
        <li className = "nav-li"><a className='nav-a' href="">CONTACT US</a></li>
    </ul>
    <img id= 'nav-img' src={searchIcon} alt="search icon" />
</nav>);
}