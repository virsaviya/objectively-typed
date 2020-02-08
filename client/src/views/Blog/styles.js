import styled from 'styled-components';
import { APP_BAR_HEIGHT } from 'constants/styles';
import background from 'assets/images/comingSoon.jpg';

export const Wrapper = styled.div`
  background-color: lavender;
  min-height: calc(100vh - ${APP_BAR_HEIGHT});
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* width: 2000px;
  height: 2000px; */
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
`;

export const PrettyLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
`;
