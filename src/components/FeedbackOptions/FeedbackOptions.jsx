import PropTypes from 'prop-types';

import { StyledFeedbackOptions } from './FeedbackOptions.styled';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options = [], onLeaveFeedback }) => (
  <StyledFeedbackOptions>
    {options.map(option => (
      <Button
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    ))}
  </StyledFeedbackOptions>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
