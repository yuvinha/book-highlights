import { useState } from "react";
import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FormatQuote } from "@mui/icons-material";
import FormDialog from "./FormDialog";

const Header = () => {
  const [addNewOpen, setAddNewOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{ boxShadow: "none", p: 2 }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            color: theme.palette.primary.light,
          }}
        >
          <Stack direction="row" alignItems="center">
            <FormatQuote sx={{ fontSize: 48 }} />
            {/* <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Quotes
          </Typography> */}
          </Stack>
          <Button
            color="primary"
            size="large"
            variant="contained"
            onClick={() => setAddNewOpen(true)}
          >
            Add New
          </Button>
        </Toolbar>
      </AppBar>
      <FormDialog open={addNewOpen} setOpen={setAddNewOpen} />
    </>
  );
};

export default Header;
