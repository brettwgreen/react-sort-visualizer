import React, { Component } from "react";

class SelectionSort extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfElements: 50,
      sortObjects: [],
      delay: 10,
      averageHits: 0,
      swapCount: 0,
      _smallest: 0,
      _smallestIndex: 0
    }
    this.handleDelayChange = this.handleChange.bind(this);
  }

  init = () => {
    this.setSortData(this.getRandomArray());
  }

  componentDidMount = () => {
    this.init();
  }

  handleChange = (event) => {
    this.setState({delay: event.target.value});
  }

  actualHits = () => {
    var total = 0;
    for (var i=0; i<this.values.length; i++){
      total += this.values[i].hitCount;
    }
    return total;
  }

  getRandomArray = () => {
    var count = 0;
    var nums = [];
    while (count < this.state.numberOfElements) {
      var num = Math.ceil(Math.random() * this.state.numberOfElements);
      if (!nums.includes(num)) {
        nums.push(num);
        count++;
      }
    }
    console.log("numbers: " + nums.length);
    return nums;
  }

  setSortData = (values) => {
    var sObjects = [];
    for (var i=0; i<values.length; i++) {
      sObjects.push({
        value: values[i],
        inspecting: false,
        currentStart: false,
        hitCount: 0
      });
    };
    this.setState({sortObjects: sObjects});
  }

  swap = (targetIndex, sourceIndex) => {
    if (targetIndex !== sourceIndex) {
      const newSortObjects = this.state.sortObjects.slice();
      var tempValue = newSortObjects[targetIndex].value;
      newSortObjects[targetIndex].value = newSortObjects[sourceIndex].value;
      newSortObjects[sourceIndex].value = tempValue;
      this.setState({sortObjects: newSortObjects, swapCount: this.state.swapCount + 1 })
    }
  }

  checkSmallest = (i) => {
    if (this.state.sortObjects[i].value < this.state._smallest) {
      this.setState({_smallest: this.state.sortObjects[i].value, _smallestIndex: i})
    }
    const newSortObjects = this.state.sortObjects.slice();
    newSortObjects[i].inspecting = false;
    if (i + 1 <= newSortObjects.length - 1) {
      newSortObjects[i + 1].inspecting = true;
      this.setState({sortObjects: newSortObjects});
      setTimeout(() => {this.checkSmallest(i+1)}, this.state.delay);
    } else {
      this.completeSelectionSortFrom();
    }
  }

  startSelectionSortFrom = (i) => {
    if (i > this.state.sortObjects.length - 1) {
      return;
    }
    const newSortObjects = this.state.sortObjects.slice();
    newSortObjects[i].inspecting = true;
    newSortObjects[i].currentStart = true;
    this.setState({
      _smallestIndex: i,
      _startingIndex: i,
      _smallest: this.state.sortObjects[i].value,
      sortObjects: newSortObjects
    });
    setTimeout(() => {this.checkSmallest(this.state._startingIndex)}, this.state.delay);
  }

  completeSelectionSortFrom = () => {
    this.swap(this.state._startingIndex, this.state._smallestIndex);
    const newSortObjects = this.state.sortObjects.slice();
    newSortObjects[this.state._startingIndex].currentStart = false;
    this.setState({sortObjects: newSortObjects});
    this.startSelectionSortFrom(this.state._startingIndex + 1);
  }

  sort = () => {
    console.log("started selectionsort at " + new Date());
    this.setState({swapCount:  0});
    this.startSelectionSortFrom(0);
  }


  render = () => {
    return (
      <div id="selectionSort" className="sortGroup">
        <div className="data">
          {
            this.state.sortObjects.map ((item, index) => {
              const itemStyle = {
                width: item.value+10 + 'px',
              };
              const indicatorState = 'indicator ' + (item.currentStart ? 'show' : 'hide');
              const inspecting = 'unit ' + (item.inspecting ? 'inspecting' : '');
              return <span key={index}>
                <div className={inspecting} style={itemStyle}></div>
                <div className={indicatorState}></div>
                <div className="clear"></div>
              </span>
            })
          }
        </div>
        <div className="sortInfo">
          <fieldset>
            <legend>Selection Sort</legend>
            <label>Average:</label><div className="sortData">O(<i>n</i><sup>2</sup>)</div>
            <label>Worst:</label><div className="sortData">O(<i>n</i><sup>2</sup>)</div>
            <label>Best:</label><div className="sortData">O(<i>n</i><sup>2</sup>)</div>
          </fieldset>
        </div>
        <div className="sortPanel">
          <br clear="all" /><br />
          <label htmlFor="delay">delay</label>: <input id="delay" type="text" 
            value={this.state.delay} 
            onChange={this.handleDelayChange}/>
          <br /><br />
          <button onClick={this.sort}>sort</button><br /><br />
          <button onClick={this.init}>scramble</button>
        </div>
      </div>
    );
  }
}

export default SelectionSort;