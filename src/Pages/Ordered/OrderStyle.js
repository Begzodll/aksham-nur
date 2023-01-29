import styled from "styled-components";

export const OrderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 4rem 0;
  background: #f1f5f9;
`

export const HeaderText = styled.p`
    text-align: center; 
    padding: 3rem 0 3rem 0 ;
    font-size:40px;
  text-transform: uppercase;
  color: #414141;
  @media(max-width: 680px){
    font-size: 28px;
    font-weight: bold; 
  }
`
export const CardGroup = styled.div`
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
export const CardItem = styled.div`
  border-radius: 10px;
  width: 100%;
  height: auto;
  cursor: pointer;
  padding: 0 1rem;
  transition: .2s all ease;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
    -6px -6px 10px rgba(255, 255, 255, .5),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);
  &:hover{
    box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
      -2px -2px 4px rgba(255, 255, 255, .4),
    2px 2px 2px rgba(255, 255, 255, .05),
    2px 2px 4px rgba(0, 0, 0, .1);
  }
  &:active{
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
      inset -2px -2px 4px rgba(255, 255, 255, .5),
    inset 2px 2px 2px rgba(255, 255, 255, .075),
    inset 2px 2px 4px rgba(0, 0, 0, .15);
  }
`