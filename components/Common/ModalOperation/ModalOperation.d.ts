export interface Props {
    className?: string;
    open: boolean;
    loading: boolean;
    success: boolean;
    error: boolean;
    edit?: boolean;
    handleEdit?: (param?: any) => void;
    setOpen?: Dispatch<SetStateAction<boolean>>;
    children?: JSX.Element[] | JSX.Element;
    closeButtonText?: string;
    errorMessage?: string;
    completeMessage?: string;

}

