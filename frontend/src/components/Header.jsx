import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FormatQuote } from "@mui/icons-material";

const Header = () => {
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
          <IconButton component={RouterLink} to="/">
            <FormatQuote sx={{ fontSize: 48 }} />
          </IconButton>
          <Button
            component={RouterLink}
            to="/create"
            color="primary"
            size="large"
            variant="contained"
          >
            Add New
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
