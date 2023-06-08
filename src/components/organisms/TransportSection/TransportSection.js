import React from 'react'
import { StyledList, StyledWrapper } from '../AboutSection/AboutSection.styles'
import Plandeka from '../../../assets/images/plandeka.png'
import Chlodnia from '../../../assets/images/chlodnia.png'
import PlatformaPlaska from '../../../assets/images/platformaPlaska.jpg'
import styled from 'styled-components'

const StyledListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  p {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 300px;
    margin: 0 auto;

    @media (min-width: 1200px) {
      max-width: 500px;
    }
  }
`

const TransportSection = () => (
  <StyledWrapper>
    <StyledList>
      <StyledListItem>
        <img src={Plandeka} alt="" />
        <h1>Plandeka</h1>
        <p>
          Uniwersalne naczepy stosowane do przewozu wszelkiego rodzaju towarów
          zabezpieczonych opakowaniem, luźnych, odpornych na zmiany temperatury.
          Możliwość ładowania tyłem, bokiem i górą. Naczepy o wymiarach
          1360x247x280cm z ładownością do 25 ton (na określonych relacjach
          możliwość podstawienia naczepy typu MEGA do 300 cm wysokości towaru
          oraz coil-muldy stosowanej do transportu elementów owalnych). Zestawy
          o wymiarach 770x245x300cm + 770x245x300cm o ładowności do 24 ton.
          Pojazdy mniejsze typu solo oraz busy dostosowujemy w zależności od
          wymiarów transportowanego towaru.
        </p>
      </StyledListItem>
      <StyledListItem>
        <img src={Chlodnia} alt="" />
        <h1>Chłodnia</h1>
        <p>
          Uniwersalne naczepy stosowane do przewozu wszelkiego rodzaju towarów
          zabezpieczonych opakowaniem, luźnych, odpornych na zmiany temperatury.
          Możliwość ładowania tyłem, bokiem i górą. Naczepy o wymiarach
          1360x247x280cm z ładownością do 25 ton (na określonych relacjach
          możliwość podstawienia naczepy typu MEGA do 300 cm wysokości towaru
          oraz coil-muldy stosowanej do transportu elementów owalnych). Zestawy
          o wymiarach 770x245x300cm + 770x245x300cm o ładowności do 24 ton.
          Pojazdy mniejsze typu solo oraz busy dostosowujemy w zależności od
          wymiarów transportowanego towaru.
        </p>
      </StyledListItem>
      <StyledListItem>
        <img src={PlatformaPlaska} alt="" />
        <h1>Platformy płaskie</h1>
        <p>
          PlatfoPlatformy płaskie świetnie sprawdzają się w transporcie ładunków
          szerszych i wyższych, których rozmiar wykracza poza ograniczenia ścian
          bocznych naczepy kurtynowej oraz innych ładunków odpornych na
          działanie warunków atmosferycznych. Przy ich pomocy przewozi się
          najczęściej ładunki stali, dłużycę, konstrukcje oraz maszyny budowlane
          i przemysłowe. Transport kontenerów morskich 20x40x45cali odbywa się
          przy użyciu platform z systemem twistlock.rmy płaskie
        </p>
      </StyledListItem>
      <div>
        <h1>Transport ładunków ponadgabarytowych.</h1>
        <p>
          Transport ponadgabarytowy to przewóz ładunków, które swoimi wymiarami
          lub ciężarem przekraczają dozwolone prawnie normy do poruszania się po
          drogach. Jeżeli macie Państwo do przetransportowania ładunek, który
          przekracza 13,6 m długości lub 25 ton wagi, z pewnością jest to
          ładunek wymagający specjalistycznego transportu, który możemy dla Was
          wykonać. Wykorzystujemy w tym celu platformy niskopodwoziowe, semi,
          teleskopowe, a także naczepy wieloosiowe w zależności od rozmiarów i
          wagi ładunku. Towar na życzenie możemy okryć plandeką płachtą.
        </p>
      </div>
    </StyledList>
  </StyledWrapper>
)

export default TransportSection
