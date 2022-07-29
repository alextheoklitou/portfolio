import React from 'react'
import favicon from '../assets/favicon.png'
import { Squash as Hamburger } from 'hamburger-react'


function Nav() {
  const [sidebarShow, setSidebarShow] = React.useState(false)


  const handleSideBar = () => setSidebarShow(!sidebarShow)

  return (
    <>
      <nav className="nav-toggle flex justify-between px-20 py-3 text-white border-b-1 border-brand-light-teal sticky top-0 z-50">
        <a href='/' className='flex float-left fixed float-left'><img src={favicon} alt='logo' className='h-20 w-20'/>
          </a>
        <ul className="flex flex-row fixed right-0 justify-around w-2/5 font-arimo uppercase">
          <li className='hover:text-brand-yellow'><a href='#about'>About</a></li>
          <li className='hover:text-brand-yellow'><a href='#skills'>Skills</a></li>
          <li className='hover:text-brand-yellow'><a href='#projects'>Projects</a></li>
          <li className='hover:text-brand-yellow'><a href='#interests'>Interests</a></li>
          <li className='hover:text-brand-yellow'><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
      
      <nav className="nav burger-toggle inline z-50 text-white">
        <div className="flex float-left m-3 pl-4 z-50 fixed">
          <a href="/"><img src={favicon} alt="logo" className="h-20 w-20" /></a>
        </div>
        <div className="flex fixed right-0 burger-icon mt-6 h-20 w-20 z-50" onClick={handleSideBar}>
          <Hamburger duration={0.35} toggle={setSidebarShow} toggled={sidebarShow} />
        </div>
        <div className={
          sidebarShow
            ? 'side-nav-menu-container active'
            : 'side-nav-menu-container'
        }>
          <div onClick={handleSideBar} className='mr-4 font-arimo'>
            <div className="m-1">
              <a href="#about" className='hover:text-brand-yellow'>About</a>
            </div>
            <div className="m-1">
              <a href="#skills" className='hover:text-brand-yellow'>Skills</a>
            </div>
            <div className="m-1">
              <a href="#projects" className='hover:text-brand-yellow'>Projects</a>
            </div>
            <div className="m-1">
              <a href="#interests" className='hover:text-brand-yellow'>Interests</a>
            </div>
            <div className="m-1">
              <a href="#contact" className='hover:text-brand-yellow'>Contact</a>
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}

export default Nav