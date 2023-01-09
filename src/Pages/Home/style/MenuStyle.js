import styled from "styled-components";

export const ContainerFluid = styled.div`
  width: 100%;
  height: auto;
  background: #f1f5f9;
`
export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`
export const Block = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: auto auto auto;
`
export const Box = styled.div`
  width: 100%;
  height: 400px;
  background: red;
`
export const MenuTitle = styled.div`
  font-size: 42px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 5rem 0 ;
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
  background: red;
  border-radius: 10px;
`
export const ProductName = styled.p`
  
`
export const ProductDesc = styled.p`
  
`
export const ProductImage = styled.img`
  width: 100%;
  height: 320px;
`