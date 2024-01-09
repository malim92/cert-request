import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Bar from "./componenets/Bar";
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

function App() {
  return (
    <React.Fragment>
      <Bar></Bar>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ p: 2 }}>
      <Typography variant="h2" gutterBottom>
        h1. Heading
      </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item><Div>{"This div's text looks like that of a button."}</Div></Item>
            </Grid>
            <Grid item xs={6}>
              <Item><Div>{"This div's text looks like that of a button."}</Div></Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
