// from data.js
var tableData = data;
// console.log(data);

var tbody = d3.select("tbody")
// console.log(tbody);

data.forEach(function(ufos) {
    console.log(ufos);
});

// d3.select("#submit").on("click", handleClick);
// d3.select("form").on("submit", handleClick);
// d3.select("clear").on("click",ufo_table(tableData));


// // // // This function is triggered when the button is clicked
// // function handleClick() {
// //   console.log("Filtered");
// //   console.log(d3.event.target);
// //   var dateInput = d3.select("#dateInput").node().value;

// // }

// // function ufo_table(datastuff) {
// //     console.log("Matching sightings table done");

// // }