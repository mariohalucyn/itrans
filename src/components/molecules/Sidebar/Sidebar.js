import React, { useState } from 'react'
import { MenuToggleButton, Navigation } from './Sidebar.styles'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MenuToggleButton
        isOpen={isOpen}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span />
        <span />
      </MenuToggleButton>
      {isOpen ? (
        <Navigation>
          <ul>
            <li>
              <a href="">Transport</a>
            </li>
            <li>
              <a href="">Logistyka</a>
            </li>
            <li>
              <a href="">Wycena</a>
            </li>
            <li>
              <a href="">Praca</a>
            </li>
            <li>
              <a href="">Kontakt</a>
            </li>
          </ul>
        </Navigation>
      ) : null}
    </>
  )
}

export default Sidebar
