import React, { memo } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { dispatchSetSelectedUser } from 'redux/actions/users';
import User from 'patterns/molecules/User/User';

const UserList = memo(props => (
  <ListGroup>
    {props.users.map(item => (
      <ListGroupItem key={item.id} onClick={() => props.dispatchSetSelectedUser(item)}>
        <User user={item} />
      </ListGroupItem>
    ))}
  </ListGroup>
));

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  dispatchSetSelectedUser: user => dispatchSetSelectedUser(user),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
