import styled from 'styled-components'
import basketImg from '../../Assets/svg/basket.png'
export const BasketMainContainer = styled.div`
  width: 65px;
  height: 65px;
  position: fixed;
  z-index: 5;
  bottom: 0;
  margin: 1rem;
  border-radius: 50%;
  background: url(${basketImg});
  background-size: cover;
  box-shadow: -6px -6px 14px transparent,
    -6px -6px 10px transparent,
  inset 0px 0px 8px rgba(255, 255, 255, .075),
  inset 0px 0px 10px rgba(0, 0, 0, .15);
`