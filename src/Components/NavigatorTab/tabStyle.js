import styled from "styled-components";

export const NavTabContainer = styled.div`
  position: relative;
  transition: 1s all ease;
  background: red;
  z-index: 999;
`
export const BtnGroup = styled.div`
  border-radius: 20px;
  background: #f1f5f9;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
    -6px -6px 10px rgba(255, 255, 255, .30),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: absolute; 
  top: 0;
  transition: .5s all ease;
  min-height: 85px;
`
export const TabButton = styled.input`
  width: 130px;
  height: 40px;
  color: #414141;
  text-transform: uppercase;
  outline: none;
  margin: 0 .5rem;
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 20px;
  display: ${({bool})=> bool ? `none` : `block` };
  transition: 1s all ease;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
    -6px -6px 10px rgba(255, 255, 255, .30),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
      -2px -2px 4px rgba(255, 255, 255, .4),
    2px 2px 2px rgba(255, 255, 255, .05),
    2px 2px 4px rgba(0, 0, 0, .1);
  }
  &:active {
    box-shadow: inset -2px -2px 6px rgba(224, 224, 224, 0.6),
      -2px -2px 4px rgba(255, 255, 255, .4),
    2px 2px 2px rgba(255, 255, 255, .05),
    2px 2px 4px rgba(0, 0, 0, .1);
  }
  @media(max-width: 950px){
    margin: .5rem;
  }
`
export const TabButtonArrow = styled.input`
  position: absolute;
  right: 0;
  color: #414141;
  display: block;
  width: 30px;
  height: 90px;
  font-size: 20px;
  font-weight: bold;
  margin-left: 1rem;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 1s all ease;
`