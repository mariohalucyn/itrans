import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 64px 0;
`

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 24px;
`

const StyledListItem = styled.li`
  margin: 0;
  padding: 0;
`

const AboutSection = () => (
  <StyledWrapper>
    <StyledList>
      <StyledListItem>
        <h1>Nasza firma</h1>
        <p>
          Przedmiotem naszej działalności jest transport, spedycja oraz
          logistyka. Zajmujemy się głównie transportami międzynarodowymi:
          posiadamy możliwość zarówno eksportów, jak i importów towarów z
          Francji, Niemiec, Hiszpanii, Wielkiej Brytanii oraz innych krajów.
        </p>
      </StyledListItem>
      <StyledListItem>
        <h1>Transport</h1>
        <p>
          Realizujemy projekty na terenie Unii Europejskiej z możliwością
          podstawienia około 30 pojazdów dziennie. Wykonujemy transporty,
          również z wykorzystaniem podwójnej obsady. Nasi kierowcy posiadają
          uprawnienia do przewozu towarów niebezpiecznych oraz odpadów.
        </p>
      </StyledListItem>
      <StyledListItem>
        <h1>Logistyka</h1>
        <p>
          Świadczymy usługi przechowywaniu towaru, rozładunku oraz załadunku.
          Dopełniamy wszelkich czynności związanych z obsługą celną dotyczącą
          przejęcia towarów, odprawie celnej towaru przekraczającego granicę.
        </p>
      </StyledListItem>
    </StyledList>
  </StyledWrapper>
)

export default AboutSection
