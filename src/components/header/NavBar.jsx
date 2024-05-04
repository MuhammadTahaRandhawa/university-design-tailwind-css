
const searchIcon  = 'src/assets/images/search-icon.png';
export default function NavBar(){
return(<div className="flex mx-28 justify-between content-center">
    <h1 className="mt-4 text-white">
       <span className="text-[#ffaf42]">Unlimited </span ><br />University web design 
    </h1>
    <ul className="flex text-white mx-8 mt-10">
        <li className = "mx-3"><a className='nav-a' href="">HOME</a></li>
        <li className = "mx-3"><a className='nav-a' href="">ABOUT US</a></li>
        <li className = "mx-3"><a className='nav-a' href="">SERVICES</a></li>
        <li className = "mx-3"><a className='nav-a' href="">PROJECT</a></li>
        <li className = "mx-3"><a className='nav-a' href="">PAGES</a></li>
        <li className = "mx-3"><a className='nav-a' href="">BLOG</a></li>
        <li className = "mx-3"><a className='nav-a' href="">SHOP</a></li>
        <li className = "mx-3"><a className='nav-a' href="">CONTACT US</a></li>
    </ul>
    <img className="h-5 mt-10" src={searchIcon} alt="search icon" />
</div>);
}