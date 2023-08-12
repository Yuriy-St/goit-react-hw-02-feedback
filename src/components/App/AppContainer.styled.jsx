import styled from '@emotion/styled';
import { container } from 'components/Base/Container.styled';
import { space } from 'constants/theme';

const AppContainer = styled.div`
  ${container}
  label: appContainer;
  padding-top: ${space(10)};
  padding-bottom: ${space(10)};
`;

export default AppContainer;
