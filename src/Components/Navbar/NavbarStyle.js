import styled from "styled-components";

export const ContainerFluid = styled.div`
  background: rgba(0, 0, 0, 0.99);
  padding: 8px 0;
`
export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 991.9px) {
    width: 90%;
  }
`
export const Logo = styled.img`
  width: 150px;
  height: 70px;
`
export const ListGroup = styled.ul`
  display: flex;
  list-style: none;
  text-decoration: none;
  @media (max-width: 991.9px) {
    position: fixed;
    left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: rgba(0, 0, 0, 0.98);
  }
  transition: 1s all ease;
`
export const Phone = styled.div`
  display: none;
  text-decoration: none;
  @media (max-width: 991.9px) {
    display: block;
  }
`
export const ListItem = styled.li`
  color: #FFFF00;
  margin: 2rem 2.7rem 0 0;
  text-transform: uppercase;
  font-size: 15px;
  list-style: none;
  text-decoration: none;
  @media (max-width: 991.9px) {
    margin: 2rem 0 0 0;
  }
`
export const CallButton = styled.a`
  color: #FFFF00;
  text-transform: uppercase;
  margin-top: 1.9rem;
  background: transparent;
  @media (max-width: 991.9px) {
    display: none;
  }
`
export const DesktopIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991.9px) {
    display: none;
  }
`
export const MobileIcons = styled.div`
  display: none;
  margin: 2.5rem 0 0 0;
  @media (max-width: 991.9px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`