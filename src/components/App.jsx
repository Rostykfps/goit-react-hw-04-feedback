import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  btnOptions = ['Good', 'Neutral', 'Bad'];

  handleFeedbackClick = event => {
    const currentFeedback = event.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [currentFeedback]: prevState[currentFeedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalFeedbacks = Object.values(this.state);
    return totalFeedbacks.reduce((total, feedback) => total + feedback);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    return Math.round((good / totalFeedbacks) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.btnOptions}
            onLeaveFeedback={this.handleFeedbackClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {good !== 0 || neutral !== 0 || bad !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
