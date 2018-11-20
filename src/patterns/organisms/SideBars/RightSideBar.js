import React from 'react';
import { connect } from 'react-redux';

import { colors } from '../../../utils/Theme';
import UserCard from '../../molecules/User/UserCard';

const styles = {
  container: {
    borderLeftWidth: 5,
    color: colors.darklightGrey,
    borderLeftStyle: 'solid',
    backgroundColor: colors.lightGreen,
    height: 500,
    paddingTop: 20,
  },
};

const RightSideBar = props => (
  <div style={styles.container}>
    <UserCard user={props.users.selectedUser}></UserCard>
    {/* ....
    other molecules */}
  </div>
);

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSideBar);
