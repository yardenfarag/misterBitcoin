import { NavLink } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react'

export function AppHeader() {
  let [isOpen, setOpen] = useState(Boolean)
  const onOpenMenu = () => {
    isOpen = !isOpen
    setOpen(isOpen)
  }
  return (
    <>
      <header className='app-header'>
        <div className="logo">
          <img src='https://res.cloudinary.com/trellis22/image/upload/v1672253535/dhcce3y66yw9sdihxrbs.png' alt="" />
        </div>
        <div className='menu-icon'>
          <Hamburger onClick={onOpenMenu} toggled={isOpen} toggle={setOpen} />
        </div>
        <nav className={isOpen ? 'open' : ''}>
          <NavLink onClick={onOpenMenu} exact='true' activeclassname='active' to='/'>
            Home
          </NavLink>
          <NavLink onClick={onOpenMenu} to='/contact'>
            Contacts
          </NavLink>
          <NavLink onClick={onOpenMenu} to='/statistic'>
            Statistics
          </NavLink>
          <NavLink onClick={onOpenMenu} to='/signup'>
            Signup
          </NavLink>
        </nav>
      </header>
      {isOpen ? <div onClick={onOpenMenu} className='app-screen'></div> : ''}
    </>
  )
}
