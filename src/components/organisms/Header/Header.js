import React from 'react'
import { StyledHeader, StyledList, StyledWrapper } from './Header.styles'

const Header = () => (
  <StyledWrapper>
    <StyledHeader>
      <h1>
        <a href="">ITrans</a>
      </h1>
      <StyledList>
        <li>
          <button>
            <a href="">Nasza Firma</a>
          </button>
        </li>
        <li>
          <button>
            <a href="">Transport</a>
          </button>
        </li>
        <li>
          <button>
            <a href="">Logistyka</a>
          </button>
        </li>
        <li>
          <button>
            <a href="">Wycena</a>
          </button>
        </li>
        <li>
          <button>
            <a href="">Praca</a>
          </button>
        </li>
        <li>
          <button>
            <a href="">Kontakt</a>
          </button>
        </li>
      </StyledList>
    </StyledHeader>
  </StyledWrapper>
)

export default Header
