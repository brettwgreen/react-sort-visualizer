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

  init() {
    this.setSortData(this.getRandomArray());
  }

  componentDidMount() {
    this.init();
  }

  handleChange(event) {
    this.setState({delay: event.target.value});
  }

  actualHits() {
    var total = 0;
    for (var i=0; i<this.values.length; i++){
      total += this.values[i].hitCount;
    }
    return total;
  }

  getRandomArray() {
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

  setSortData(values) {
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

  swap(targetIndex, sourceIndex) {
    if (targetIndex !== sourceIndex) {
      this.swapCount++;
      var tempValue = this.sortObjects[targetIndex].value;
      this.sortObjects[targetIndex].value = this.sortObjects[sourceIndex].value;
      this.sortObjects[sourceIndex].value = tempValue;
    }
  }

  checkSmallest(i) {
    if (this.sortObjects[i].value < this._smallest) {
      this._smallest = this.sortObjects[i].value;
      this._smallestIndex = i;
    }
    this.sortObjects[i].inspecting = false;
    if (i + 1 <= this.sortObjects.length - 1) {
      this.sortObjects[i + 1].inspecting = true;
      setTimeout(this.checkSmallest, this.delay, i + 1);
    } else {
      this.completeSelectionSortFrom();
    }
  }

  startSelectionSortFrom(i) {
    if (i > this.sortObjects.length - 1) {
      return;
    }
    this._smallestIndex = i;
    this._startingIndex = i;
    this._smallest = this.sortObjects[this._smallestIndex].value;
    this.sortObjects[this._startingIndex].inspecting = true;
    this.sortObjects[this._startingIndex].currentStart = true;
    setTimeout(this.checkSmallest, this.delay, this._startingIndex);
  }

  completeSelectionSortFrom() {
    this.swap(this._startingIndex, this._smallestIndex);
    this.sortObjects[this._startingIndex].currentStart = false;
    this.startSelectionSortFrom(this._startingIndex + 1);
  }

  sort() {
    console.log("started selectionsort at " + new Date());
    // reset hit counts
    this.swapCount = 0;
    for (var k=0; k<this.sortObjects.length; k++){
      this.sortObjects[k].hitCount = 0;
    }
    this.startSelectionSortFrom(0);
  }


  render() {
    return (
      <div id="selectionSort" className="sortGroup">
        <div className="data">
          {this.state.sortObjects.map ((item, index) => {
            const itemStyle = {
              width: item.value+10 + 'px',
            };
            var indicatorState = 'indicator ' + item.currentStart ? 'show' : 'hide';
            return <span key={index}>
              <div className="unit {item.inspecting ? 'inspecting' : ''}" style={itemStyle}></div>
              <div className={indicatorState}></div>
              <div className="clear"></div>
            </span>
            })}
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
          <button onClick={this.init}></button>
        </div>
      </div>
    );
  }
}

export default SelectionSort;