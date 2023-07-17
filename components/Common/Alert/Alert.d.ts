export interface Props {
    className?: string;
    open: boolean;
    setOpen?: Dispatch<SetStateAction<boolean>>;
    children?: JSX.Element[] | JSX.Element;
    closeButtonText?: string;
}



