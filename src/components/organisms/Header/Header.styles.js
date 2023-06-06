import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

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
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 24px;

  h1 {
    font-size: 56px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    @media (min-width: 1200px) {
      left: 0;
      transform: translateX(0);
    }

    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      width: 90px;
      height: 40px;
      left: 0;
      top: 0;
      background-color: ${({ theme }) => theme.colors.main};
    }

    a {
      text-decoration: none;
    }
  }
`

export const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: none;
  gap: 16px;

  @media (min-width: 1200px) {
    display: flex;
  }

  li {
    button {
      position: relative;
      height: 30px;
      padding: 0 18px;
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
        animation: fill 0.4s forwards;
        -webkit-animation: fill 0.4s forwards;
        -moz-animation: fill 0.4s forwards;
        opacity: 1;
      }

      a {
        text-decoration: none;
      }
    }
  }
`
