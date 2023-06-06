import React from 'react'
import { GlobalStyle } from '../assets/themes/globalStyles'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../assets/themes/theme'
import Header from '../components/organisms/Header/Header'
import Footer from '../components/organisms/Footer/Footer'
import AboutSection from '../components/organisms/AboutSection/AboutSection'
import Hero from '../components/organisms/Hero/Hero'

const StyledWrapper = styled.div``

const Root = () => (
  <StyledWrapper>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <AboutSection />
      <Footer />
    </ThemeProvider>
  </StyledWrapper>
)

export default Root
