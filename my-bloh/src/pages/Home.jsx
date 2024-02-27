import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

  const posts= [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img: "https://images.pexels.com/photos/18363449/pexels-photo-18363449/free-photo-of-woman-lying-down-and-posing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img: "https://images.pexels.com/photos/18363449/pexels-photo-18363449/free-photo-of-woman-lying-down-and-posing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img: "https://images.pexels.com/photos/18363449/pexels-photo-18363449/free-photo-of-woman-lying-down-and-posing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img: "https://images.pexels.com/photos/18363449/pexels-photo-18363449/free-photo-of-woman-lying-down-and-posing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img: "https://images.pexels.com/photos/18363449/pexels-photo-18363449/free-photo-of-woman-lying-down-and-posing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

   


  ]
  return (
    <div className='home'>
      <div className='posts'>
      {posts.map((post)=>(
        <div className='post' key={post.id}> 
          <div className="img">
            <img src={post.img} alt="" />
          </div>
          <div className="content">
            <Link className="link"to={`/post/${post.id}`}>
            <h1>{post.title}</h1>
         
            </Link>
            <p>{post.desc}</p>
            <button>Read More</button>
          </div>
        </div>
      ))}
      </div>
      </div>
    
  )
}

export default Home