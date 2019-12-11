/// <reference types="react" />
export declare type ButtonGroupProps = {
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
declare const ButtonGroup: {
    ({ direction, rightAlign, gutter, children, className }: ButtonGroupProps): JSX.Element;
    defaultProps: {
        direction: string;
        gutter: string;
    };
};
export default ButtonGroup;
