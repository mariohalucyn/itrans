import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

const StyledLanguageMenu = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
  justify-content: end;
`

const LanguageButton = styled.button`
  background: none;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const LanguageSelectBar = () => (
  <StyledWrapper>
    <StyledLanguageMenu>
      <LanguageButton>en</LanguageButton>
      <LanguageButton>pl</LanguageButton>
      <LanguageButton>fr</LanguageButton>
    </StyledLanguageMenu>
  </StyledWrapper>
)

export default LanguageSelectBar
