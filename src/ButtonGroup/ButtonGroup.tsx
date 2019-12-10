/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export type ButtonGroupProps = {
  /** 버튼을 보여줄 방향 */
  direction: 'row' | 'column';
  /** 우측정렬 */
  rightAlign?: boolean;
  /** 버튼사이의 간격을 설정합니다. */
  gutter: number | string;
  /** 보여줄 버튼들 */
  children: React.ReactNode;
  /** 스타일 커스터마이징을 위한 class */
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
  gutter: '15px',
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
