import React from 'react';
import ButtonLink from '../../molecules/SideBars/ButtonLink';
import { colors } from '../../../utils/Theme';

const styles = {
  container: {
    borderRightWidth: 5,
    color: colors.darklightGrey,
    borderRightStyle: 'solid',
    backgroundColor: colors.orange,
    height: 500,
    paddingTop: 20,
  },
};

const LeftSideBar = props => (
  <div style={styles.container}>
    <ButtonLink />
    {/* ....
    other molecules */}
  </div>
);

export default LeftSideBar;
