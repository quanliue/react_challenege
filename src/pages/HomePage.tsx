// material-ui
import { Grid, Paper, Typography } from "@mui/material";
import UsersTable from "./UsersTable";

const HomePage = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} md={12} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Users</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Paper sx={{ mt: 2 }}>
            <UsersTable />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default HomePage;
