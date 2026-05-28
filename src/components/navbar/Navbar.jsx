import React from 'react'

function Navbar() {
  return (
    <>
      <nav className='flex flex-row justify-between '>
        <div><a href="logo basis=30">logo</a></div>
        <div >
          <ul className='flex flex-row gap-10'>
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
