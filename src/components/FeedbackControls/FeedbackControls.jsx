import { StyledFeedbackControls } from './FeedbackControls.styled';
import { Button } from './FeedbackControls.styled';

export const FeedbackControls = ({ riseValue }) => (
  <StyledFeedbackControls>
    <Button type="button" onClick={() => riseValue('good')}>
      Good
    </Button>
    <Button type="button" onClick={() => riseValue('neutral')}>
      Neutral
    </Button>
    <Button type="button" onClick={() => riseValue('bad')}>
      Bad
    </Button>
  </StyledFeedbackControls>
);
