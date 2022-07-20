import styled from 'styled-components';

import { APP_BAR_HEIGHT } from 'constants/styles';

export default styled.div`
  min-height: calc(100vh - ${APP_BAR_HEIGHT});
  margin-top: ${APP_BAR_HEIGHT};
`;
