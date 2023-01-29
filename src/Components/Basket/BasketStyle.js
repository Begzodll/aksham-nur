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
export const CountProduct = styled.div`
  position: absolute;
  left: -.8rem;
  top: -.8rem;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  box-shadow: -6px -6px 14px transparent,
    -6px -6px 10px transparent,
  inset 0px 0px 8px rgba(255, 255, 255, .075),
  inset 0px 0px 10px rgba(0, 0, 0, .15);

  text-align: center;
  //padding: 3px 0;
  font-size: 20px;
  color: #818181;
`