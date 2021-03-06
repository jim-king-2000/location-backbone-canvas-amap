import React from 'react';
import { CanvasTracks } from './CanvasTracks';
import { CanvasPositionMonitor } from './CanvasPositionMonitor';

// properties
//   mapKey
//   simple
//   positions
//   selectedThing
//   selectThingId = thingId => {}
//   propertyTemplate
//   tracks

export const CanvasTrackMonitor = ({
  mapKey,
  setFitView,
  onUpdateEnd,
  simple,
  positions,
  tracks,
  selectedThing,
  selectThingId,
  propertyTemplate
}) => (
  <CanvasPositionMonitor
    mapKey={mapKey}
    setFitView={setFitView}
    onUpdateEnd={onUpdateEnd}
    simple={simple}
    positions={positions}
    selectedThing={selectedThing}
    selectThingId={selectThingId}
    propertyTemplate={propertyTemplate}
    canvasExtra={<CanvasTracks tracks={tracks} />}
  />
);
