import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { dispatchSetSelectedUser } from '../../../redux/actions/users';
import User from '../../molecules/User/User';

class UserList extends Component {
  selectUser(user) {
    this.props.dispatchSetSelectedUser(user);
  }

  render() {
    return (
      <ListGroup>
        {this.props.users.list.map((item, index) => (
          <ListGroupItem key={item.id} onClick={() => this.selectUser(item)}>
            <User user={item} />
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = {
  dispatchSetSelectedUser: user => dispatchSetSelectedUser(user),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
