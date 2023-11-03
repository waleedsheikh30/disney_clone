import React  from 'react'
import ImgSlider from './imgSlider'
import Viewers from './viewers'
import Movies from './movies'
import Newtodisney from './newtodisney'
import Hollywood from './hollywood'
import Trending from './trending'
import Disneykid from './disneykid'
import Popular from './popular'


function Home() {
  return (
    
    <div className='main'>
      
        <ImgSlider/>
        <Viewers/>
        <Movies/>
        <Newtodisney/>
        <Trending/>
        <Hollywood/>
        <Disneykid/>
        <Popular/>

     </div> 
    
    )
}

export default Home