/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export type ButtonGroupProps = {
  /** 버튼의 방향 */
  direction: 'row' | 'column';
  /** 우측정렬 여부 */
  rightAlign?: boolean;
  /** 버튼사이의 간격 */
  gutter: number | string;
  /** 보여줄 버튼 */
  children: React.ReactNode;
  /** HTML class */
  className?: string;
};

const ButtonGroup = ({ direction, rightAlign, gutter, children, className }: ButtonGroupProps) => {
  return (
    <div
      css={[
        { display: 'flex', flexDirection: direction },
        gutterStyle(direction, gutter),
        rightAlign && rightAlignStyle,
      ]}
      className={className}
    >
      {children}
    </div>
  );
};

ButtonGroup.defaultProps = {
  direction: 'row',
  gutter: '16px',
};

const gutterStyle = (direction: 'row' | 'column', gutter: number | string) => {
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    'button + button': {
      [marginType]: gutter,
    },
  });
};

const rightAlignStyle = css`
  justify-content: flex-end;
`;

export default ButtonGroup;
