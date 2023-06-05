import styled from 'styled-components'

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
`

export const StyledFooter = styled.div`
  padding: 24px;

  @media (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
    padding: 24px 0;
  }
`

export const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 24px 0;
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
`

export const StyledLabel = styled.label`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`

export const StyledInput = styled.input`
  height: 48px;
  width: 200px;
  font-size: 1rem;
  padding: 24px;
  border: 3px solid ${({ theme }) => theme.colors.gray};

  &::placeholder {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`

export const StyledInputButton = styled.button`
  width: 90px;
  height: 48px;
  font-weight: 600;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 4px solid ${({ theme }) => theme.colors.main};
`

export const StyledHours = styled.p`
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

export const StyledListItem = styled.li`
  display: flex;
  gap: 8px;
  padding: 8px 0;
`
