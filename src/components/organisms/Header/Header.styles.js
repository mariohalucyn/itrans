import styled from 'styled-components'

export const StyledWrapper = styled.div`
  width: 100%;
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

export const StyledHeader = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 16px;
`

export const StyledListItem = styled.li``

export const StyledLogo = styled.h1`
  font-size: 48px;
`

export const NavButton = styled.button`
  position: relative;
  width: 112px;
  height: 30px;
  padding: 0;
  font-size: 18px;
  border: none;
  background: none;

  @-webkit-keyframes fill {
    0% {
      width: 0;
      height: 6px;
    }
    100% {
      width: 100%;
      height: 6px;
      background-color: ${({ theme }) => theme.colors.main};
    }
  }

  &::after {
    content: '';
    z-index: -1;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
  }

  &:hover::after {
    animation: fill 0.5s forwards;
    -webkit-animation: fill 0.5s forwards;
    -moz-animation: fill 0.5s forwards;
    opacity: 1;
  }
`
