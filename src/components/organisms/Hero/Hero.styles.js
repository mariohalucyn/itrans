import styled from 'styled-components'
import Transport from '../../../assets/images/transport.jpg'

export const StyledWrapper = styled.div``

export const HeroHeader = styled.div`
  background-image: url('${Transport}');
  height: 500px;
  background-size: cover;
  display: flex;
`

export const HeroContent = styled.div`
  padding: 0;
  display: flex;
  width: 1rem;
  justify-content: start;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: 1200px) {
    width: 1200px;
    margin: auto;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  h1 {
    background-color: ${({ theme }) => theme.colors.darker};
    margin: 0;
    padding: 24px;
    @media (min-width: 768px) {
      padding: 36px 24px 24px 92px;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
`
