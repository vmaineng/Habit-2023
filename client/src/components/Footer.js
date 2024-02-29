import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import { Facebook, Instagram, Twitter } from "@mui/icons-material/";

function Footer() {
  return (
    <div>
      <Divider />
      <Box sx={{ height: "10px" }}>
        <Stack direction={{ xs: "row", md: "row" }} p={7}>
          <Box flex={1}>
            <Typography align={"center"}>
              Legal 
            </Typography>
            <Typography align={"center"}>
               &copy;{new Date().getFullYear()}. All rights reserved
            </Typography>
          </Box>
          <Box flex={1}>
            <Typography align={"center"}>Terms Of Use</Typography>
            <Typography align={"center"}>Privacy</Typography>
            <Typography align={"center"}>Ad Choices</Typography>
          </Box>
          <Box flex={1}>
            <Typography align={"center"}>Help Center</Typography>
            <Typography align={"center"}>
             Cookie Preferences
            </Typography>
           
          </Box>
          <Box>
            <Typography align={"center"}>Follow Us</Typography>
            <Facebook />
            <Instagram />
            <Twitter />
          </Box>
        </Stack>
      </Box>

    </div>
  );
}

export default Footer;
