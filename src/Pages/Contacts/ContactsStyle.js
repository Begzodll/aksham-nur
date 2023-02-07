import styled from "styled-components";

export const MainContactsContainer = styled.div`
  width: 100%;
  height: auto;
  background: #f1f5f9;
  padding: 6rem 0;
  color: #414141;
  @media (max-width: 991.9px) {
    height: 100vh;
  }
`
export const Block = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  //background: transparent;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
    -6px -6px 10px rgba(255, 255, 255, .5),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);
  border-radius: 20px;
  @media (max-width: 991.9px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 991.9px) {
    width: 90%;
    height: 0;
  }
`
export const Box = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 991.9px) {
    width: 90%;
    height: 0;
  }
  @media (max-width: 530px) {
    width: 100%;
  }
`
export const TextBlock = styled.div`
  width: 90%;
  height: 90%;
  margin: 1.5rem auto;
`
export const MainTitle = styled.p`
  font-size: 18px;
  text-transform: uppercase;
`
export const SubTexts = styled.div`
  margin: 1rem 0;
  height: 200px;
`
export const ItemSection = styled.div`
  margin: 1.5rem 0;
`
export const TitleSpan = styled.span`
  font-weight: bold;
`
export const SubTitleSpan = styled.span`
  text-transform: uppercase;
  color: #276af8;
`
export const MapStyle = styled.div`
  width: 100%;
  @media (max-width: 991.9px) {
    margin-top: 18rem;
  }

`