import styled from "styled-components";

export const BannerBackground = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${({src}) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
`
export const ShadowContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.83);
`
export const MainText = styled.p`
  color: #cbcaca;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  font-size: 53px;
  font-weight: bold;
  @media (max-width: 730px) {
    font-size: 47px;
  }
  @media (max-width: 596px) {
    font-size: 40px;
  }
  @media (max-width: 505px) {
    font-size: 30px;
  }
  @media (max-width: 408px) {
    font-size: 27px;
  }
`
export const SubText = styled.p`
  color: #cbcaca;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 25px;
  margin-top: 2rem;
  @media (max-width: 505px) {
    font-size: 22px;
  }
  @media (max-width: 408px) {
    font-size: 20px;
    margin-top: 3rem;
  }
`
export const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 410px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`
export const BtnOrder = styled.button`
  padding: 8px 10px;
  color: #FFFF00;
  border: 1px solid #FFFF00;
  transition: .5s all ease;
  margin: 4rem 1rem;
  width: 150px;
  background: transparent;
  text-transform: uppercase;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
    color: #cbcaca;
    border: 1px solid #cbcaca;
  }

  @media (max-width: 410px) {
    margin: .6rem 0;
    width: 150px;
    font-size: 17px;
  }
`