import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import UserManagmentTpl from '../components/templates/UserManagment';
import { dispatchSetUsers } from '../redux/actions/users';

class UserManagment extends Component {

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      console.log('====================================');
      console.log(response.data);
      console.log('====================================');
      this.props.dispatchSetUsers(response.data);
    });
  }

  render() {
    return <UserManagmentTpl/>;
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = {
  dispatchSetUsers: users => dispatchSetUsers(users),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagment);
