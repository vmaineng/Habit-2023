import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <div>
      {/* Footer */}
      <Divider />

      <Container sx={{ my: 5, display: "flex" }}>
        <Grid container spacing={2}>
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            spacing={2}
          >
            <Grid item xs={6} md={10}>
              <Typography variant="h6" marked="left" gutterBottom>
                Legal
              </Typography>
              <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="/premium-themes/onepirate/terms/">Terms</Link>
                </Box>
                <Box component="li" sx={{ py: 0.5 }}>
                  <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
