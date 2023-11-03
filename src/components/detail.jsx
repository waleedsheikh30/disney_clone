import React from 'react'

function Detail() {
    return (
        <>
            <div className='background'>
                <div className='bg-container'>
                    <div className='bg-content'>
                        <div className='img-title'>
                            <img src="./images/soul-logo.png" alt="" />
                            <h2>2020 • 1h 49m • Family, Comedy, Fantasy, Animation, Music</h2>
                            <p>Jamie Foxx leads an all-star cast in this hilarious, heart-filled adventure. Pixar’s 'Soul' introduces Joe, who lands the gig of his life at the best jazz club in town. But one misstep lands Joe in a fantastical place: The Great Before. There, he teams up with soul 22 (Tina Fey), and together they find the answers to some of life’s biggest questions.</p>
                        </div>
                        <div className='buttons'>
                            <div className='play-button'>
                                <button><img src="./images/play-icon-black.png" alt="" /><span>PLAY</span></button>

                            </div>
                            <div className='trailer-button'>
                                <button><img src="./images/play-icon-white.png" alt="" /><span>Trailer</span></button>

                            </div>
                            <div className='add-button'>
                                <button><span>+</span></button>
                            </div>
                            <div className='group-button'>
                                <button><img src="./images/group-icon.png" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <div className='detail-container'>
        //     <div className='background'>
        //         <img src="./images/Soul-2.png" alt="" />
        //     </div>
        //     <div className='title'>
        //         <img src="./images/soul-logo.png" alt="" />
        //     </div>
        //     <div className='buttons'>
        //         <div className='play-button'>
        //             <button><img src="./images/play-icon-black.png" alt="" /><span>PLAY</span></button>

        //         </div>
        //         <div className='trailer-button'>
        //             <button><img src="./images/play-icon-white.png" alt="" /><span>Trailer</span></button>

        //         </div>
        //         <div className='add-button'>
        //             <button><span>+</span></button>
        //         </div>
        //         <div className='group-button'>
        //             <button><img src="./images/group-icon.png" alt="" /></button>
        //         </div>
        //     </div>
        //     <div className='subtitle'>
        //         <p>2020 • 1h 49m • Family, Comedy, Fantasy, Animation, Music</p>
        //     </div>
        //     <div className='desc'>
        //         Jamie Foxx leads an all-star cast in this hilarious, heart-filled adventure. Pixar’s 'Soul' introduces Joe, who lands the gig of his life at the best jazz club in town. But one misstep lands Joe in a fantastical place: The Great Before. There, he teams up with soul 22 (Tina Fey), and together they find the answers to some of life’s biggest questions.
        //     </div>
        // </div>
    )
}

export default Detail