/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export type InputProps = {
  /** label */
  label: string;
  /** id */
  id: string;
  /** input 타입 */
  type: 'text' | 'email' | 'password';
  /** input 값 */
  value: string;
  /** theme */
  theme: 'primary' | 'secondary' | 'tertiary';
  /** 비활성화 여부 */
  disabled?: boolean;
  /** change 이벤트 핸들러 */
  onChange: () => void;
};

const Input = ({ label, id, type, value, theme, disabled, onChange }: InputProps) => {
  return (
    <div css={[style, themes[theme]]}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} disabled={disabled} />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  theme: 'primary',
};

const style = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
  input {
    padding: 8px 10px;
    border-radius: 5px;
    font-size: 1em;
  }
  label {
    font-size: 16px;
    margin-right: 0.5em;
  }
`;

const themes = {
  primary: css`
    input {
      border: 1px solid #4263eb;
    }
    svg {
      fill: #f8f9fa;
    }
    input:disabled {
      border: #91a7ff;
    }
  `,
  secondary: css`
    input {
      border: 1px solid #adb5bd;
    }
    svg {
      fill: #f8f9fa;
    }

    input:disabled {
      border: #e9ecef;
      svg {
        fill: #f8f9fa;
      }
    }
  `,
  tertiary: css`
    input {
      border: 1px solid #adb5bd;
      color: #4263eb;
    }
    svg {
      fill: #4263eb;
    }
    input:disabled {
      color: #748ffc;
      svg {
        fill: #748ffc;
      }
    }
  `,
};

export default Input;
