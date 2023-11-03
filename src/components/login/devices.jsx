import React from 'react'
import img1 from '../loginimgs/TV.png'
import img2 from '../loginimgs/Laptop.png'
import img3 from '../loginimgs/mobile.png'
import img4 from '../loginimgs/XBOX.png'

const Devices = () => {

    const GridAPI = [
        {imgSrc : img1, title: "TV"},
        {imgSrc : img2, title: "Laptop"},
        {imgSrc : img3, title: "Mobile"},
        {imgSrc : img4, title: "XBOX"}
    ];

  return (
    <div>
         <div className='section6'>
            <div className='container6'>
                <div className='title6'>
                    <h1 className='disney-titles'>Available Stream on Your Favorite Devices</h1>
                </div>
                <div className='gridimg2'>

                    {
                        GridAPI.map((img,index) => (
                            <div className="imgindex">
                                <img src={img.imgSrc} key={index} alt="grid/img" />
                                <h2>{img.title}</h2>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    </div>
  )
}

export default Devices