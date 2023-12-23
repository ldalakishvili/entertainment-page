import styled from 'styled-components'
import { useState } from 'react'
import data from '../../../../data.json'
import MovieIcon from '/Images/icon-nav-movies.svg'
import TvSeriesIcon from '/Images/icon-nav-tv-series.svg'
import BookMarkedFull from '/Images/icon-bookmark-full.svg'
import BookMarkedEmpty from '/Images/icon-bookmark-empty.svg'
import {
  Title,
  MoviesList,
  Movie,
  MoviePic,
  MovieBox,
  MovieInfo,
  MovieTitle,
  Info,
  InfoIcon,
  BookmarkIcon,
  BookmarkSign,
} from '../StyledContainer'
import Loop from '/Images/icon-search.svg'

export default function Search() {
  const [searchQuery, setSearchQuery] = useState(``)
  const [filteredMovies, setFilteredMovies] = useState([])

  const handleSearch = () => {
    const filtered = data.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredMovies(filtered)
    console.log(filteredMovies)
  }

  return (
    <>
      <SearchBox>
        <SearChIcon src={Loop} onClick={handleSearch} />
        <SearInput
          placeholder='Search for movies or TV series'
          onChange={(e) => {
            setSearchQuery(e.target.value)
            handleSearch()
          }}
        />
      </SearchBox>
      {searchQuery ? (
        <>
          <CoverContainer>
            <Title>
              Found {filteredMovies.length} results for '{searchQuery}'
            </Title>
            <MoviesList>
              {filteredMovies.map((movie) => (
                <Movie key={movie.title} isInSlider={false}>
                  <BookmarkIcon>
                    <BookmarkSign
                      src={
                        movie.isBookmarked ? BookMarkedFull : BookMarkedEmpty
                      }
                    />
                  </BookmarkIcon>

                  <MoviePic src={movie.thumbnail.regular.medium} />
                  <MovieBox>
                    <MovieInfo>
                      <Info>{movie.year}</Info>
                      <Info>
                        <InfoIcon
                          src={
                            movie.category === 'Movie'
                              ? MovieIcon
                              : TvSeriesIcon
                          }
                        />
                        {movie.category}
                      </Info>
                      <Info>{movie.rating}</Info>
                    </MovieInfo>
                    <MovieTitle>{movie.title}</MovieTitle>
                  </MovieBox>
                </Movie>
              ))}
            </MoviesList>
          </CoverContainer>
        </>
      ) : null}
    </>
  )
}

const SearchBox = styled.div`
  display: flex;
  gap: 2.8rem;
  align-items: center;
`

const SearChIcon = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`

const SearInput = styled.input`
  width: 100%;
  margin-right: 3.6rem;
  border: none;
  background-color: transparent;
  font-size: 24px;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(255, 255, 255, 1);

  &:focus:not(:placeholder-shown) {
    border-bottom: 1px solid rgba(90, 105, 143, 1);
  }
`
const CoverContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 11rem;
  width: 100%;
  padding: 0 0 2rem 0.5rem;
  border-radius: 1rem;
  /* min-height: 180vh; */
  /* height: 100vh; Set to 100% of viewport height */
  z-index: 10;
  background-color: #080a11;
  @media (max-width: 1150px) {
    top: 18rem;
    min-height: 220vh;
  }
`
