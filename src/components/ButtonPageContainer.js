// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitButton } from '../actions/notification-actions';
import Button from './Button';
import { buttonPageWrapper } from './ButtonPageContainer.style';
import Box from '../fela/components/Box';
import Text from '../fela/components/Text';

type PropTypes = {
  notification: number,
  actions: Object,
};

const ButtonPageContainer = ({
  submitButton,
  notification,
  changeEmailField,
}) => {
  const submitTest = e => {
    e.preventDefault();
    submitButton(e);
  };

  return (
    <Box>
      <Box>
        <Text>This number should increase on button press: {notification}</Text>
      </Box>
      <Box style={buttonPageWrapper}>
        <Button text="hello world" onClick={submitTest} />
      </Box>
    </Box>
  );
};

export default connect(
  state => ({
    notification: state.notification.notification,
  }),
  { submitButton }
)(ButtonPageContainer);
