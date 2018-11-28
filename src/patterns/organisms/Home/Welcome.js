import React, { memo } from 'react';

import Title from 'patterns/atomes/Texts/Title';
import { colors } from 'utils/Theme';

const styles = {
  container: {
    backgroundColor: colors.blue,
  },
};

const Welcome = memo(props => (
  <div style={styles.container}>
    <Title display="Welcome" />
    {/* ....
    other molecules */}
  </div>
));

export default Welcome;
