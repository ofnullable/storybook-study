import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button/Button';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

export default {
  title: 'components|ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs],
};

export const buttonGroup = () => {
  const direction = radios('direction', { Row: 'row', Column: 'column' }, 'row');
  const rightAlign = boolean('rightAlign', false);
  const gutter = text('gutter', '15px');

  return (
    <ButtonGroup direction={direction} rightAlign={rightAlign} gutter={gutter}>
      <Button>확인</Button>
      <Button theme='tertiary'>취소</Button>
    </ButtonGroup>
  );
};

buttonGroup.story = {
  name: 'Default',
};

export const rightAlign = () => {
  return (
    <ButtonGroup rightAlign>
      <Button theme='tertiary'>취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const column = () => {
  return (
    <ButtonGroup direction='column' gutter='1rem'>
      <Button>Click me!</Button>
      <Button theme='tertiary'>Click me!</Button>
    </ButtonGroup>
  );
};
