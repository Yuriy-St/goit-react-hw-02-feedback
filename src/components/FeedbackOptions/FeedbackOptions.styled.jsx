import styled from '@emotion/styled';
import { color, space } from 'constants/theme';

export const StyledFeedbackOptions = styled.div(`
	label: FeedbackOptions;
	display: flex;
	column-gap: ${space(4)};
`);

export const Button = styled.button(`
	border: 2px solid ${color.grey_400};
	border-radius: 4px;
	padding: 4px 8px;
	font: inherit;
	font-size: ${space(4)};
	font-weight: 700;
	line-height: 1em;
	text-transform: capitalize;

	&:hover {
		background-color: ${color.grey_200};
		box-shadow: 0 0 ${space(3)} ${color.grey_400};
	}

	&:active {
		background-color: ${color.grey_300};
		box-shadow: none;
	}
`);
