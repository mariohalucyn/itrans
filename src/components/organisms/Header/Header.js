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
          <NavButton>Nasza Firma</NavButton>
        </StyledListItem>
        <StyledListItem>
          <NavButton>Transport</NavButton>
        </StyledListItem>
        <StyledListItem>
          <NavButton>Logistyka</NavButton>
        </StyledListItem>
        <StyledListItem>
          <NavButton>Wycena</NavButton>
        </StyledListItem>
        <StyledListItem>
          <NavButton>Praca</NavButton>
        </StyledListItem>
        <StyledListItem>
          <NavButton>Kontakt</NavButton>
        </StyledListItem>
      </StyledList>
    </StyledHeader>
  </StyledWrapper>
)

export default Header
