import React, { Component } from "react";
import SelectionSort from './SelectionSort.js'

class SortCollection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfElements: 50,
      currentSortAlgorithm: this.getRandomArray
    };
  }

  getSortData = () => {
    const values = this.state.currentSortAlgorithm();
    var sObjects = [];
    for (var i=0; i<values.length; i++) {
      sObjects.push({
        value: values[i],
        inspecting: false,
        currentStart: false,
        hitCount: 0
      });
    };
    return sObjects;
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
    return nums;
  }

  getDescendingArray = (numberOfElements) => {
    var nums = [];
    while (numberOfElements > 0) {
      nums.push(numberOfElements-1);
      numberOfElements--;
    }
    return nums;
  }

  getAscendingArray = (numberOfElements) => {
    var nums = [];
    var current = 0;
    while (current < numberOfElements) {
      nums.push(current);
      current++;
    }
    return nums;
  }

  getNearlySortedArray = (numberOfElements) => {
    var nums = [];
    var current = 0;
    while (current < numberOfElements) {
      nums.push(current);
      current++
    }
    var swapTotal = 5;
    var swaps = 0;
    while (swaps < swapTotal) {
      var num1 = Math.ceil(Math.random() * (numberOfElements-1));
      var num2 = num1+1;
      if (num2 < numberOfElements) {
        var temp = nums[num2];
        nums[num2] = nums[num1];
        nums[num1] = temp;
        swaps++;
      }
    }
    return nums;
  }

  scrambleAll = () => {
    this.currentSortAlgorithm = this.getRandomArray;
  }
  setDescending = () => {
    this.currentSortAlgorithm = this.getDescendingArray;
  }
  setAscending = () =>  {
    this.currentSortAlgorithm = this.getAscendingArray;
  }
  setNearlySorted = () =>  {
    this.currentSortAlgorithm = this.getNearlySortedArray;
  }
  startAll = () => {

  }
  
  render = () => {
    return (
      <div className="mainLayout">
        <SelectionSort getSortData={this.getSortData}></SelectionSort>
      </div>
    );
  }
}

export default SortCollection;
