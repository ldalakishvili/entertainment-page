import styled from 'styled-components'
import Content from './Content'
import NavigationBar from './Nav'

export default function HomePage() {
  return (
    <>
      <HomeContainer>
        <NavigationBar />
        <Content />
      </HomeContainer>
    </>
  )
}

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 3.2rem 0 0 3.2rem;
  gap: 3.6rem;
  overflow-x: hidden;

  @media (max-width: 1150px) {
    flex-direction: column;
    padding: 2.3rem 0 0 2.5rem;
  }
  @media (max-width: 767px) {
    padding: 0 0 0 1.6rem;
  }
`
