import styled from "styled-components";

export const ContainerGetLocation = styled.div`
  width: 100%;
  height: 100%;
  background: #f1f5f9;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`
export const ModalBlock = styled.div`
  width: 80%;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
    -6px -6px 10px rgba(255, 255, 255, .5),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);
`
export const ModalCard = styled.div`
  
`
export const MapStyle = styled.div`
  width: 100%;
  margin: 2rem auto;
  padding: 1.5rem;
`
export const LocationBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 1rem;
  margin: 1.5rem auto;
  border: none;
  outline: none;
  background: transparent;
  color: #414141;
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
    -6px -6px 10px rgba(255, 255, 255, .5),
  6px 6px 8px rgba(255, 255, 255, .075),
  6px 6px 10px rgba(0, 0, 0, .15);
  border-radius: 20px;
`