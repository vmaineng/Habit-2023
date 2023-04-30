import React from "react";
import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <div>
      <Box>
        <FormControl>
          <OutlinedInput
            size="medium"
            id="search"
            startAdornment={
              <InputAdornment position="start" sx={{ mr: 1 }}>
                {<SearchIcon />}
              </InputAdornment>
            }
            aria-describedby="header-search-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="Search"
          />
        </FormControl>
      </Box>
    </div>
  );
}

export default Search;
