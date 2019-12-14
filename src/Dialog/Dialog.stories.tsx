import React, { useState } from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Dialog from './Dialog';

export default {
  title: 'components|Dialog',
  component: Dialog,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  decorators: [withKnobs],
};

export const dialog = () => {
  const title = text('title', '결제성공');
  const description = text('description', '결제가 성공적으로 이루어졌습니다.');
  const visible = boolean('visible', true);
  const confirmText = text('confirmText', '확인');
  const cancellable = boolean('cancellable', true);
  const cancelText = text('cancelText', '취소');

  return (
    <Dialog
      title={title}
      description={description}
      visible={visible}
      confirmText={confirmText}
      cancellable={cancellable}
      cancelText={cancelText}
    />
  );
};

dialog.story = {
  name: 'Default',
};

export const cancellable = () => {
  const [visible, setVisible] = useState(true);
  const onCancel = () => {
    setVisible(false);
  };
  return (
    <Dialog
      title='포스트 삭제'
      description='포스트를 정말로 삭제하시겠습니까?'
      visible={visible}
      confirmText='삭제'
      cancellable
      onCancel={onCancel}
    />
  );
};

export const customContent = () => {
  return (
    <Dialog visible={true} hideButtons>
      Custom Text
    </Dialog>
  );
};
