import React from "react";
import { InputAdornment, OutlinedInput} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Search({search, onSearchChange}) {
  return (
    <div>
      <OutlinedInput
        id="search"
        startAdornment={
          <InputAdornment position="start" sx={{ mr: 1 }} placeholder="Search">
            <SearchIcon />
          </InputAdornment>
        }
        aria-describedby="header-search-text"
        inputProps={{
          "aria-label": "weight",
        }}
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
