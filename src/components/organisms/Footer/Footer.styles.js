import styled from 'styled-components'

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
`

export const StyledFooter = styled.div`
  padding: 0 24px;
  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }
`

export const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 24px 0;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }

  a {
    &:hover {
      text-decoration: none;
    }
  }
`
export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (min-width: 1024px) {
    justify-content: space-between;
    flex-direction: row;
    gap: 24px;
  }
`

export const StyledContactList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  li {
    display: flex;
    gap: 8px;
    padding: 8px 0;
  }
`

export const StyledLabel = styled.label`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  input {
    height: 48px;
    width: 200px;
    font-size: 1rem;
    padding: 24px;
    opacity: 0.7;
    border: 3px solid ${({ theme }) => theme.colors.gray};
    transition: ease 0.2s;

    &::placeholder {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.darkGray};
    }

    &:hover {
      opacity: 1;
    }
  }

  button {
    width: 90px;
    height: 54px;
    font-weight: 600;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    border: 3px solid ${({ theme }) => theme.colors.main};
  }
`

export const StyledHours = styled.div`
  font-size: 14px;
  position: relative;
  padding: 0 0 24px 0;
  margin: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray};
  }
  @media (min-width: 1024px) {
    padding: 24px 0;
  }
`
