import styled from 'styled-components'
import Transport from '../../../assets/images/transport.jpg'

export const StyledWrapper = styled.div``

export const HeroHeader = styled.div`
  background-image: url('${Transport}');
  width: 100%;
  height: 500px;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
  padding: 0;
`

export const HeroContent = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
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
