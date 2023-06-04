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
    background-color: gray;
  }
`

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 12px;
`

const StyledListItem = styled.li``

const StyledLogo = styled.h1`
  font-size: 82px;
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
          <button>Nasza firma</button>
        </StyledListItem>
        <StyledListItem>
          <button>Transport</button>
        </StyledListItem>
        <StyledListItem>
          <button>Logistyka</button>
        </StyledListItem>
        <StyledListItem>
          <button>Wycena</button>
        </StyledListItem>
        <StyledListItem>
          <button>Praca</button>
        </StyledListItem>
        <StyledListItem>
          <button>Kontakt</button>
        </StyledListItem>
      </StyledList>
    </StyledHeader>
  </StyledWrapper>
)

export default Header
