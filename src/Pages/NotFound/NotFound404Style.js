import styled from "styled-components";

export const MainContainerNotFound = styled.div`
  width: 100%;
  padding: 10% 0;
  color: #414141;
  background: #f1f5f9;
`
export const Block = styled.div`
  width: 50%;
  @media(max-width: 812px){
    width: 80%;
  }
  @media(max-width: 530px){
    width: 90%;
  }
  margin: 0 auto;
  height: auto;
  padding: 0 0 3rem 0;
  background: transparent;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
   box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
       -6px -6px 10px rgba(255, 255, 255, .5),
       6px 6px 8px rgba(255, 255, 255, .075),
       6px 6px 10px rgba(0, 0, 0, .15);
  border-radius: 1rem;
  
`
export const MainText = styled.p`
    margin: 0 0 1rem 0;
`
export const SubText = styled.p`
`
export const BackBtn = styled.button`
  padding: 8px 2.5rem;
  margin: 2rem 0 0 0;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
   box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
       -6px -6px 10px rgba(255, 255, 255, .5),
       6px 6px 8px rgba(255, 255, 255, .075),
       6px 6px 10px rgba(0, 0, 0, .15);
   transition: .2s all ease;
   &:hover{
       box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
           -2px -2px 4px rgba(255, 255, 255, .4),
           2px 2px 2px rgba(255, 255, 255, .05),
           2px 2px 4px rgba(0, 0, 0, .1);
   }
`
export const CodeStatus = styled.p`
  margin: 1rem 0;
  font-size: 80px;
  
`

