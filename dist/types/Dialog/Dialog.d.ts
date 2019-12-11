/// <reference types="react" />
export declare type DialogProps = {
    visible: boolean;
    title?: string;
    description?: string;
    hideButtons?: boolean;
    cancellable?: boolean;
    cancelText: string;
    confirmText: string;
    onCancel?: () => void;
    onConfirm?: () => void;
    children?: React.ReactNode;
};
declare const Dialog: {
    ({ visible, title, description, hideButtons, cancellable, cancelText, confirmText, onCancel, onConfirm, children, }: DialogProps): JSX.Element;
    defaultProps: {
        cancelText: string;
        confirmText: string;
    };
};
export default Dialog;
