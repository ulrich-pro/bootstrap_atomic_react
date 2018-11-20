import React, { Component } from 'react';
import { Button, Badge } from 'reactstrap';

export default class incButton extends Component {
  state = {
    cpt: 0,
  };

  incremente() {
    this.setState({ cpt: this.state.cpt + 1 });
  }
  render() {
    return (
      <Button color="primary" outline onClick={() => this.incremente()}>
        Nb click: <Badge color="secondary">{this.state.cpt}</Badge>
      </Button>
    );
  }
}
