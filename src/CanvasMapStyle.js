import React, { Component } from 'react';
import { Select } from 'grommet';

export class CanvasMapStyle extends Component {
  render() {
    const __map__ = this.props.__map__;
    return <Select
      options={['全图', '底图']}
      value={__map__.getFeatures().length === 'all' ? '全图' : '底图'}
      onChange={({ option, ...props }) => {
        console.log(props)
        __map__.setFeatures(option === '全图' ? 'all' : ['bg']);
        this.forceUpdate();
      }}
    />;
  }
}