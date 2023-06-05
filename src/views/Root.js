import React from 'react'
import { GlobalStyle } from '../assets/themes/globalStyles'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../assets/themes/theme'
import Header from '../components/organisms/Header'
import LanguageSelectBar from '../components/atoms/LanguageSelectBar'

const StyledWrapper = styled.div``

const Root = () => (
  <StyledWrapper>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <LanguageSelectBar />
      <Header />
    </ThemeProvider>
  </StyledWrapper>
)

export default Root
