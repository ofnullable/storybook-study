import React from 'react';
import Hello from './Hello';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import mdx from './Hello.mdx';

export default {
  title: 'components|basic/Hello',
  component: Hello,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '"안녕하세요"를 보여주는 컴포넌트',
    docs: {
      page: mdx,
    },
  },
};

export const hello = () => {
  const size = text('size', 'big', 'Group 1');
  const name = text('name', 'Storybook');
  return <Hello name={name} size={size} onHello={action('onHello')} onBye={action('onBye')} />;
};

hello.story = {
  name: 'Default',
};

export const standard = () => <Hello name='Storybook' />;
export const big = () => <Hello name='Storybook' size='big' />;
