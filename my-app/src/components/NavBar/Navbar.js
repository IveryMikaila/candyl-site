//REACT 
import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

//LOCAL IMAGES
import menuBar from '../../assets/menuBar.png'

//SIDEBAR DATA FILE
import { SidebarData } from './SidebarData';

//CSS FILES
import './styles.css'

//Bootstrap
import Badge from 'react-bootstrap/Badge';


function Navbar({cart,loading}) {
  const[sidebar, setSidebar] = useState(false);
const showSidebar = () => setSidebar(!sidebar);

    return (
      <>
      {/*NAVIGATION BAR CODE BELOW*/}
      <div className="navBar" > 
        {/*HAMBURGER LINK*/} 
<Link to={'#'} className='menu-bars'>
  <img src={menuBar} className='hamburgerMenuImg' alt='menu-bars icon'
  onClick={showSidebar} width='100px' />
  </Link> 
  {/*LOGO FOR HOME PAGE*/}
<Link to={'/'} className='brandLogo'>
candyl</Link>
  {/*SHOPPING CART LINK*/}
  <Link to={'/cart'} className='navCart'>
  <svg stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z" clip-rule="evenodd"></path><path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path>
  </svg>
  <Badge bg="info">{
  loading ? <>
{cart?.total_items && cart?.total_items}
  </>
  :
  <div></div>
  }
  </Badge>
      <span className="visually-hidden">Total cart items</span>
  </Link> 
  </div>
   {/*HAMBURGER SIDEBAR CODE BELOW*/}
<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
  {/* Top of Sidebar */}
<div>
<div onClick={showSidebar} className='navbar-toggle' >
  <Link to={'#'} className='menu-bars' >
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
    </Link>
  </div>
  <h1 className='navBarH1'>candyl</h1> 
<ul className='nav-menu-items' onClick={showSidebar} >
{SidebarData.map((item,index) =>{
  return(
    <li key={index} className={item.cName}>
      <Link to={item.path} >
      <div>{item.title}</div>
      </Link>
    </li>
  )
})}
<li className='lineBreak'>
 <hr />
</li>
<li className='brandName'>
© 2023 <a href='/'> Candyl</a>
</li>
</ul>
</div>
{/* Footnote */}
<h6 className='navFootnote'>@2023 Copyright I don't own the images or fonts used in this project. Website coded by Mikaila Ivery with ♡ using Commerce js api and React js.</h6>

</nav>
  </>
    );
  }
  
  export default Navbar;