import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

const LanguageSelectBar = styled.div`
  display: flex;
  justify-content: end;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  gap: 16px;
`

const StyledListItem = styled.li``

const StyledLogo = styled.h1`
  font-size: 82px;
`

const NavButton = styled.button`
  width: 120px;
  height: 30px;
  position: relative;
  background: none;
  border: none;
  font-size: 18px;
  padding: 0;

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
    position: absolute;
    opacity: 0;
    width: 100%;
    left: 0;
    bottom: 0;
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
    <LanguageSelectBar>
      <button>en</button>
      <button>pl</button>
      <button>fr</button>
    </LanguageSelectBar>
    <StyledHeader>
      <StyledLogo>ITrans</StyledLogo>
      <StyledList>
        <StyledListItem>
          <NavButton>Nasza firma</NavButton>
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
