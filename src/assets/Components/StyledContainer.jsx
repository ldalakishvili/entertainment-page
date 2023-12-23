import styled from 'styled-components'

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 3.6rem;
  @media (max-width: 1150px) {
    margin-right: 2.3rem;
  }

  @media (max-width: 767px) {
    margin-right: 1.6rem;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: -0.5px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 2.5rem;
  @media (max-width: 767px) {
    font-size: 2rem;
    line-height: 25px;
  }
`

export const MoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 3.2rem;
  column-gap: 4rem;
  width: 100%;
  align-items: center;
  /* justify-content: space-between; */
  @media (max-width: 1150px) {
    row-gap: 2.4rem;
    column-gap: 2.9rem;
  }

  @media (max-width: 767px) {
    column-gap: 1.5rem;
  }
`

export const Movie = styled.div`
  max-width: ${({ isInSlider }) => (isInSlider ? '47rem' : '28rem')};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  @media (max-width: 1150px) {
    max-width: ${({ isInSlider }) => (isInSlider ? '47rem' : '22rem')};
  }
  @media (max-width: 767px) {
    max-width: ${({ isInSlider }) => (isInSlider ? '24rem' : '16.4rem')};
  }
`

export const MoviePic = styled.img`
  width: 100%;
  height: 174px;
  border-radius: 0.9rem;
  @media (max-width: 767px) {
    height: 11rem;
  }
`

export const MovieBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 13.7rem;
  width: 100%;
  ${({ isInSlider }) =>
    isInSlider
      ? 'position: absolute; bottom:2.4rem;  margin-left:2.4rem; max-width:15rem;'
      : ''}
  @media (max-width: 767px) {
    max-width: 10.5rem;
    ${({ isInSlider }) =>
      isInSlider
        ? 'position: absolute; bottom:1.6rem;  margin-left:1.6rem; max-width:13rem;'
        : ''}
  }
`

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 8px;
  width: 100%;
`
export const Info = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 300;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  white-space: nowrap;
  color: rgba(255, 255, 255, 1);
  &:not(:first-child)::before {
    content: '•'; /* Unicode character for bullet point */
    margin-right: 4px; /* Adjust the spacing as needed */
  }
`
export const InfoIcon = styled.img`
  width: 12px;
  height: 12px;
`
export const MovieTitle = styled.h2`
  font-size: ${({ isInSlider }) => (isInSlider ? '24px' : '18px')};
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;

  @media (max-width: 767px) {
    font-size: ${({ isInSlider }) => (isInSlider ? '15px' : '14px')};
  }
`

export const BookmarkIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px;
  border-radius: 50%;
  background-color: rgba(16, 20, 30, 1);
  position: absolute;
  top: 16px;
  right: ${({ isInSlider }) => (isInSlider ? `24px` : `16px`)};
  cursor: pointer;
`
export const BookmarkSign = styled.img`
  width: 11px;
  height: 14px;
`
