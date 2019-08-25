import styled from 'styled-components'
import { device } from 'config/device'

export const EducationContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SkillsContainer = styled.div`
  width: 85vw;
  @media ${device.tablet} {
    width: 60vw;
  }
  margin-top: 5rem;
`
