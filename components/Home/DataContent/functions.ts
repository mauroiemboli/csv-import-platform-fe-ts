import { Product } from "@Interfaces/index";
import { Data, HeadCell, Order } from "./DataContent";


export const DEFAULT_ORDER = "asc";
export const DEFAULT_ORDER_BY = "name";
export const DEFAULT_ROWS_PER_PAGE = 25;

function createData(
    id: number,
    name: string,
    price: number,
    lastUpdate: Date
): Data {
    return {
        id,
        name,
        price,
        lastUpdate
    };
}

export function createRows(products: Product[]) {
    let rows: Data[] = [];
    products.forEach(product => {
        const row = createData(product.id, product.name, product.price, product.updatedAt)
        rows.push(row);
    });
    return rows;
}

export const headCells: readonly HeadCell[] = [
    {
        id: "id",
        numeric: true,
        disablePadding: true,
        label: "Product id",
    },
    {
        id: "name",
        numeric: false,
        disablePadding: false,
        label: "Nome",
    },
    {
        id: "price",
        numeric: true,
        disablePadding: true,
        label: "Price",
    },
    {
        id: "lastUpdate",
        numeric: true,
        disablePadding: true,
        label: "Last Updated",
    },


];

export function getCellValue(value: number) {
    if (value) {
        return Number(value).toFixed(2);
    } return "n.a."

}

export function getCellStringValue(value: string) {
    if (value && value.length > 23) {
        return value.slice(0, 23) + '...'
    } return value
}

/**
 * Table sortings functions
 */

export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number
) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

