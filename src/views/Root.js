import React from 'react'
import { GlobalStyle } from '../assets/themes/globalStyles'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../assets/themes/theme'
import AboutSection from '../components/organisms/AboutSection/AboutSection'
import Footer from '../components/organisms/Footer/Footer'
import Hero from '../components/organisms/Hero/Hero'
import LanguageSelectBar from '../components/atoms/LanguageSelectBar/LanguageSelectBar'
import Header from '../components/organisms/Header/Header'

const StyledWrapper = styled.div``

const Root = () => (
  <StyledWrapper>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <LanguageSelectBar />
      <Header />
      <Hero />
      <AboutSection />
      <Footer />
    </ThemeProvider>
  </StyledWrapper>
)

export default Root
