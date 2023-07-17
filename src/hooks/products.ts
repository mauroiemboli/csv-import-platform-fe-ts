import * as React from "react";
import { Product } from "@Interfaces/index";
import { ProductService } from "@Services/API/Products";


export function useGetProducts(uploadComplete: boolean) {
    const [data, setData] = React.useState<null | Product[]>(null);
    const [loadingData, setLoadingData] = React.useState<boolean>(false);
    const [loaded, setLoaded] = React.useState<boolean>(false);

    const [errorDescription, setErrorDescription] = React.useState<string | null>(null);
    React.useEffect(() => {
        setLoaded(false);
        setErrorDescription(null)
        setLoadingData(true);
        ProductService.GetProducts().then(result => {
            setLoadingData(false);
            if (result != null) setData(result.data)
            else setErrorDescription('Backend API is off.')
        });
        setLoaded(true);
    }, [uploadComplete]);

    return { loadingData, loaded, data, errorDescription };
}

