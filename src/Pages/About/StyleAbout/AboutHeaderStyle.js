import styled from "styled-components";

export const AboutMainContainer = styled.div`
  background: #f1f5f9;
`
export const PhotoContainer = styled.div`
  background-image: url(${({src}) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  position: relative;
  color: #414141;
`
export const ShadowContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.60);
  @media (max-width: 500px) {
    background: rgba(0, 0, 0, 0.65);
  }
`
export const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
  @media (max-width: 400px) {
    width: 90%;
    margin: 1rem auto;
  }
`
export const BlockDesc = styled.div`
  width: 70%;
  border-radius: 15px;
  height: auto;
  background: rgba(0, 0, 0, 0.82);
  margin: 15% auto;
  text-align: center;
  padding: 1rem 0;
  color: #f4f4f4;
  @media (max-width: 560px) {
    width: 100%;
  }
`
export const BoxDesc = styled.div`
  margin: 2rem 0;
  @media (max-width: 450px) {
    margin: 1rem 0;
  }
`
export const TitleDesc = styled.p`
  text-transform: uppercase;
  font-size: 32px;
  @media (max-width: 690px) {
    font-size: 23px;
  }
`
export const SubDesc = styled.p`

  width: 80%;
  margin: 1rem auto;
  font-size: 18px;
  line-height: 2rem;
  @media (max-width: 690px) {
    font-size: 16px;
    line-height: 23px;
  }
`

// Statistic style

export const StatisticContainer = styled.div`
  width: 80%;
  margin: 2rem auto 0 auto;
`
export const BlockStatistic = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 5rem 0 7rem 0;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 450px) {
    padding: 2rem 0 3rem 0;
  }
`
export const BoxStatistic = styled.div`
  width: 100%;
  height: 200px;
  margin: 0 1rem;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
    -6px -6px 10px rgba(255, 255, 255, .5),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: .5s all ease;

  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
      -2px -2px 4px rgba(255, 255, 255, .4),
    2px 2px 2px rgba(255, 255, 255, .05),
    2px 2px 4px rgba(0, 0, 0, .1);
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: 50%;
    margin: 2rem 0;
  }
  @media (max-width: 600px) {
    width: 80%;
    margin: 2rem 0;
  }
  @media (max-width: 410px) {
    width: 100%;
    margin: 2rem 0;
  }
`
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Svg = styled.div`
  width: 50px;
  height: 50px;
`
export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`
export const UpText = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 22px;
`
export const DownText = styled.div`
  color: #9f9f9f;
`

// Gallery style

export const GalleryMainContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: auto;
  padding: 2rem 0 8rem 0;
  overflow: hidden;
  @media(max-width: 1120px){
    width: 95%;
  }
`
export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
    -6px -6px 10px rgba(255, 255, 255, .5),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);
  @media(max-width: 950px){
    flex-direction: column;
    justify-content: start;
  }
  @media(max-width: 475px){
    padding: 1.5rem 0 0 0;
  }
`
export const BlockItem = styled.div`
  width: 50%;
  height: auto;
  margin: 0 1rem;
  @media(max-width: 1010px){
    margin: 0 .5rem;
  }
  @media(max-width: 900px){
    width: 80%;
  }
  @media(max-width: 577px){
    width: 100%;
  }
`
export const SwiperImage = styled.div`

`
export const AdvantagesArea = styled.div`

`

export const ImageItem = styled.img`
  width: 100%;
  margin: 0 1rem;
  border-radius: 20px;
`
export const PathSwiper = styled.div`
    padding: 0 2rem;
  width: 100%;
  @media(max-width: 475px){
    margin: 0 0 0 -1rem;
  }
`
export const MainTitle = styled.p`
  width: 100%;
  @media(max-width: 950px){
    margin-top: 2rem;
  }
`
export const BlockQuotes = styled.div`
  width: 100%;
  height: auto;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: auto auto;
  padding: 0 8px;
  @media(max-width: 995px){
    margin-top: 1.5rem;
  }
`
export const TextArea = styled.div`
  padding: 1rem;
`
export const Quotes = styled.div`
  margin: 10px 20px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: -25px;
    top: 0;
    background-image:url(${({icon})=>icon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
  }
  @media(max-width: 450px){
    font-size: 14px;
  }
`