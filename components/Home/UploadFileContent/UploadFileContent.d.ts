export interface Props {
    uploadComplete: boolean;
    setUploadComplete: React.Dispatch<React.SetStateAction<boolean>>;
    inputRef: React.RefObject<HTMLInputElement>;
    productsLength?: number;
}
