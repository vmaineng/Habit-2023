import React from 'react'
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function TopNav() {
  return (
    <div>
 <Box sx={{ width: '100%', mr: { xs: 0, md: 1 } }}>
        <FormControl sx={{ width: { xs: '100%', md: 300 } }}>
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
                    'aria-label': 'weight'
                }}
                placeholder="Search"
            />
        </FormControl>
    </Box>
    </div>
  )
}

export default TopNav