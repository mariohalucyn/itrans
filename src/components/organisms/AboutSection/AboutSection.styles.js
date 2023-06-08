import styled from 'styled-components'

export const StyledWrapper = styled.div`
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

  li {
    display: grid;
    grid-template-rows: 2fr 1fr;
    margin: 0;
    padding: 0;

    a {
      text-decoration: none;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 24px;

    p {
      margin: 0;
      padding: 0;
    }

    img {
      max-width: 300px;
      margin: 0 auto;

      @media (min-width: 1200px) {
        max-width: 500px;
      }
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
