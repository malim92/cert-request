import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Bar from "./componenets/Bar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Div = styled("div")(({ theme }) => ({
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
        <Typography variant="h3" align="center" gutterBottom>
          Certification Manager
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={34}>
            <Grid item xs={6}>
              <Card sx={{ minWidth: 375 , p: 2}}>
                <CardContent>
                  <Div>{"Request a new certificate"}</Div>
                </CardContent>
                <CardActions>
                  <Button variant="outlined">Request</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
                <Card sx={{ minWidth: 375, p: 2 }}>
                  <CardContent>
                    <Div>{"List of requested certificates"}</Div>
                  </CardContent>
                  <CardActions>
                    <Button variant="outlined">Show</Button>
                  </CardActions>
                </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
