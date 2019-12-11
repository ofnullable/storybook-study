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
  /** 버튼의 너비를 지정합니다. */
  width?: string | number;
  /** 아이콘만 보여주려면 이 값을 `true`로 설정하세요. */
  iconOnly?: boolean;
  /** 클릭 핸들러 */
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  svg {
    width: 1em;
    margin-right: 1em;
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
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
};

const iconOnlyStyle = css`
  padding: 0;
  border-radius: 50%;
  svg {
    margin: 0;
  }
`;

const iconOnlySizes = {
  small: css`
    width: 1.75rem;
  `,
  medium: css`
    width: 2.5rem;
  `,
  big: css`
    width: 3rem;
  `,
};

export default Button;
