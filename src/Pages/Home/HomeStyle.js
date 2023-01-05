import styled from "styled-components";

export const BannerBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${({src}) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`
export const ShadowContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.75);
`
