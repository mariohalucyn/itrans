import styled from 'styled-components'

export const StyledWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 64px 0;
`

export const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 24px;
`

export const StyledListItem = styled.li`
  margin: 0;
  padding: 0;
`
