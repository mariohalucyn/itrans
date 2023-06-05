import React from 'react'
import {
  NavButton,
  StyledHeader,
  StyledList,
  StyledListItem,
  StyledLogo,
  StyledWrapper,
} from './Header.styles'

const Header = () => (
  <StyledWrapper>
    <StyledHeader>
      <StyledLogo>ITrans</StyledLogo>
      <StyledList>
        <StyledListItem>
          <NavButton>
            <a href="">Nasza Firma</a>
          </NavButton>
        </StyledListItem>
        <StyledListItem>
          <NavButton>
            <a href="">Transport</a>
          </NavButton>
        </StyledListItem>
        <StyledListItem>
          <NavButton>
            <a href="">Logistyka</a>
          </NavButton>
        </StyledListItem>
        <StyledListItem>
          <NavButton>
            <a href="">Wycena</a>
          </NavButton>
        </StyledListItem>
        <StyledListItem>
          <NavButton>
            <a href="">Praca</a>
          </NavButton>
        </StyledListItem>
        <StyledListItem>
          <NavButton>
            <a href="">Kontakt</a>
          </NavButton>
        </StyledListItem>
      </StyledList>
    </StyledHeader>
  </StyledWrapper>
)

export default Header
