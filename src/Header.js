import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 16px;
`

const StyledListItem = styled.li``

const StyledLogo = styled.h1`
  font-size: 64px;
`

const NavButton = styled.button`
  position: relative;
  width: 108px;
  height: 30px;
  padding: 0;
  font-size: 18px;
  border: none;
  background: none;

  @-webkit-keyframes fill {
    0% {
      width: 0;
      height: 6px;
    }
    100% {
      width: 100%;
      height: 6px;
      background-color: ${({ theme }) => theme.colors.main};
    }
  }

  &::after {
    content: '';
    z-index: -1;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
  }

  &:hover::after {
    animation: fill 0.5s forwards;
    -webkit-animation: fill 0.5s forwards;
    -moz-animation: fill 0.5s forwards;
    opacity: 1;
  }
`

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
