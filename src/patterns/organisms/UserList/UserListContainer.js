import React, { Component } from 'react';
import axios from 'axios';
import UserList from './UserList';

export default class UserListContainer extends Component {
  state = {
    users: [],
  };

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      console.log('====================================');
      console.log(response.data);
      console.log('====================================');
      this.setState({ users: response.data });
    });
  }

  render() {
    return <UserList users={this.state.users} />;
  }
}
