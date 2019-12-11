(this["webpackJsonpreact-sort-visualizer"]=this["webpackJsonpreact-sort-visualizer"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),s=a.n(l),c=(a(14),a(8)),o=a.n(c),i=(a(15),a(1)),u=a(4),m=a(3),d=a(5),g=a(2),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({delay:e.target.value})},a.componentDidMount=function(){a.setSortData(a.props.getSortData())},a.actualHits=function(){for(var e=0,t=0;t<a.values.length;t++)e+=a.values[t].hitCount;return e},a.setSortData=function(e){a.setState({sortObjects:e,actualHits:0,swapCount:0})},a.swap=function(e,t){if(e!==t){var n=a.state.sortObjects.slice(),r=n[e].value;n[e].value=n[t].value,n[t].value=r,a.setState({sortObjects:n,swapCount:a.state.swapCount+1})}},a.checkSmallest=function(e){a.state.sortObjects[e].value<a.state._smallest&&a.setState({_smallest:a.state.sortObjects[e].value,_smallestIndex:e});var t=a.state.sortObjects.slice();t[e].inspecting=!1,e+1<=t.length-1?(t[e+1].inspecting=!0,a.setState({sortObjects:t,actualHits:a.state.actualHits+1}),setTimeout((function(){a.checkSmallest(e+1)}),a.state.delay)):a.completeSelectionSortFrom()},a.startSelectionSortFrom=function(e){if(!(e>a.state.sortObjects.length-1)){var t=a.state.sortObjects.slice();t[e].inspecting=!0,t[e].currentStart=!0,a.setState({_smallestIndex:e,_startingIndex:e,_smallest:a.state.sortObjects[e].value,sortObjects:t}),setTimeout((function(){a.checkSmallest(a.state._startingIndex)}),a.state.delay)}},a.completeSelectionSortFrom=function(){a.swap(a.state._startingIndex,a.state._smallestIndex);var e=a.state.sortObjects.slice();e[a.state._startingIndex].currentStart=!1,a.setState({sortObjects:e}),a.startSelectionSortFrom(a.state._startingIndex+1)},a.sort=function(){console.log("started selectionsort at "+new Date),a.setState({swapCount:0}),a.startSelectionSortFrom(0)},a.render=function(){return r.a.createElement("div",{id:"selectionSort",className:"sortGroup"},r.a.createElement("div",{className:"data"},a.state.sortObjects.map((function(e,t){var a={width:e.value+10+"px"},n="indicator "+(e.currentStart?"show":"hide"),l="unit "+(e.inspecting?"inspecting":"");return r.a.createElement("span",{key:t},r.a.createElement("div",{className:l,style:a}),r.a.createElement("div",{className:n}),r.a.createElement("div",{className:"clear"}))}))),r.a.createElement("div",{className:"sortInfo"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Selection Sort"),r.a.createElement("label",null,"Average:"),r.a.createElement("div",{className:"sortData"},"O(",r.a.createElement("i",null,"n"),r.a.createElement("sup",null,"2"),")"),r.a.createElement("label",null,"Worst:"),r.a.createElement("div",{className:"sortData"},"O(",r.a.createElement("i",null,"n"),r.a.createElement("sup",null,"2"),")"),r.a.createElement("label",null,"Best:"),r.a.createElement("div",{className:"sortData"},"O(",r.a.createElement("i",null,"n"),r.a.createElement("sup",null,"2"),")")),r.a.createElement("br",null),r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Actuals"),r.a.createElement("label",null,"Visited:"),r.a.createElement("div",{className:"sortData"},a.state.actualHits),r.a.createElement("label",null,"Swapped:"),r.a.createElement("div",{className:"sortData"},a.state.swapCount))),r.a.createElement("br",null),r.a.createElement("div",{className:"sortPanel"},r.a.createElement("br",{clear:"all"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"delay"},"delay"),": ",r.a.createElement("input",{id:"delay",type:"text",value:a.state.delay,onChange:a.handleDelayChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:a.sort},"sort"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:a.init},"scramble")))},a.state={numberOfElements:50,sortObjects:[],delay:10,actualHits:0,swapCount:0,_smallest:0,_smallestIndex:0},a.handleDelayChange=a.handleChange.bind(Object(g.a)(a)),a}return Object(d.a)(t,e),t}(n.Component),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getSortData=function(){var e=a.state.currentSortAlgorithm();console.log("Setting values: "+e.length);for(var t=[],n=0;n<e.length;n++)t.push({value:e[n],inspecting:!1,currentStart:!1,hitCount:0});return t},a.getRandomArray=function(){for(var e=0,t=[];e<a.state.numberOfElements;){var n=Math.ceil(Math.random()*a.state.numberOfElements);t.includes(n)||(t.push(n),e++)}return t},a.getDescendingArray=function(e){for(var t=[];e>0;)t.push(e-1),e--;return t},a.getAscendingArray=function(e){for(var t=[],a=0;a<e;)t.push(a),a++;return t},a.getNearlySortedArray=function(e){for(var t=[],a=0;a<e;)t.push(a),a++;for(var n=0;n<5;){var r=Math.ceil(Math.random()*(e-1)),l=r+1;if(l<e){var s=t[l];t[l]=t[r],t[r]=s,n++}}return t},a.scrambleAll=function(){a.currentSortAlgorithm=a.getRandomArray},a.setDescending=function(){a.currentSortAlgorithm=a.getDescendingArray},a.setAscending=function(){a.currentSortAlgorithm=a.getAscendingArray},a.setNearlySorted=function(){a.currentSortAlgorithm=a.getNearlySortedArray},a.startAll=function(){},a.render=function(){return r.a.createElement("div",{className:"mainLayout"},r.a.createElement(v,{getSortData:a.getSortData}))},a.state={numberOfElements:50,currentSortAlgorithm:a.getRandomArray},a}return Object(d.a)(t,e),t}(n.Component);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:o.a,className:"App-logo",alt:"logo"})),r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.0edddae8.chunk.js.map