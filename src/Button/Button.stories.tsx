/** @jsx jsx */
import Button from './Button';
import { jsx, css } from '@emotion/core';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'components|Button',
  component: Button,
  decorators: [withKnobs],
};

export const button = () => {
  const label = text('children', 'BUTTON');
  const size = select('size', ['small', 'medium', 'big'], 'medium');
  const theme = select('theme', ['primary', 'secondary', 'tertiary'], 'primary');
  const disabled = boolean('disabled', false);
  const width = text('width', '');

  return (
    <Button size={size} theme={theme} disabled={disabled} width={width} onClick={action('onClick')}>
      {label}
    </Button>
  );
};

button.story = {
  name: 'Default',
};

export const primaryButton = () => {
  return <Button>PRIMARY</Button>;
};

export const secondaryButton = () => {
  return <Button theme='secondary'>SECONDARY</Button>;
};

export const tertiaryButton = () => {
  return <Button theme='tertiary'>TERTIARY</Button>;
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div>Small</div>
        <Button size='small'>SMALL BUTTON</Button>
      </div>
      <div>
        <div>Medium</div>
        <Button>MEDIUM BUTTON</Button>
      </div>
      <div>
        <div>Big</div>
        <Button size='big'>BIG BUTTON</Button>
      </div>
    </div>
  );
};

export const disabled = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button disabled>DISABLED</Button>
      </div>
      <div>
        <Button disabled theme='secondary'>
          DISABLED
        </Button>
      </div>
      <div>
        <Button disabled theme='tertiary'>
          DISABLED
        </Button>
      </div>
    </div>
  );
};

export const customWidth = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <Button width='10rem'>10REM</Button>
      </div>
      <div>
        <Button width='50%'>50%</Button>
      </div>
      <div>
        <Button width='100%'>100%</Button>
      </div>
    </div>
  );
};
