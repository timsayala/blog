import React from 'react'
import Delete from '../img/delete.png';
import Edit from '../img/edit.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu'


const Single = () => {
  return (
    <div className='single'>
      <div className='content'><img src='https://images.pexels.com/photos/18363449/pexels-photo-18363449/free-photo-of-woman-lying-down-and-posing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=""/>
      <div className='user'>
        <img src="https://images.pexels.com/photos/18363449/pexels-photo-18363449/free-photo-of-woman-lying-down-and-posing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="info">
          <span>John</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to = {`/write?edit=2`}>  
          <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
        </div>
      </div>
      <h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      </div>

      <div className='menu'><Menu/></div>
    </div>
  ) 
}

export default Single