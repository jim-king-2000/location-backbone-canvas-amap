export default class {
  constructor(map) {
    this.map = map;
  }

  zoomIn = () => this.map.zoomIn();
  zoomOut = () => this.map.zoomOut();
  setFitView = overlay => this.map.setFitView(this.map.getAllOverlays(overlay))
  isInView = things => {
    const bounds = this.map.getBounds();
    return things.filter(p => p.latitude && p.longitude)
      .every(p => bounds.contains(new AMap.LngLat(p.longitude, p.latitude)));
  }
}