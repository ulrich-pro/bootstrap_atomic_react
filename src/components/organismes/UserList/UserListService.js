import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { dispatchSetUsers } from '../../../redux/actions/users';
import UserList from './UserList';

class UserListService extends Component {
  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      console.log('====================================');
      console.log(response.data);
      console.log('====================================');
      this.props.dispatchSetUsers(response.data);
    });
  }

  render() {
    return <UserList users={this.props.users} />;
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = {
  dispatchSetUsers: users => dispatchSetUsers(users),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListService);
