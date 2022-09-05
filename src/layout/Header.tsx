// material-ui
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
type HeaderProps = {
  open?: boolean;
};
const Header: React.FC<HeaderProps> = () => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        position={"fixed"}
        color={"primary"}
        sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Liu-Test-Project
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
