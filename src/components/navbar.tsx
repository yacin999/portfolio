import React from 'react'
import { ModeToggle } from './mode-toggle'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="px-20 py-5 backdrop-blur-lg">
        <div className="flex items-center justify-between">
        <aside>
            <p>Kelalech</p>
        </aside>
        <div>
            <ul className="flex items-center gap-6">
                <li>Home</li>
                <li>About Us</li>
                <li>My Work</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <aside className="flex items-center gap-6">
            <div>En</div>
            <ModeToggle/>
        </aside>
        </div>
  </nav>
  )
}

export default Navbar