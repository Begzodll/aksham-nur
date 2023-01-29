import styled from "styled-components";

export const ContainerFluid = styled.div`
  width: 100%;
  height: auto;
  background: #f1f5f9;
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 150px;
  @media(max-width:1300px){
    padding: 0 50px;
  }
  @media(max-width:1060px){
    padding: 0 30px;
  }
  @media(max-width:1024px){
    padding: 0 100px;
  }
  @media(max-width:860px){
    padding: 0 50px;
  }
  @media(max-width:757px){
    padding: 0 20px;
  }
  @media(max-width:590px){
    padding: 0 70px;
  }
  @media(max-width:430px){
    padding: 0 20px;
  }
;
`
export const Block = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: auto auto auto;
  @media(max-width:1024px){
    grid-template-columns: auto auto;
  }
  @media(max-width:590px){
    grid-template-columns:  auto;
  }
`
export const Box = styled.div`
  width: 100%;
  height: 400px;
`
export const MenuTitle = styled.div`
  font-size: 42px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
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
export const Card = styled.div`
  border-radius: 10px;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
  -6px -6px 10px rgba(255, 255, 255, .5),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);
  width: 100%;
  height: auto;
  cursor: pointer;
  padding: 0 1rem;
  transition: .2s all ease;
  &:hover{
    box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
      -2px -2px 4px rgba(255, 255, 255, .4),
    2px 2px 2px rgba(255, 255, 255, .05),
    2px 2px 4px rgba(0, 0, 0, .1);
  }
`
export const SizeCard = styled.div`
  padding: 1rem .5rem;
`
export const SubTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
`
export const ProductName = styled.p`

`
export const ProductDesc = styled.p`
  margin: 1rem 0;
`
export const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  border-bottom: 1px solid #ccc;
`
export const BtnGroup = styled.div`
  display: flex;
`