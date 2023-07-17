export type Order = "asc" | "desc";
import { Product } from "@Interfaces/index";

export interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

export interface EnhancedTableProps {
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        newOrderBy: keyof Data
    ) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}


export interface Data {
    id: number;
    name: string;
    price: number;
    lastUpdate: Date;
}

export interface Props {
    data: Product[];
    search?: string;
}
