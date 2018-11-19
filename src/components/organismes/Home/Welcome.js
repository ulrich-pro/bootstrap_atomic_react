import React from 'react';
import Title from '../../atomes/Texts/Title';
import { colors } from '../../../utils/Theme';

const styles = {
  container: {
    backgroundColor: colors.blue,
  },
};

const Welcome = props => (
  <div style={styles.container}>
    <Title display="Welcome" />
    {/* ....
    other molecules */}
  </div>
);

export default Welcome;
