import React, { memo } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import LocalImage from 'patterns/atomes/Images/LocalImage';
import { colors } from 'utils/Theme';

const styles = {
  container: {
    color: colors.grey,
  },
};
const UserCard = memo(props => {
  return (
    props.user && (
      <div>
        <Card>
          <LocalImage src="gimmick_daveo.png" />
          <CardBody style={styles.container}>
            <CardTitle>{props.user.name}</CardTitle>
            <CardSubtitle>{props.user.email}</CardSubtitle>
            <CardText>phone: {props.user.phone}</CardText>
            <CardText>site: {props.user.website}</CardText>
            <CardText>company: {props.user.company.name}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  );
});

export default UserCard;
