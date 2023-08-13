import PropTypes from 'prop-types';
import { StyledLine } from './StatLine.styled';

const StatLine = ({ children }) => <StyledLine>{children}</StyledLine>;

StatLine.propTypes = {
  children: PropTypes.node,
};

export default StatLine;
