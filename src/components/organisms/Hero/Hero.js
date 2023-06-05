import React from 'react'
import Transport from '../../../assets/images/transport.jpg'
import styled from 'styled-components'

const StyledWrapper = styled.div``

const HeroHeader = styled.div`
  background-image: url('${Transport}');
  width: 100%;
  height: 500px;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const HeroContent = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  h1 {
    background-color: ${({ theme }) => theme.colors.black};
    padding: 24px 24px 12px 72px;
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
`

const Hero = () => (
  <StyledWrapper>
    <HeroHeader>
      <HeroContent>
        <h1>
          <a href="">Wyceń swój transport</a>
        </h1>
      </HeroContent>
    </HeroHeader>
  </StyledWrapper>
)

export default Hero
