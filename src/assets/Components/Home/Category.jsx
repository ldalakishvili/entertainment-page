import React, { useState } from 'react'
import styled from 'styled-components'
import data from '../../../../data.json'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import MovieIcon from '/Images/icon-nav-movies.svg'
import TvSeriesIcon from '/Images/icon-nav-tv-series.svg'
import BookMarkedFull from '/Images/icon-bookmark-full.svg'
import BookMarkedEmpty from '/Images/icon-bookmark-empty.svg'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
  CategoryContainer,
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

export default function Category({ searchQuery }) {
  const params = useParams()

  const [moviesData, setMoviesData] = useState(data)

  const handleBookmarkToggle = (title) => {
    setMoviesData((prevData) => {
      return prevData.map((movie) =>
        movie.title === title
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie
      )
    })
  }

  const movieData = moviesData.filter((item) => {
    if (params.category === 'trending') {
      return item.isTrending
    } else if (params.category === 'bookmark') {
      return item.isBookmarked
    } else {
      return item.category === params.category
    }
  })

  const determineTitle = (category) => {
    switch (category) {
      case 'trending':
        return 'Trending'
      case 'Movie':
        return 'Movies'
      case 'TV Series':
        return 'TV Series'
      case 'bookmark':
        return ''
      default:
        return ''
    }
  }

  return (
    <CategoryContainer>
      <Title>{determineTitle(params.category)}</Title>

      <MoviesList>
        {params.category === 'trending' ? (
          <>
            <StyledSlider {...sliderSettings}>
              {movieData.map((movie, index) => (
                <Movie key={movie.title} isInSlider={true}>
                  <MoviePic src={movie.thumbnail.trending?.large} />
                  <BookmarkIcon
                    isInSlider={true}
                    onClick={() => handleBookmarkToggle(movie.title)}
                  >
                    <BookmarkSign
                      src={
                        movie.isBookmarked ? BookMarkedFull : BookMarkedEmpty
                      }
                    />
                  </BookmarkIcon>
                  <MovieBox isInSlider={true}>
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
                    <MovieTitle isInSlider={true}>{movie.title}</MovieTitle>
                  </MovieBox>
                </Movie>
              ))}
            </StyledSlider>

            <Title> Recommended For You </Title>
            <MoviesList>
              {moviesData.map((movie, index) => (
                <Movie key={movie.title} isInSlider={false}>
                  <BookmarkIcon
                    onClick={() => handleBookmarkToggle(movie.title)}
                  >
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
          </>
        ) : params.category === 'bookmark' ? (
          <>
            <Title>Bookmarked Movies</Title>
            <MoviesList>
              {movieData
                .filter((movie) => movie.category === 'Movie')
                .map((movie, index) => (
                  <Movie key={movie.title} isInSlider={false}>
                    <BookmarkIcon
                      onClick={() => handleBookmarkToggle(movie.title)}
                    >
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

            <Title>Bookmarked TV Series</Title>
            <MoviesList>
              {movieData
                .filter((movie) => movie.category === 'TV Series')
                .map((movie, index) => (
                  <Movie key={movie.title} isInSlider={false}>
                    <BookmarkIcon
                      onClick={() => handleBookmarkToggle(movie.title)}
                    >
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
          </>
        ) : (
          movieData.map((movie, index) => (
            <Movie key={movie.title} isInSlider={false}>
              <BookmarkIcon onClick={() => handleBookmarkToggle(movie.title)}>
                <BookmarkSign
                  src={movie.isBookmarked ? BookMarkedFull : BookMarkedEmpty}
                />
              </BookmarkIcon>

              <MoviePic src={movie.thumbnail.regular.medium} />
              <MovieBox>
                <MovieInfo>
                  <Info>{movie.year}</Info>
                  <Info>
                    <InfoIcon
                      src={
                        movie.category === 'Movie' ? MovieIcon : TvSeriesIcon
                      }
                    />
                    {movie.category}
                  </Info>
                  <Info>{movie.rating}</Info>
                </MovieInfo>
                <MovieTitle>{movie.title}</MovieTitle>
              </MovieBox>
            </Movie>
          ))
        )}
      </MoviesList>
    </CategoryContainer>
  )
}

const StyledSlider = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
  }
  .slick-slide {
    margin-right: 4rem;
  }
  .slick-list {
    overflow: visible;
  }
`
const responsiveSettings = [
  {
    breakpoint: 1150,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 1.5,
    },
  },
]
// Settings for the slider
const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  arrows: false, // Remove arrows
  vertical: false, // Set to false for a horizontal slider
  responsive: responsiveSettings,
}
