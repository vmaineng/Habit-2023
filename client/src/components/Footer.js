import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <div>
      {/* Footer */}
      <Typography component="footer" sx={{ display: "flex", bgcolor: "lilac" }}>
        <Container sx={{ my: 8, display: "flex" }}>
          <Grid container spacing={5}>
            <Grid item xs={6} sm={4} md={3}>
              <Grid
                container
                direction="column"
                justifyContent="flex-end"
                spacing={2}
                sx={{ height: 120 }}
              >
                <Grid item xs={6} sm={4} md={2}>
                  <Typography variant="h6" marked="left" gutterBottom>
                    Legal
                  </Typography>
                  <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
                    <Box component="li" sx={{ py: 0.5 }}>
                      <Link href="/premium-themes/onepirate/terms/">Terms</Link>
                    </Box>
                    <Box component="li" sx={{ py: 0.5 }}>
                      <Link href="/premium-themes/onepirate/privacy/">
                        Privacy
                      </Link>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Typography>
    </div>
  );
}

export default Footer;
