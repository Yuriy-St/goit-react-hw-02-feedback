import { Component } from 'react';
import AppContainer from './AppContainer.styled';
import { Subtitle } from 'components/Subtitle/Subtitle';
import { FeedbackControls } from 'components/FeedbackControls/FeedbackControls';
import { Line } from 'components/Line/Line';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  riseValue = value =>
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });

  render() {
    return (
      <AppContainer>
        <Subtitle>Please leave feedback</Subtitle>
        <FeedbackControls riseValue={this.riseValue} />
        <Subtitle>Statistics</Subtitle>
        <Line>Good: {this.state.good}</Line>
        <Line>Neutral: {this.state.neutral}</Line>
        <Line>Bad: {this.state.bad}</Line>
      </AppContainer>
    );
  }
}
