import React, { Component } from 'react';
import { Select } from 'grommet';

export class CanvasMapStyle extends Component {
  render() {
    const __map__ = this.props.__map__;
    return <Select
      options={['全图', '底图']}
      value={__map__.getFeatures() === 'all' ? '全图' : '底图'}
      onChange={({ option }) => {
        __map__.setFeatures(option === '全图' ?
          ['bg', 'road', 'building', 'point'] : ['bg']);
        console.log(option, __map__.getFeatures())
        this.setState({ state: this.state });
      }}
    />;
  }
}