import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Container } from './App.styled';

const App = () => {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const btnOptions = ['Good', 'Neutral', 'Bad'];

  const handleFeedbackClick = event => {
    const currentFeedback = event.target.textContent.toLowerCase();
    switch (currentFeedback) {
      case 'good':
        setgood(prevState => prevState + 1);
        break;
      case 'neutral':
        setneutral(prevState => prevState + 1);
        break;
      case 'bad':
        setbad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const totalFeedbacks = good + neutral + bad;
    return totalFeedbacks;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = countTotalFeedback();
    return Math.round((good / totalFeedbacks) * 100);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={btnOptions}
          onLeaveFeedback={handleFeedbackClick}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {good !== 0 || neutral !== 0 || bad !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Container>
  );
};

export default App;
