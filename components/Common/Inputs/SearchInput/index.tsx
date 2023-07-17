import * as React from "react";
import { Props } from "./SearchInput";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput: React.FunctionComponent<Props> = ({
  setSearch,
  search,
  searchText = "Search by name",
}): JSX.Element => {
  return (
    <>
      <TextField
        className="input--search mb-3"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon></SearchIcon>
            </InputAdornment>
          ),
        }}
        placeholder={searchText}
        value={search}
        id="search"
        label=""
        variant="standard"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </>
  );
};

export { SearchInput };
