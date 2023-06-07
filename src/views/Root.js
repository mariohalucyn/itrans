import React from 'react'
import { GlobalStyle } from '../assets/themes/globalStyles'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../assets/themes/theme'
import Main from '../components/templates/Main/Main'

const StyledWrapper = styled.div``

const Root = () => (
  <StyledWrapper>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </StyledWrapper>
)

export default Root
