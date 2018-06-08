// @flow
import React from 'react';
import { connect } from 'react-redux';
import { submitButton } from '../actions/notification-actions';
import Button from './button/Button';
import { buttonPageWrapper } from './ButtonPageContainer.style';
import Box from '../fela/components/Box';
import Text from '../fela/components/Text';

type PropTypes = {
  notification: number,
  submitButton: Function,
};

const ButtonPageContainer = ({ submitButton, notification }: PropTypes) => {

  return (
    <Box>
      <Box>
        <Text>This number should increase on button press: {notification}</Text>
      </Box>
      <Box style={buttonPageWrapper}>
        <Button onClick={() => submitButton()}>hello world</Button>
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
