import React from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Header from "./components/Header";
import CustomizedSnackbar from "./components/CustomizedSnackbar";
import DeleteDialog from "./components/DeleteDialog";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CustomizedSnackbar />
        <DeleteDialog />
        <Header />
        <Container component="main">
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
