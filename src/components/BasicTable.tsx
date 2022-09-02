import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchBar from "material-ui-search-bar";

type TableProps = {
  rows: Array<any>
}

type TableState = {
  searched: string,
  rows: Array<any>
}

const sortUser = (users:any) => {
  users.sort((a:any, b:any) => {
    if(a.name < b.name) { 
      return -1;
    }
    else if(a.name > b.name) {
      return 1;
    }

    if(a.username < b.username ) {
      return -1;
    }
    else if(a.username > b.username) {
      return 1;
    }

    return 0;
  });

  return users;
}

class BasicTable extends React.Component<TableProps> {

  state: TableState = {
    searched: '',
    rows: [],
  }

  componentDidMount() {
    this.setState({
      rows: sortUser(this.props.rows)
    })
  }

  componentWillReceiveProps(nextProps: TableProps) {
    if(this.props.rows !== nextProps.rows) {
      this.setState({
        rows: sortUser(nextProps.rows)
      })
    }
  }

  onSearch(searchVal: string): void {
    const filters = this.props.rows.filter((row) => {
      return row.name.toLowerCase().includes(searchVal.toLowerCase())
      || row.username.toLowerCase().includes(searchVal.toLowerCase())
    });

    this.setState({
      rows: sortUser(filters)
    })
  }

  onCancelSearch(): void {
    this.setState({
      searched: ''
    }, () => {
      this.onSearch(this.state.searched);
    })
  }

  render(): React.ReactNode {
    return (
      <TableContainer component={Paper}>
        <SearchBar
          value={this.state.searched}
          onChange={(searchVal) => {this.onSearch(searchVal)}}
          onCancelSearch={() => {this.onCancelSearch()}}
        />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { this.state.rows && 
              this.state.rows.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.address.city}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  <a href={`http://${row.website}`} target='_blank' rel="noreferrer">
                    {row.website}
                  </a>
                </TableCell>
                <TableCell>{row.company.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default BasicTable;