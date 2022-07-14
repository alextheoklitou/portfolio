import React from 'react'

function Nav() {
  return (
    <>
      <nav className="flex justify-end pr-20 py-3 text-white border-b-1 border-brand-light-teal sticky top-0 bg-brand-teal/75">
        <ul className="flex flex-row justify-around w-2/5 font-arimo uppercase">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Previous Experience</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Nav