import { Outlet } from "react-router-dom";
// material-ui
import { Box, Toolbar } from "@mui/material";
import HomePage from "../pages/HomePage";
import Header from "./Header";
const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header />
      <Box
        component="main"
        sx={{ width: "100%", flexGrow: 1, p: { xs: 2, sm: 3 } }}
      >
        <Toolbar />
        <HomePage />
        <Outlet />
      </Box>
    </Box>
  );
};
export default MainLayout;
