import React from 'react'
import {
  ReadMore,
  StyledList,
  StyledListItem,
  StyledWrapper,
} from './AboutSection.styles'
import { ReactComponent as Next } from '../../../assets/icons/next.svg'

const AboutSection = () => (
  <StyledWrapper>
    <StyledList>
      <StyledListItem>
        <div>
          <a href="">
            <h1>Nasza firma</h1>
          </a>
          <p>
            Przedmiotem naszej działalności jest transport, spedycja oraz
            logistyka. Zajmujemy się głównie transportami międzynarodowymi:
            posiadamy możliwość zarówno eksportów, jak i importów towarów z
            Francji, Niemiec, Hiszpanii, Wielkiej Brytanii oraz innych krajów.
          </p>
        </div>
        <div>
          <ReadMore>
            <a href="">
              <h3>Czytaj dalej</h3>
            </a>
            <a href="">
              <Next />
            </a>
          </ReadMore>
        </div>
      </StyledListItem>
      <StyledListItem>
        <div>
          <a href="">
            <h1>Transport</h1>
          </a>
          <p>
            Realizujemy projekty na terenie Unii Europejskiej z możliwością
            podstawienia około 30 pojazdów dziennie. Wykonujemy transporty,
            również z wykorzystaniem podwójnej obsady. Nasi kierowcy posiadają
            uprawnienia do przewozu towarów niebezpiecznych oraz odpadów.
          </p>
        </div>
        <div>
          <ReadMore>
            <a href="">
              <h3>Czytaj dalej</h3>
            </a>
            <a href="">
              <Next />
            </a>
          </ReadMore>
        </div>
      </StyledListItem>
      <StyledListItem>
        <div>
          <a href="">
            <h1>Logistyka</h1>
          </a>
          <p>
            Świadczymy usługi przechowywaniu towaru, rozładunku oraz załadunku.
            Dopełniamy wszelkich czynności związanych z obsługą celną dotyczącą
            przejęcia towarów, odprawie celnej towaru przekraczającego granicę.
          </p>
        </div>
        <div>
          <ReadMore>
            <a href="">
              <h3>Czytaj dalej</h3>
            </a>
            <a href="">
              <Next />
            </a>
          </ReadMore>
        </div>
      </StyledListItem>
    </StyledList>
  </StyledWrapper>
)

export default AboutSection
