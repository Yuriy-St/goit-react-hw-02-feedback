import PropTypes from 'prop-types';
import { StyledStatistics } from './Statistics.styled';

import StatLine from './StatLine';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StyledStatistics>
    <StatLine>Good: {good}</StatLine>
    <StatLine>Neutral: {neutral}</StatLine>
    <StatLine>Bad: {bad}</StatLine>
    <StatLine>Total: {total}</StatLine>
    <StatLine>Positive feedback: {positivePercentage}%</StatLine>
  </StyledStatistics>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
