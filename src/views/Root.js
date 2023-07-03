import React from 'react'
import { GlobalStyle } from '../assets/themes/globalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from '../assets/themes/theme'
import Header from '../components/organisms/Header/Header'
import Hero from '../components/organisms/Hero/Hero'
import Footer from '../components/organisms/Footer/Footer'
import AboutSection from "../components/organisms/AboutSection/AboutSection";

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <AboutSection />
      <Footer />
    </ThemeProvider>
  </>
)

export default Root
