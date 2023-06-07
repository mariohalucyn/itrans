import styled from 'styled-components'

export const StyledWrapper = styled.div`
  padding: 48px 24px;

  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }
`

export const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 52px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media (min-width: 1200px) {
    padding: 0;
  }

  li {
    display: grid;
    grid-template-rows: 2fr 1fr;
    margin: 0;
    padding: 0;

    a {
      text-decoration: none;
    }
  }
`

export const ReadMore = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.8;
  transition: ease 0.2s;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  &:hover {
    opacity: 1;
  }
`
