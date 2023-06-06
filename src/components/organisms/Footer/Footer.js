import React from 'react'
import { ReactComponent as Phone } from '../../../assets/icons/phone.svg'
import { ReactComponent as Mail } from '../../../assets/icons/mail.svg'
import {
  StyledContact,
  StyledContactList,
  StyledFooter,
  StyledHours,
  StyledLabel,
  StyledList,
  StyledWrapper,
} from './Footer.styles'

const Footer = () => (
  <StyledWrapper>
    <StyledFooter>
      <div>
        <StyledList>
          <div>
            <li>ITrans Sp. Jawna</li>
            <li>ul. Różana 25.</li>
            <li> 63-400 Ostrów Wielkopolski</li>
          </div>
        </StyledList>
      </div>
      <div>
        <StyledContact>
          <StyledContactList>
            <li>
              <Mail />
              info@itrans.com.pl
            </li>
            <li>
              <Phone />
              +48 506 874 737
            </li>
            <li>
              <Phone />
              +48 516 135 760
            </li>
          </StyledContactList>
          <div>
            <StyledLabel>
              Kontakt
              <input placeholder="Wpisz adres email" type="text" />
              <button>Zapisz</button>
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
          <li>Copyright © 2023 ITrans Sp. Jawna Wszelkie prawa zastrzeżone.</li>
        </StyledList>
      </div>
    </StyledFooter>
  </StyledWrapper>
)

export default Footer
