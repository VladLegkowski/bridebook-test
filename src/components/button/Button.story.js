import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const defaultStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginTop: '20px',
};

storiesOf('Button', module)
  .add('types', () => (
    <div style={defaultStyle}>
      <Button type="primary">Sign Up for free</Button>
      <Button type="secondary">Sign Up for free</Button>
      <Button type="default">Sign Up for free</Button>
    </div>
  ))
  .add('disabled', () => (
    <div style={defaultStyle}>
      <Button type="primary" disabled>Sign Up for free</Button>
      <Button type="secondary" disabled>Sign Up for free</Button>
      <Button type="default" disabled>Sign Up for free</Button>
    </div>
  ))
  .add('sizes', () => (
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'baseline', marginTop: '20px' }}>
        <Button type="primary" size="tiny">Sign Up for free</Button>
        <Button type="secondary" size="normal">Sign Up for free</Button>
        <Button type="default" size="big">Sign Up for free</Button>
      </div>
  ))
  .add('full width', () => (
    <div>
      <Button device="mobile" type="primary">Sign Up for free Full width</Button>
    </div>
  ))
  .add('with shadow', () => (
    <div>
      <Button type="primary" size="big" shadow>Sign Up for free With Shadow</Button>
    </div>
  ));
