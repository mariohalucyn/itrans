import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const ApperarAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Navigation = styled.nav`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  animation: 0.3s 1 forwards ${ApperarAnimation};

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    li {
      margin: 20px 0;

      a {
        font-size: 20px;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

const MenuToggleButton = styled.button`
  width: 48px;
  height: 48px;
  z-index: 9999;
  position: absolute;
  overflow-x: hidden;
  top: 24px;
  left: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.black};

  @media (min-width: 1200px) {
    display: none;
  }

  span:first-child {
    background-color: ${({ theme }) => theme.colors.white};
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow-x: hidden;
    transform: translateX(
      ${({ isOpen }) => (isOpen ? 'calc(-100% - 2px)' : 0)}
    );
    transition: transform ease-in-out 0.3s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 17px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.black};
      left: 50%;
    }

    &::before {
      top: 17px;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      bottom: 17px;
      transform: translate(-50%, 50%) rotate(-45deg);
    }
  }

  span:last-child {
    background-color: ${({ theme }) => theme.colors.white};
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    overflow-x: hidden;
    left: calc(100% + 2px);
    transform: translateX(
      ${({ isOpen }) => (isOpen ? 'calc(-100% - 2px)' : 0)}
    );
    transition: transform ease-in-out 0.3s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.black};
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MenuToggleButton
        isOpen={isOpen}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span />
        <span />
      </MenuToggleButton>
      {isOpen ? (
        <Navigation>
          <ul>
            <li>
              <a href="">Nasza firma</a>
            </li>
            <li>
              <a href="">Transport</a>
            </li>
            <li>
              <a href="">Logistyka</a>
            </li>
            <li>
              <a href="">Wycena</a>
            </li>
            <li>
              <a href="">Praca</a>
            </li>
            <li>
              <a href="">Kontakt</a>
            </li>
          </ul>
        </Navigation>
      ) : null}
    </>
  )
}

export default Sidebar
