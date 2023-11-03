import React from 'react'
import img1 from '../loginimgs/disneyposter.jpg'
import img2 from '../loginimgs/Disney_MLP_GridItem_TS4_AUNZ.jpg'
import img3 from '../loginimgs/LUCA-2.png'
import img4 from '../loginimgs/Mickey_Mouse_Clubhouse_Grid_Item_052820.jpg'
import img5 from '../loginimgs/Poster_InfinityWar_EN.jpg'
import img6 from '../loginimgs/SW_Clone_Wars.png'
import img7 from '../loginimgs/Soul_EN_(1).png'
import img8 from '../loginimgs/froky.jpg'
import img9 from '../loginimgs/moana-poster-4-2.png'


const Gridtheme = () => {

    const API_IMG = [
        {imgSrc : img1},{imgSrc : img2},{imgSrc : img3},
        {imgSrc : img4},{imgSrc : img5},{imgSrc : img6},
        {imgSrc : img7},{imgSrc : img8},{imgSrc : img9}, 
    ];

  return (
    <div>
        <div className='section5'>
            <div className='container5'>
                <div className='title5'>
                    <h1 className='disney-titles'>Stream Exclusive Disney+ Orignals</h1>
                    <p>New Stories from our incrideble family of studios</p>
                </div>
                <div className='gridimg'>

                    {
                        API_IMG && API_IMG.map((value,index) => (

                            <img src={value.imgSrc} key={index} alt="grid/img" />
                        ))
                    }

                </div>
                <center><button type='button' className='btn-theme-disney' style={{marginTop:'7vh'}}>Get this disney bundle</button></center>

            </div>
        </div>
    </div>
  )
}

export default Gridtheme