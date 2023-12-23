import styled from 'styled-components'
import TrendingLogo from '/Images/icon-nav-home.svg'
import MoviesLogo from '/Images/icon-nav-movies.svg'
import BookmarkLogo from '/Images/icon-nav-bookmark.svg'
import TvSeriesLogo from '/Images/icon-nav-tv-series.svg'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  const iconsArray = [
    { icon: TrendingLogo, category: 'trending' },
    { icon: MoviesLogo, category: 'Movie' },
    { icon: TvSeriesLogo, category: 'TV Series' },
    { icon: BookmarkLogo, category: 'bookmark' },
  ]

  return (
    <NavContainer>
      <NavUList>
        {iconsArray.map((item, index) => (
          <NavList key={index} to={`/${item.category}`}>
            <img src={item.icon} alt={`Nav Icon ${index}`} />
          </NavList>
        ))}
      </NavUList>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.5rem 3.8rem;
  background-color: rgba(22, 29, 47, 1);
  border-radius: 0.9rem;
  max-height: 100rem;
  height: 100%;
  @media (max-width: 1150px) {
    padding: 2.5rem 0;
    margin-right: 2.4rem;
  }
`
const NavUList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  margin: 7.5rem 0 55rem;
  @media (max-width: 1150px) {
    flex-direction: row;
    margin: 0;
  }
`
const NavList = styled(Link)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`
