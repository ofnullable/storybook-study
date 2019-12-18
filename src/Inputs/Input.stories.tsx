import React from 'react';
import Input from './Input';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'components|Input',
  component: Input,
  decorators: [withKnobs],
};

export const input = () => {
  const type = select('id', ['text', 'email', 'password'], 'text');
  const value = text('value', '');
  const theme = select('theme', ['primary', 'secondary'], 'primary');

  return (
    <div>
      <Input
        id="primary"
        label="input"
        type={type}
        value={value}
        theme={theme}
        onChange={action('onChange')}
      />
      <Input
        id="secondary"
        label="input"
        type={type}
        value={value}
        theme="secondary"
        onChange={action('onChange')}
      />
    </div>
  );
};

input.story = {
  name: 'Default',
};

export const disabled = () => {
  return <Input id="disabled" label="disabled" value="" onChange={() => {}} disabled />;
};
