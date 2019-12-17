/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, css } from '@emotion/core';
import { useTransition, animated } from 'react-spring';

import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';

export type DialogProps = {
  /** 다이얼로그가 표시될 지 여부 */
  visible: boolean;
  /** 다이얼로그의 타이틀 */
  title?: string;
  /** 다이얼로그의 내용 */
  description?: string;
  /** 버튼을 표시할 지 여부 */
  hideButtons?: boolean;
  /** 취소할 수 있는 다이얼로그인지 여부 */
  cancellable?: boolean;
  /** 취소 버튼의 텍스트 */
  cancelText: string;
  /** 확인 버튼의 텍스트 */
  confirmText: string;
  /** 취소버튼 클릭 시 이벤트 핸들러 */
  onCancel?: () => void;
  /** 확인버튼 클릭 시 이벤트 핸들러 */
  onConfirm?: () => void;
  /** 다이얼로그 내용 */
  children?: React.ReactNode;
};

const Dialog = ({
  visible,
  title,
  description,
  hideButtons,
  cancellable,
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
  children,
}: DialogProps) => {
  const fadeTransition = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const slideUpTransition = useTransition(visible, null, {
    from: { transform: `translateY(200px) scale(0.8)`, opacity: 0 },
    enter: { transform: `translateY(0) scale(1)`, opacity: 1 },
    leave: { transform: `translateY(200px) scale(0.8)`, opacity: 0 },
    config: {
      tension: 200,
      friction: 15,
    },
  });

  return (
    <Fragment>
      {fadeTransition.map(({ item, key, props }) =>
        item ? <animated.div css={[fullscreen, darkLayer]} key={key} style={props} /> : null
      )}

      {slideUpTransition.map(({ item, key, props }) =>
        item ? (
          <animated.div
            css={[fullscreen, whiteBoxWrapper]}
            key={key}
            style={props}
            onClick={onCancel ? onCancel : () => {}}
          >
            <div css={[whiteBox]}>
              {title && <h3>{title}</h3>}
              {description && <p>{description}</p>}
              {children}
              {!hideButtons && (
                <ButtonGroup css={[{ marginTop: '3rem' }]} rightAlign>
                  {cancellable && (
                    <Button theme='secondary' onClick={onCancel}>
                      {cancelText}
                    </Button>
                  )}
                  <Button onClick={onConfirm}>{confirmText}</Button>
                </ButtonGroup>
              )}
            </div>
          </animated.div>
        ) : null
      )}
    </Fragment>
  );
};

Dialog.defaultProps = {
  cancelText: '취소',
  confirmText: '확인',
};

const fullscreen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const darkLayer = css`
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

const whiteBoxWrapper = css`
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const whiteBox = css`
  box-sizing: border-box;
  border-radius: 4px;
  width: 25rem;
  background: white;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    color: #343a40;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    margin: 0;
    color: #868e96;
  }
`;

export default Dialog;
