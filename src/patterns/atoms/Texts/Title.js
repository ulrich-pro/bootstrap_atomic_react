import React, { memo } from 'react';

import { colors } from 'utils/Theme';

const styles = {
  container: {
    padding: 10,
    color: colors.grey,
  },

  h1: {
    fontSize: 50,
  },
};

const Title = memo(props => (
  <div style={styles.container}>
    <h1 style={styles.h1}>{props.display}</h1>
  </div>
));

export default Title;
