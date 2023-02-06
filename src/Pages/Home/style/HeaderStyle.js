import styled from "styled-components";

export const BannerBackground = styled.div`
  width: 100%;
  height: 650px;
  background-image: url(${({src}) => src});
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  @media (max-width: 400px) {
    background-image: url(${({mobile}) => mobile});
    background-size: cover;
    background-position: left;
    background-attachment: fixed;
  }
`
export const ShadowContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.63);
  @media (max-width: 500px) {
    background: rgba(0, 0, 0, 0.65);
  }
`
export const MainText = styled.p`
  color: #cbcaca;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  font-size: 53px;
  font-weight: bold;
  text-transform: uppercase;
  @media (max-width: 730px) {
    font-size: 47px;
  }
  @media (max-width: 650px) {
    font-size: 40px;
  }
  @media (max-width: 575px) {
    font-size: 30px;
  }
  @media (max-width: 420px) {
    font-size: 27px;
    text-align: center;
  }
`
export const SubText = styled.p`
  color: #cbcaca;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 25px;
  margin-top: 4rem;
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
export const BtnOrder = styled.a`
  padding: 10px 20px;
  color: #FFFF00;
  border: 1px solid #FFFF00;
  transition: .2s all ease;
  margin: 4rem 1rem;
  min-width: 150px;
  background: transparent;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
    color: #cbcaca;
    border: 1px solid #cbcaca;
  }

  @media (max-width: 410px) {
    margin: 1rem 0;
    width: 70%;
    font-size: 14px;
  }
`