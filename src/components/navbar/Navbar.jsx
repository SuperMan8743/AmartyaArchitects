import React from 'react'

function Navbar() {
  return (
    <>
      <nav >
        <div><a href="logo basis=30">logo</a></div>
        <div className=' basis-70 flex flex-row-reverse'>
          <ul className='flex flex-row'>
            <li className=''><a href="home">Home</a></li>
            <li className=''><a href="about">About US</a></li>
            <li><a href="project">Projects</a></li>
            <li><a href="contactus">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
