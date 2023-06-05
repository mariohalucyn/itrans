import React from 'react'
import {
  LanguageButton,
  StyledLanguageMenu,
  StyledWrapper,
} from './LanguageSelectBar.styles'

const LanguageSelectBar = () => (
  <StyledWrapper>
    <StyledLanguageMenu>
      <LanguageButton>
        <a href="">en</a>
      </LanguageButton>
      <LanguageButton>
        <a href="">pl</a>
      </LanguageButton>
      <LanguageButton>
        <a href="">fr</a>
      </LanguageButton>
    </StyledLanguageMenu>
  </StyledWrapper>
)

export default LanguageSelectBar
