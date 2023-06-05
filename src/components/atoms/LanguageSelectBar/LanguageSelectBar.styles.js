import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`

export const StyledLanguageMenu = styled.div`
  display: flex;
  position: relative;
  justify-content: end;

  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }
`

export const LanguageButton = styled.button`
  background: none;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};

  a {
    text-decoration: none;
  }
`
