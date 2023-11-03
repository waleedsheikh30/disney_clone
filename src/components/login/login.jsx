import React from 'react'
import Stream from './stream'
import DownloadNow from './downloadnow'
import Groupwatch from './groupwatch'
import Marvel from './marvel'
import Gridtheme from './gridtheme'
import Devices from './devices'
import Advertise from './advertise'
import Footer from './footer'

function Login() {
  return (
    <>
    <div className='login-container'>
        <div className='login-content'>
            <div className='logo1'>
                <img src="./images/cta-logo-one.svg" alt="" />
            </div>
            <div className='signup-btn'>
                <button>GET ALL THREE</button>
            </div>
            <div className='desc2'>
                <p>Get Premier Access to Raya Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 07/26/23, the price of Disney+ Bundle will increase by $1.</p>
            </div>
            <div className='logo2'>
                <img src="./images/cta-logo-two.png" alt="" />
            </div>
        </div>
    </div>
    <Stream/>
    <Groupwatch/>
    <Marvel/>
    <Gridtheme/>
    <DownloadNow/>
    <Advertise/>
    <Devices/>
    </>
  )
}

export default Login