import React, { useState } from 'react'
import { Navbar } from 'react-bootstrap'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import MovieIcon from '@mui/icons-material/Movie';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Header() {

  const [Toggler , setToggler] = useState(false);
  const ifPopupOpen = () => {
    setToggler(prevState => !prevState);
  };

  return (
    <div className='all'>
    <div className='cont'>
      <div className='logo'>
          <Nav.Link as={Link} to={'/'}>
            <img src="./images/logo.png.png" alt='logo' width={90} height={100}/>
          </Nav.Link>
      </div>
        <Navbar className='nav'>
          <Nav.Link as={Link} to="/home" style={{color:"#fff"}}>
            <a>
              <HomeIcon className='home'/>
              <span>HOME</span>
            </a>
          </Nav.Link>
          <a>
            <SearchIcon className='home'/>
            <span>SEARCH</span>
          </a>
          <a>
            <AddIcon className='home'/>
            <span>WATCHLIST</span>
          </a>
          <a>
           <StarIcon className='home'/>
            <span>ORIGINALS</span>
          </a>
          <a>
            <PlayCircleIcon className='home'/>
            <span>MOVIES</span>
          </a>
          <a>
           <MovieIcon className='home'/>
            <span>SERIES</span>
          </a>
        </Navbar>

      <div className='userimg'>
          <img src="./images/userimg.png" onClick={ifPopupOpen} height={48} width={48} alt="user" />
      </div>

      <div className='popupmenu' style={{ display: Toggler ? 'flex' : 'none' }}>
         <Nav.Link as={Link} to={'/home'}><a style={{display:"flex",width:"100%",alignItems:'flex-start',}}>
          <HomeIcon className='home'/>
          <span>HOME</span>
        </a>
        </Nav.Link>
        <a style={{display:"flex",width:"100%",alignItems:'flex-start', marginTop: "10px"}}>
          <PowerSettingsNewIcon className='home'/>
          <span>Sign Out</span>
        </a>
      </div>
    </div>
    </div>
    
  )
}

export default Header