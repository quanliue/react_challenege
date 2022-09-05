// material-ui
import { Box, Button, LinearProgress, Link } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchUsers } from "../store/UserActions";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },
  {
    field: "username",
    headerName: "User name",
    width: 250,
  },
  {
    field: "website",
    headerName: "Website",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://${params.value}`}
        >
          {params.value}
        </Link>
      );
    },
  },
  {
    field: "company",
    headerName: "Company name",
    sortable: true,
    flex: 1,
    valueGetter: (params: GridValueGetterParams) => params.row.company.name,
  },
];

export default function UsersTable() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.userReducer.users);
  const loading = useAppSelector((state) => state.userReducer.loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const clickHandler = () => {
    dispatch(fetchUsers());
  };

  return (
    <Box>
      <Button onClick={clickHandler}>reload</Button>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          disableSelectionOnClick
          components={{
            LoadingOverlay: LinearProgress,
            Toolbar: GridToolbar,
          }}
          loading={loading}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        />
      </Box>
    </Box>
  );
}
