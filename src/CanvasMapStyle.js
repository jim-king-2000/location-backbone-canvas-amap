import React, { Component } from 'react';
import { Select } from 'grommet';

export class CanvasMapStyle extends Component {
  render() {
    const __map__ = this.props.__map__;
    return <Select
      options={['全图', '底图']}
      value='全图'
      onChange={() => {
        console.log(__map__.getFeatures())
      }}
    />;
  }
}