import styled from '@emotion/styled';
import { space } from 'constants/theme';

export const StyledSection = styled.section(`
	label: Section;
	margin-bottom: ${space(8)};
	display: flex;
	flex-direction: column;
	row-gap: ${space(6)};
	font-size: ${space(5)};
`);
