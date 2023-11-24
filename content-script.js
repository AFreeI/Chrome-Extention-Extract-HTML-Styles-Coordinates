// Function to recursively build a tree from DOM elements
function buildTree(element, styleFilter) {
  var node = {
    tagName: element.tagName,
    coordinates: element.getBoundingClientRect(),
    styles: getFilteredStyles(element, styleFilter),
    children: [],
  };

  // Recursively build the tree for each child node
  for (var i = 0; i < element.children.length; i++) {
    node.children.push(buildTree(element.children[i], styleFilter));
  }

  return node;
}

// Function to filter computed styles based on a condition
function getFilteredStyles(element, styleFilter) {
  var computedStyles = window.getComputedStyle(element);
  var filteredStyles = {};

  // Apply your filtering logic here
  for (var i = 0; i < styleFilter.length; i++) {
    var property = styleFilter[i];
    filteredStyles[property] = computedStyles[property];
  }

  return filteredStyles;
}

// Find the starting element by class (you can use getElementById for IDs)
var startElement = document.querySelector(".features");

if (startElement) {
  // Define the styles you want to filter
  var styleFilter = ["flex", "color", "font-size", "border"];

  // Build the tree starting from the specified element with filtered styles
  var domTree = buildTree(startElement, styleFilter);

  // Output the DOM tree to the console
  console.log("Filtered DOM Tree:", domTree);
} else {
  console.log('Element with class "start-from-here" not found.');
}
