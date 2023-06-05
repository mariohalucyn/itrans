import React from 'react'
import {
  LanguageButton,
  StyledLanguageMenu,
  StyledWrapper,
} from './LanguageSelectBar.styles'

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
