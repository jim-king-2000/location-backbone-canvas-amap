import React, { Component } from 'react';
import { Select } from 'grommet';

export class CanvasMapStyle extends Component {
  render() {
    const __map__ = this.props.__map__;
    return <Select
      options={['全图', '底图']}
      value={__map__.getFeatures() === ['bg'] ? '底图' : '全图'}
      onChange={({ option }) => {
        console.log(option, __map__.getFeatures())
        __map__.setFeatures(option === '全图' ?
          ['bg', 'road', 'building', 'point'] : ['bg']);
        this.forceUpdate();
      }}
    />;
  }
}