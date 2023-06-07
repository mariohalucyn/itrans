import React from 'react'
import styled from 'styled-components'
import Header from '../../organisms/Header/Header'
import Hero from '../../organisms/Hero/Hero'
import AboutSection from '../../organisms/AboutSection/AboutSection'
import Footer from '../../organisms/Footer/Footer'

const StyledWrapper = styled.div``

const Main = () => (
  <StyledWrapper>
    <Header />
    <Hero />
    <AboutSection />
    <Footer />
  </StyledWrapper>
)

export default Main
