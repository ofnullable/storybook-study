/// <reference types="react" />
export declare type ButtonProps = {
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
declare const Button: {
    ({ children, theme, size, disabled, width, iconOnly, onClick }: ButtonProps): JSX.Element;
    defaultProps: {
        theme: string;
        size: string;
    };
};
export default Button;
