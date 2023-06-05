import styled from 'styled-components'

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
`

export const StyledFooter = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 36px 0;
  display: flex;
  flex-direction: column;
`

export const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 24px 0;
  justify-content: space-between;
`
export const StyledContact = styled.div`
  gap: 24px;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  position: relative;
`

export const StyledContactList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 24px;
  align-items: center;

  margin: 0;
  padding: 0;
`

export const StyledLabel = styled.label`
  display: flex;
  gap: 12px;
  align-items: center;
`

export const StyledInput = styled.input`
  height: 48px;
  width: 200px;
  font-size: 1rem;
  padding: 12px;
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
  padding: 24px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray};
  }
`

export const StyledListItem = styled.li`
  display: flex;
  gap: 8px;
`
