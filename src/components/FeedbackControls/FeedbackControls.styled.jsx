import styled from '@emotion/styled';
import { color, space } from 'constants/theme';

export const StyledFeedbackControls = styled.div(`
	display: flex;
	column-gap: ${space(4)};
	margin-bottom: ${space(6)}
`);

export const Button = styled.button(`
	border: 2px solid ${color.grey_400};
	border-radius: 4px;
	padding: 4px 8px;
	font: inherit;
	font-weight: 700;
	line-height: 1em;

	&:hover {
		background-color: ${color.grey_200};
		box-shadow: 0 0 ${space(3)} ${color.grey_400};
	}

	&:active {
		background-color: ${color.grey_300};
		box-shadow: 0 0 ${space(2)} ${color.grey_400};
	}
`);
