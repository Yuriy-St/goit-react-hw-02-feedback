import PropTypes from 'prop-types';
import { StyledSubtitle } from './Subtitle.styled';

const Subtitle = ({ children }) => <StyledSubtitle>{children}</StyledSubtitle>;

Subtitle.propTypes = {
  children: PropTypes.node,
};

export default Subtitle;
