import React from 'react'
import { StyledLanguageMenu, StyledWrapper } from './LanguageSelectBar.styles'

const LanguageSelectBar = () => (
  <StyledWrapper>
    <StyledLanguageMenu>
      <button>
        <a href="">en</a>
      </button>
      <button>
        <a href="">pl</a>
      </button>
      <button>
        <a href="">fr</a>
      </button>
    </StyledLanguageMenu>
  </StyledWrapper>
)

export default LanguageSelectBar
