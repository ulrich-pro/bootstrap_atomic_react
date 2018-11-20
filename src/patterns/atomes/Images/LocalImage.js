import React from 'react';
import Constants from '../../../utils/Constants';

const LocalImage = props => (
  <img
    className={props.imgClass}
    src={`${Constants.assetsPath}${props.src}`}
    alt={props.alt || ''}
  />
);

export default LocalImage;
