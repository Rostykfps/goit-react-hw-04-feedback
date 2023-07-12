import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Button, List } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(btnName => {
        return (
          <li key={nanoid()}>
            <Button type="button" onClick={onLeaveFeedback}>
              {btnName}
            </Button>
          </li>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
