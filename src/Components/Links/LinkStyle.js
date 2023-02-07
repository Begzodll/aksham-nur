import styled from "styled-components";

export const MainContainerLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Icon = styled.a`
  margin: 0 9px;
  svg{
    path{
      fill: #FFF000;
      &:hover{
        cursor: pointer;
        fill: rgba(86, 113, 253, 0.64);
      }
    }
  }
  @media (max-width: 991.9px) {
    margin: 0 15px;
  }
`