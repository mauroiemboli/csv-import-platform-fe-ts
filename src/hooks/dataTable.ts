import React from 'react';
import { createRows, getComparator, stableSort } from "@Components/Home/DataContent/functions";
import { Data } from '@Components/Home/DataContent/DataContent';
import { Product } from '@Interfaces/index';

type Order = 'asc' | 'desc';

export const useTable = (
    initialRows: Product[],
    defaultOrder: Order,
    defaultOrderBy: keyof Data,
    defaultRowsPerPage: number,
    searchQuery?: string
) => {
    const [order, setOrder] = React.useState<Order>(defaultOrder);
    const [orderBy, setOrderBy] = React.useState<keyof Data>(defaultOrderBy);
    const [page, setPage] = React.useState(0);
    const [visibleRows, setVisibleRows] = React.useState<Data[]>([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);
    const [paddingHeight, setPaddingHeight] = React.useState(0);

    const rows = React.useMemo(() => createRows(initialRows), [initialRows]);

    React.useEffect(() => {
        // @ts-ignore
        let rowsOnMount = stableSort(rows, getComparator(defaultOrder, defaultOrderBy));
        rowsOnMount = rowsOnMount.slice(0, defaultRowsPerPage);
        // @ts-ignore
        setVisibleRows(rowsOnMount);
    }, [rows, defaultOrder, defaultOrderBy, defaultRowsPerPage]);

    const handleRequestSort = React.useCallback(
        (event: React.MouseEvent<unknown>, newOrderBy: keyof Data) => {
            const isAsc = orderBy === newOrderBy && order === 'asc';
            const toggledOrder = isAsc ? 'desc' : 'asc';
            setOrder(toggledOrder);
            setOrderBy(newOrderBy);
            // @ts-ignore
            const sortedRows = stableSort(rows, getComparator(toggledOrder, newOrderBy));
            const updatedRows = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
            // @ts-ignore
            setVisibleRows(updatedRows);
        },
        [order, orderBy, page, rows, rowsPerPage]
    );

    const handleChangePage = React.useCallback(
        (event: unknown, newPage: number) => {
            setPage(newPage);
            // @ts-ignore
            const sortedRows = stableSort(rows, getComparator(order, orderBy));
            const updatedRows = sortedRows.slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage);
            // @ts-ignore
            setVisibleRows(updatedRows);
            const numEmptyRows = newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - rows.length) : 0;
            const newPaddingHeight = 53 * numEmptyRows;
            setPaddingHeight(newPaddingHeight);
        },
        [order, orderBy, rows, rowsPerPage]
    );

    const handleChangeRowsPerPage = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const updatedRowsPerPage = parseInt(event.target.value, 10);
            setRowsPerPage(updatedRowsPerPage);
            setPage(0);
            // @ts-ignore
            const sortedRows = stableSort(rows, getComparator(order, orderBy));
            const updatedRows = sortedRows.slice(0, updatedRowsPerPage);
            // @ts-ignore
            setVisibleRows(updatedRows);
            setPaddingHeight(0);
        },
        [order, orderBy, rows]
    );

    React.useEffect(() => {
        let filteredRows = rows;

        if (searchQuery && searchQuery.length > 0) {
            filteredRows = filteredRows.filter((row) => row.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        let rowsOnMount = stableSort(
            // @ts-ignore
            filteredRows,
            getComparator(order, orderBy)
        );

        rowsOnMount = rowsOnMount.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
        );
        // @ts-ignore
        setVisibleRows(rowsOnMount);
    }, [rows, order, orderBy, rowsPerPage, page, searchQuery]);




    return {
        order,
        setOrder,
        orderBy,
        setOrderBy,
        page,
        setPage,
        visibleRows,
        setVisibleRows,
        rowsPerPage,
        setRowsPerPage,
        paddingHeight,
        setPaddingHeight,
        handleRequestSort,
        handleChangePage,
        handleChangeRowsPerPage,

    };
};