import React, { Component } from 'react';
import GridLayout, { WidthProvider, Responsive } from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

class ReactGrid extends Component {	
	render() {
		const heightZoom = 1;
    const layout = [
      {i: 'a', x: 0, y: 0, w: 12, h: 4 * heightZoom, minW: 12, minH: 4 * heightZoom, maxW: 12},
      {i: 'b', x: 0, y: 5, w: 9, h: 4 * heightZoom, minW: 9, minH: 4 * heightZoom, maxW: 12},
      {i: 'c', x: 10, y: 5, w: 3, h: 2 * heightZoom, minW: 3, minH: 2 * heightZoom, maxW: 12},
      {i: 'd', x: 10, y: 7, w: 3, h: 2 * heightZoom, minW: 3, minH: 2 * heightZoom, maxW: 12},
      {i: 'e', x: 0, y: 9, w: 12, h: 4 * heightZoom, minW: 12, minH: 4 * heightZoom, maxW: 12},
      {i: 'f', x: 0, y: 9, w: 12, h: 4 * heightZoom, minW: 12, minH: 4 * heightZoom, maxW: 12}
    ];
    return (
      <React.Fragment>
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
          rowHeight={36}
          isDraggable
          isResizable
          draggableCancel={'.cancel-drag'}
        >
          <div key="a" data-grid={layout[0]} className="bg-grey">responsive</div>
          <div key="b" data-grid={layout[1]} className="bg-grey">responsive</div>
          <div key="c" data-grid={layout[2]} className="bg-grey">responsive</div>
          <div key="d" data-grid={layout[3]} className="bg-grey">responsive</div>
          <div key="e" data-grid={layout[4]} className="bg-grey">responsive</div>
          <div key="f" data-grid={layout[5]} className="bg-grey">responsive<div className="cancel-drag">Cant Drag Me ;)</div></div>
        </ResponsiveReactGridLayout>
        <br/><br/>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={36}
          width={1100}
          isDraggable
          isResizable
          draggableCancel={'.cancel-drag'}
        >
          <div key="a" className="bg-light-grey">standard</div>
          <div key="b" className="bg-light-grey">standard</div>
          <div key="c" className="bg-light-grey">standard</div>
          <div key="d" className="bg-light-grey">standard</div>
          <div key="e" className="bg-light-grey">standard</div>
          <div key="f" className="bg-light-grey">standard<div className="cancel-drag">Cant Drag Me ;)</div></div>
        </GridLayout>
      </React.Fragment>
    )
  }
}

export default ReactGrid;