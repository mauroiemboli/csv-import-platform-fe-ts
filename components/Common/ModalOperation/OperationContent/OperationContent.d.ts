export interface Props {
    className?: "";
    title: String;
    description: String;
    type: 'complete' | "loading" | "error" | "edit";
    handleEdit?: (param?: any) => void;
    setOpen?: Dispatch<SetStateAction<boolean>>;
    selectedItem?: any;

}
