//React Imports
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

//Css Imports
import './styles.css'

//Cursor Image Imports
import candleOne from '../../assets/candle1.png';
import candleTwo from '../../assets/candle2.png';
import candleThree from '../../assets/candle3.png';
import candleFour from '../../assets/candle4.png';

//GSAP Imports 
import { gsap } from 'gsap';

const Home = () => {
  const items = document.querySelectorAll('.bannerItem')

  items.forEach((el) => {
    const image = el.querySelector('.liImg')
    
    el.addEventListener('mouseenter', (e) => {
      gsap.to(image, { autoAlpha: 1 })
    })
    
     el.addEventListener('mouseleave', (e) => {
      gsap.to(image, { autoAlpha: 0 })
    })
    
    el.addEventListener('mousemove', (e) => {
      gsap.set(image, { x: e.offsetX - 200 })
    })
  })

  //Newsletter Alert
   function newsletterAlert(){
    alert('Thanks for signing up with candyl 💕');
   }
  return (
    <div className='homePage'>
        {/* First Section  */}
      <div className='topSection'>
 <ul className='homeBanner'>
<li className='bannerItem'> 
<img className='liImg' src={candleOne}/> sweet 
<span className='normalHeading'>organic</span>
</li>
<li className='bannerItem'>
   <img className='liImg' src={candleTwo}/>pure 
   <span className='normalHeading'>natural</span>
   </li>
<li className='bannerItem'>
  <img className='liImg' src={candleThree}/>sweet
  <span className='normalHeading'>organic</span> 
  </li>
<li className='bannerItem'> 
<img className='liImg' src={candleFour}/>pure
<span className='normalHeading'>natural</span>
</li>
 </ul>

 <div className='callToAction'>
 <h1>candles made from <span className='candy'>candy.</span></h1>
 <p> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M210.7 147.6c7.5-7.5 19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81.1-81.9-81.1c-7.6-7.4-7.6-19.6 0-27.2z"></path><path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm32 0c0-47 18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256z"></path></svg> 
 <Link to={'/shop'}> Shop our latest flavors </Link>
</p>
</div>
 </div>
    {/* Newsletter Section */}
<div className='newsletterSection' id='contact'>
  <h2> Let's Keep in Touch</h2>
  <p>15% off your first order when you sign up!</p>
  <form className='newsletter'>
  <input className='homeInput' type="email" id="email"
     placeholder='Enter your email' required/>
<input className='homeSubmit' type="submit" value="Subscribe" onClick={newsletterAlert} />
  </form>
</div>
    </div>

  )
}

export default Home;