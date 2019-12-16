import React, { useState } from 'react';
import Checkbox from './Checkbox';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'components|Checkbox',
  component: Checkbox,
  decorators: [withKnobs],
};

export const checkbox = () => {
  const checkedId = text('id', 'sample-checked-checkbox');
  const uncheckedId = text('id', 'sample-unchecked-checkbox');
  const checked = boolean('checked', false);
  const theme = select('theme', ['primary', 'secondary', 'tertiary'], 'primary');

  return (
    <div>
      <Checkbox id={checkedId} checked={checked} theme={theme} onChange={action('onChange')}>
        체크박스
      </Checkbox>
      <Checkbox id={uncheckedId} checked={!checked} theme={theme} onChange={action('onChange')}>
        체크박스
      </Checkbox>
    </div>
  );
};

checkbox.story = {
  name: 'Default',
};

export const primary = () => {
  const [primaryChecked, setPrimaryChecked] = useState(false);
  const changeHandler = () => {
    setPrimaryChecked(prev => !prev);
  };
  return (
    <Checkbox id="primary" checked={primaryChecked} onChange={changeHandler}>
      PRIMARY
    </Checkbox>
  );
};

export const secondary = () => {
  const [secondaryChecked, setSecondaryChecked] = useState(false);
  const changeHandler = () => {
    setSecondaryChecked(prev => !prev);
  };
  return (
    <Checkbox id="secondary" theme="secondary" checked={secondaryChecked} onChange={changeHandler}>
      SECONDARY
    </Checkbox>
  );
};

export const tertiary = () => {
  const [checked, setChecked] = useState(false);
  const changeHandler = () => {
    setChecked(prev => !prev);
  };
  return (
    <Checkbox id="tertiary" theme="tertiary" checked={checked} onChange={changeHandler}>
      TERTIARY
    </Checkbox>
  );
};

export const disabled = () => {
  return (
    <div>
      <Checkbox id="primary-disabled" theme="primary" checked={true} disabled>
        PRIMARY DISABLED
      </Checkbox>
      <Checkbox id="secondary-disabled" theme="secondary" checked={true} disabled>
        SECONDARY DISABLED
      </Checkbox>
      <Checkbox id="tertiary-disabled" theme="tertiary" checked={true} disabled>
        TERTIARY DISABLED
      </Checkbox>
    </div>
  );
};
