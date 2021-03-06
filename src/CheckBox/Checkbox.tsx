/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export type CheckboxProps = {
  /** 체크박스 내용 */
  children: React.ReactNode;
  /** HTML id */
  id: string;
  /** 체크 여부 */
  checked: boolean;
  /** 비활성화 여부 */
  disabled: boolean;
  /** 체크박스 색상 */
  theme: 'primary' | 'secondary' | 'tertiary';
  /** 클릭 시 이벤트 핸들러 */
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ id, checked, disabled, theme, onChange, children }: CheckboxProps) => {
  return (
    <div css={[style, themes[theme]]}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        readOnly={disabled}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

Checkbox.defaultProps = {
  theme: 'primary',
  disabled: false,
};

const style = css`
  display: inline-block;
  vertical-align: middle;

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:disabled + label {
    cursor: not-allowed;
    color: darkgray;
  }

  input[type='checkbox'] + label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.2em;
      height: 1.2em;
      border-radius: 5px;
      margin-right: 5px;
    }
  }

  input[type='checkbox']:checked + label {
    &::before {
      content: '✔';
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const themes = {
  primary: css`
    input[type='checkbox'] + label {
      &:hover {
        &::before {
          background: #eeeeee;
        }
      }
      &::before {
        background: #e9e9e9;
      }
    }
    input[type='checkbox']:checked + label {
      &::before {
        color: #f8f9fa;
        background: #4263eb;
      }
    }
    input[type='checkbox']:disabled:checked + label {
      &::before {
        background: #879cf2;
      }
    }
  `,
  secondary: css`
    input[type='checkbox'] + label {
      &:hover {
        &::before {
          background: #eeeeee;
        }
      }
      &::before {
        background: #e9e9e9;
      }
    }
    input[type='checkbox']:checked + label {
      &::before {
        color: #fafafa;
        background: #868e96;
      }
    }
    input[type='checkbox']:disabled:checked + label {
      &::before {
        background: #dadcdf;
      }
    }
  `,
  tertiary: css`
    input[type='checkbox'] + label {
      &:hover {
        &::before {
          background: #f9f9f9;
        }
      }
      &::before {
        background: #f4f4f4;
      }
    }
    input[type='checkbox']:checked + label {
      &::before {
        color: #4263eb;
        background: #f8f9fa;
      }
    }
    input[type='checkbox']:disabled:checked + label {
      &::before {
        color: #879cf2;
      }
    }
  `,
};

export default Checkbox;
