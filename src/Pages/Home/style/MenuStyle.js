import styled from "styled-components";

export const ContainerFluid = styled.div`
  width: 100%;
  height: auto;
  background: #0f172a;
`
export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`
export const MenuHeaderText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  text-align: center;
  font-weight: bold;
  padding-top: 2rem;
  color: #cbcaca;
  margin-bottom: 4rem;
  @media (max-width: 1024px) {
    font-size: 35px;
  }
  @media (max-width: 767px) {
    font-size: 28px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }

`
export const Display = styled.div`
  //display: grid;
  //grid-template-columns:  auto auto auto;
  //grid-gap: 80px 40px;
  //display: flex;
  //flex-wrap: wrap;
  //justify-content: space-around;
`
