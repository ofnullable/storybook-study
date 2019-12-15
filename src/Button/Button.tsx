/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export type ButtonProps = {
  /** 버튼 내용 */
  children: React.ReactNode;
  /** 버튼의 색상 */
  theme: 'primary' | 'secondary' | 'tertiary';
  /** 버튼의 크기 */
  size: 'small' | 'medium' | 'big';
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 너비 */
  width?: string | number;
  /** 아이콘만 보여줄지 여부 */
  iconOnly?: boolean;
  /** 클릭 시 이벤트 핸들러 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, theme, size, disabled, width, iconOnly, onClick }: ButtonProps) => {
  return (
    <button
      css={[
        style,
        themes[theme],
        sizes[size],
        { width },
        iconOnly && [iconOnlyStyle, iconOnlySizes[size]],
      ]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
};

const style = css`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  line-height: 1;
  &:focus {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    cursor: not-allowed;
  }
  svg {
    width: 1em;
    height: 1em;
    font-size: inherit;
    margin-right: 0.5em;
  }
`;

const themes = {
  primary: css`
    background: #4263eb;
    color: #f8f9fa;
    svg {
      fill: #f8f9fa;
    }
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
    svg {
      fill: #f8f9fa;
    }
    &:hover:enabled,
    &:active:enabled {
      background: #868e96;
    }
    &:disabled {
      background: #e9ecef;
      svg {
        fill: #f8f9fa;
      }
    }
  `,
  tertiary: css`
    background: #f8f9fa;
    color: #4263eb;
    svg {
      fill: #4263eb;
    }
    &:hover:enabled,
    &:active:enabled {
      background: #dee2e6;
    }
    &:disabled {
      color: #748ffc;
      svg {
        fill: #748ffc;
      }
    }
  `,
};

const sizes = {
  small: css`
    font-size: 12px;
    padding: 6px 12px;
  `,
  medium: css`
    font-size: 14px;
    padding: 8px 16px;
  `,
  big: css`
    font-size: 16px;
    padding: 12px 20px;
  `,
};

const iconOnlyStyle = css`
  padding: 0;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  svg {
    margin: 0;
  }
`;

const iconOnlySizes = {
  small: css`
    width: 1.75rem;
    height: 1.75rem;
  `,
  medium: css`
    width: 2.5rem;
    height: 2.5rem;
  `,
  big: css`
    width: 3rem;
    height: 3rem;
  `,
};

export default Button;
