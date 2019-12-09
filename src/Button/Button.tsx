/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export type ButtonProps = {
  /** 버튼 내용 */
  children: React.ReactNode;
  /** 버튼의 색상을 결정합니다. */
  theme: 'primary' | 'secondary' | 'tertiary';
  /** 버튼의 크기를 결정합니다. */
  size: 'small' | 'medium' | 'big';
  /** 비활성화 여부를 결정합니다. */
  disabled?: boolean;
  /** 클릭 핸들러 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, theme, size, disabled, onClick }: ButtonProps) => {
  return (
    <button css={[style, themes[theme], sizes[size]]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
};

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  border-radius: 7px;
  line-height: 1;
  &:focus {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const themes = {
  primary: css`
    background: #4263eb;
    color: #f8f9fa;
    &:hover:enabled,
    &:active:enabled {
      background: #364fc7;
    }
    &:disabled {
      background: #91a7ff;
    }
  `,
  secondary: css`
    background: #adb5bd;
    color: #f8f9fa;
    &:hover:enabled,
    &:active:enabled {
      background: #868e96;
    }
    &:disabled {
      background: #e9ecef;
    }
  `,
  tertiary: css`
    background: #f8f9fa;
    color: #4263eb;
    &:hover:enabled,
    &:active:enabled {
      background: #dee2e6;
    }
    &:disabled {
      color: #748ffc;
    }
  `,
};
const sizes = {
  small: css`
    font-size: 0.8rem;
    padding: 8px 12px;
  `,
  medium: css`
    font-size: 1rem;
    padding: 10px 15px;
  `,
  big: css`
    font-size: 1.2rem;
    padding: 15px 20px;
  `,
};

export default Button;
