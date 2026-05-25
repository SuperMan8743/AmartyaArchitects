import React from 'react'

function Navbar() {
  return (
    <>
      <nav>
        <div  className='flex'>
          <ul>
            <li><a href="logo">logo</a></li>
          </ul>
          <ul  className='flex gap-1.5'>
            <li><a href="Home">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="Contact">Contact</a></li>
            <li><a href="Project">Project</a></li>
            
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
