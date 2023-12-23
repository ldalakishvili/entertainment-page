import styled from 'styled-components'
import Search from './Search'
import Category from './Category'
export default function Content() {
  return (
    <ContentContainer>
      <Search />
      <Category />
    </ContentContainer>
  )
}
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
  overflow-x: hidden;
`
