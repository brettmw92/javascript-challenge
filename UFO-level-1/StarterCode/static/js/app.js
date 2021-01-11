// from data.js
var tableData = data;

d3.select("#submit").on("click", filterIt):
d3.select("form").on("submit",filterIt);
d3.select("clear").on("click",buildPage(tableData));


// This function is triggered when the button is clicked
function handleClick() {
  console.log("Filtered");
  console.log(d3.event.target);
}