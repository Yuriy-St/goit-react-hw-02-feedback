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

  countTotalFeedback() {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  }

  render() {
    const { state } = this;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <AppContainer>
        <Subtitle>Please leave feedback</Subtitle>
        <FeedbackControls riseValue={this.riseValue} />
        <Subtitle>Statistics</Subtitle>
        <Line>Good: {state.good}</Line>
        <Line>Neutral: {state.neutral}</Line>
        <Line>Bad: {state.bad}</Line>
        <Line>Total: {total}</Line>
        <Line>Positive feedback: {positivePercentage}%</Line>
      </AppContainer>
    );
  }
}
