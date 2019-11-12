import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';

class ReactGrid extends Component {	
	render() {
		const heightZoom = 1.5;
    var layout = [
      {i: 'a', x: 0, y: 0, w: 12, h: 4 * heightZoom, minW: 12, minH: 4 * heightZoom, maxW: 12},
      {i: 'b', x: 0, y: 5, w: 9, h: 4 * heightZoom, minW: 9, minH: 4 * heightZoom, maxW: 12},
      {i: 'c', x: 10, y: 5, w: 3, h: 2 * heightZoom, minW: 3, minH: 2 * heightZoom, maxW: 12},
      {i: 'd', x: 10, y: 7, w: 3, h: 2 * heightZoom, minW: 3, minH: 2 * heightZoom, maxW: 12},
      {i: 'e', x: 0, y: 9, w: 12, h: 4 * heightZoom, minW: 12, minH: 4 * heightZoom, maxW: 12}
    ];
    return (
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1000} isDraggable>
        <div key="a" className="bg-grey">a</div>
        <div key="b" className="bg-grey">b</div>
        <div key="c" className="bg-grey">c</div>
        <div key="d" className="bg-grey">d</div>
        <div key="e" className="bg-grey">e</div>
      </GridLayout>
    )
  }
}

export default ReactGrid;