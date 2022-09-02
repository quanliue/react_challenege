import React, { Component, Fragment } from 'react'
import { 
  Container,
  IconButton
} from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import './App.css';
import Loading from './components/loading';
import { connect } from 'react-redux';
import { getUsers } from './redux/main/actions';
import BasicTable from './components/BasicTable';


/**
* @author
* @class @App
**/

type AppState = {
  loading: boolean,
  users: Array<Object>
}

type AppProps = {
  getUsers?: any,
  users?: Array<Object>,
  loading?: boolean
}

class App extends Component<AppProps> {
  
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: AppProps) {
    super(props);
  }

  state: AppState = {
    loading: false,
    users: [],
  }


  componentDidMount() {
    this.onReload();
  }

  componentDidUpdate(prevProp: any) {
    if(prevProp !== this.props && this.props.users) {
      this.setState({
        loading: this.props.loading,
        users: this.props.users
      });
    }
  }

  onReload = () => {
    this.setState({
      loading: true
    });
    this.props.getUsers && this.props.getUsers();
  }

  render(){
    return(
      <Fragment>
        <Container sx={{display:'flex', flexDirection:'column'}}>
          <IconButton color="primary" aria-label="reload" onClick={() => {this.onReload()}}>
            <CachedIcon />
          </IconButton>
          <br/>
          {
            this.state.users &&
            this.state.users.length > 0 &&
            <Container>
              <BasicTable rows={this.state.users} />
            </Container>
          }
        </Container>
        {
          this.state.loading &&
          <Loading />
        }
      </Fragment>
    )
  }
};

const mapStateToProps = (state: any) => {
  const {loading, users} = state.main;
  return { loading, users };
};

export default connect(mapStateToProps, { getUsers })(App);
