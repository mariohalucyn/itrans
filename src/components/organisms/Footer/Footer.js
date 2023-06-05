import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Phone } from '../../../assets/icons/phone.svg'
import { ReactComponent as Mail } from '../../../assets/icons/mail.svg'

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
`

const StyledFooter = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 24px 0;
  justify-content: space-between;
`
const StyledContact = styled.div`
  gap: 24px;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  position: relative;
`

const StyledContactList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 24px;
  align-items: center;

  margin: 0;
  padding: 0;
`

const StyledLabel = styled.label`
  display: flex;
  gap: 12px;
  align-items: center;
`

const StyledInput = styled.input`
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

const StyledInputButton = styled.button`
  width: 90px;
  height: 48px;
  font-weight: 600;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 4px solid ${({ theme }) => theme.colors.main};
`

const StyledHours = styled.p`
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

const StyledListItem = styled.li`
  display: flex;
  gap: 8px;
`

const Footer = () => (
  <StyledWrapper>
    <StyledFooter>
      <div>
        <StyledList>
          <div>
            <li>Itrans Sp. Jawna</li>
            <li>ul. Różana 25.</li>
            <li> 63-400 Ostrów Wielkopolski</li>
          </div>
        </StyledList>
      </div>
      <div>
        <StyledContact>
          <StyledContactList>
            <StyledListItem>
              <Mail />
              info@itrans.com.pl
            </StyledListItem>
            <StyledListItem>
              <Phone />
              +48 506 874 737
            </StyledListItem>
            <StyledListItem>
              <Phone />
              +48 516 135 760
            </StyledListItem>
          </StyledContactList>
          <div>
            <StyledLabel>
              Newsletter
              <StyledInput placeholder="Wpisz adres email" type="text" />
              <StyledInputButton>Zapisz</StyledInputButton>
            </StyledLabel>
          </div>
        </StyledContact>
      </div>
      <div>
        <StyledHours>
          pon. - pt. 7:00 AM - 10:00 PM
          <br />
          sob. 8:00 AM - 8:00 PM, niedziele 8:00 AM - 6:00 PM
        </StyledHours>
      </div>
      <div>
        <StyledList>
          <li>
            <a href="">Polityka Prywatności</a>
          </li>
          <li>Copyright © 2023 Itrans Sp. Jawna Wszelkie prawa zastrzeżone.</li>
        </StyledList>
      </div>
    </StyledFooter>
  </StyledWrapper>
)

export default Footer
