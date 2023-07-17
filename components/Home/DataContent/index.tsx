import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Props } from "./DataContent";
import {
  DEFAULT_ORDER,
  DEFAULT_ORDER_BY,
  DEFAULT_ROWS_PER_PAGE,
  getCellValue,
} from "./functions";

import { EnhancedTableToolbar } from "./TableToolbar";
import { EnhancedTableHead } from "./TableHead";

import { useTable } from "@Hooks//dataTable";
import { formatDate } from "@Services/utils";

export default function DataContentTable(props: Props) {
  const rows = props.data;
  const searchQuery = props.search;

  const {
    order,
    orderBy,
    page,
    visibleRows,
    rowsPerPage,
    paddingHeight,
    handleRequestSort,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useTable(
    rows,
    DEFAULT_ORDER,
    DEFAULT_ORDER_BY,
    DEFAULT_ROWS_PER_PAGE,
    searchQuery
  );

  return (
    <Box className="data__content animate__animated animate__fadeInUp ">
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar title="Products" />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows
                ? visibleRows.map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <>
                        <TableRow
                          hover
                          //        onClick={(event) => handleClick(event, row.name)}
                          role="checkbox"
                          tabIndex={-1}
                          key={index}
                          sx={{ cursor: "pointer" }}
                        >
                          <TableCell
                            className="id"
                            component="th"
                            id={labelId}
                            scope="row"
                            align="left"
                          >
                            {row.id}
                          </TableCell>
                          <TableCell
                            className="name"
                            component="th"
                            scope="row"
                            align="left"
                          >
                            {row.name}
                          </TableCell>
                          <TableCell
                            className="price"
                            component="th"
                            scope="row"
                            align="left"
                          >
                            {"€" + getCellValue(row.price)}
                          </TableCell>
                          <TableCell
                            className="lastupdate"
                            component="th"
                            scope="row"
                            align="left"
                          >
                            {formatDate(row.lastUpdate)}
                          </TableCell>
                        </TableRow>
                      </>
                    );
                  })
                : null}
              {paddingHeight > 0 && (
                <TableRow
                  style={{
                    height: paddingHeight,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
