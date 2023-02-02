import styled from "styled-components";

export const OrderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 4rem 0;
  background: #f1f5f9;
`
export const HeaderText = styled.p`
  text-align: center;
  padding: 3rem 0 3rem 0;
  font-size: 40px;
  text-transform: uppercase;
  color: #414141;
  @media (max-width: 680px) {
    font-size: 28px;
    font-weight: bold;
  }
  @media (max-width: 350px) {
    font-size: 20px;
    font-weight: bold;
  }
`
export const CardGroup = styled.div`
  display: grid;
  grid-gap: 40px;
  justify-content: center;
  align-items: center;
  grid-template-columns: 33% 33% 33%;
  @media (max-width: 1200px) {
    grid-gap: 10px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 48% 48%;
  }
  @media (max-width: 590px) {
    grid-template-columns:  100%;
  }
`
export const CardItem = styled.div`
  border-radius: 10px;
  width: 100%;
  min-height: 535px;
  cursor: pointer;
  padding:  1rem;
  transition: .2s all ease;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
    -6px -6px 10px rgba(255, 255, 255, .5),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);

  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
      -2px -2px 4px rgba(255, 255, 255, .4),
    2px 2px 2px rgba(255, 255, 255, .05),
    2px 2px 4px rgba(0, 0, 0, .1);
  }

  &:active {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
      inset -2px -2px 4px rgba(255, 255, 255, .5),
    inset 2px 2px 2px rgba(255, 255, 255, .075),
    inset 2px 2px 4px rgba(0, 0, 0, .15);
  }
`
export const NeonBtn = styled.button`
  width: 50%;
  height: 30px;
  transform: translate(50%, 50%);
  outline: none;
  color: #414141;
  font-size: 14px;
  border: none;
  background: transparent;
  text-transform: uppercase;
  border-radius: 30px;
  transition: .2s ease-in-out;
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
  @media (max-width: 1101px) {
    font-size: 14px;
    margin:.5rem 1rem .5rem 0 ;
  }
`
export const SizeCards = styled.div`
    margin: 1rem;
`
export const BillField = styled.div`
  height: auto;
  margin: 4rem 0 0 0;
  padding: 1rem;
  @media(max-width: 420px){
    width: 100%;
    padding: 0;
  }
`
export const InputGroup = styled.div`
  width: 55%;
  height: auto;
  padding: 2rem 2rem;
  border-radius: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
    -6px -6px 10px rgba(255, 255, 255, .5),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);
  @media(max-width: 1200px){
    flex-direction: column;
  }
  @media(max-width: 700px){
    width: 80%;
    padding: 2rem 0;
  }
  @media(max-width: 420px){
    width: 100%;
    padding: 2rem 0;
  }
`
export const InputItem = styled.input`
  width: 100%;
    margin: 0 1rem;
  border:none;
  outline: none;
  padding: 10px 1rem;
  border-radius: 10px;
  cursor: pointer;
  color: #414141;
  background: transparent;
  @media(max-width: 1200px){
    width: 80%;
    margin: 1rem 0;
  }
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
    -6px -6px 10px rgba(255, 255, 255, .5),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);
`