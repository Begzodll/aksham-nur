import styled from "styled-components";

export const ContainerFluid = styled.div`
  height: 100vh;
`
export const Flex = styled.div`
  display: flex;
`
export const BoxOne = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${params => params.back});
  background-repeat: no-repeat;
`
export const Card = styled.div`
  width: 50%;
  height: 400px;
  background: transparent;
  box-shadow: 2px 3px 9px 3px #e1e1e1;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`
export const BoxTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100vh;
  z-index: 99;
`
export const Logo = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  background: #414141;
  display: flex;
  justify-content: center;
  padding: 8px;
  border-bottom: 5px solid #e2e8f0;

  border-left: 5px solid #e2e8f0;
  border-right: 5px solid #e2e8f0;
`
export const LogoImg = styled.img` 
  width: 90%;
  height:50%;
  margin-top: 15%;
`
export const Name = styled.input`
  width: 70%;
  padding: 8px 10px;
  outline: none;
  margin-top:3rem ;
  background: transparent;
  border: none;
  color: #414141;
  border-bottom: 2px solid #ccc;
`
export const Password = styled.input`
  width: 70%;
  padding: 8px 10px;
  outline: none;
  border: none;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  background: transparent;
  border: none;
  color: #414141;
  border-bottom: 2px solid #ccc;
`
export const Submit = styled.button`
    width: 50%;
    height: 40px;
  text-transform: uppercase;
    background: transparent;
  outline: none;
  border: 1px solid #414141;
  color:#414141;
  &:hover{
    background: #757575;
    transition: .5s all ease;
  }
`