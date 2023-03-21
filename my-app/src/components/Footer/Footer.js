import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';

const Footer = () => {
  return (
    <div className='footer'>
  <div className='footerLinks'> 
<div className='aboutUs'>
  <Link to={'/'}>Home</Link>
</div>
<div className='contactUs'>
  <Link to={'/#contact'}>Contact</Link>
</div>
</div>  
<p className='copyright'>
@2023 Copyright I don't own the images or logos used in this project. Images used for learning purposes only.  Shop the actual Candier®
<Link to={'https://www.shopryanporter.com/?gclid=CjwKCAiAr4GgBhBFEiwAgwORrf7gIKDSiJuYg4bUb8jXEZbRn9vHT-TRGHyTYW926ILibKQXQxCGNBoCUfMQAvD_BwE'} target='_blank'>
here
</Link>

</p>
<div className='socialLinks'>
<Link to={'#'} >
<svg stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z"></path><path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"></path></svg>
</Link>
<Link to={'#'} >
<svg stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"></path></svg>
</Link>
  </div> 
    </div>
  )
}

export default Footer;