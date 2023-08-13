import PropTypes from 'prop-types';
import Subtitle from 'components/Subtitle';
import { StyledSection } from './Section.styled';

const Section = ({ title, children }) => (
  <StyledSection>
    <Subtitle>{title}</Subtitle>
    {children}
  </StyledSection>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
