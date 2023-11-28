// Function to recursively build a tree from DOM elements
function buildTree(element, styleFilter, parent = null) {
  var node = {
    type: element.tagName,
    visible: true,
    classes: element.classList.value,
    coordinates: element.getBoundingClientRect(),
    styles: getFilteredStyles(element, styleFilter),
    insideText: element.textContent.trim(),
    childrensORIHaveTextInside: Boolean(element.textContent.trim().length),
    children: [],
  };

  // Recursively build the tree for each child node
  for (var i = 0; i < element.children.length; i++) {
    node.children.push(buildTree(element.children[i], styleFilter, node)); // Pass current node as the parent
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
var startElement = document.querySelector(".hero-wrap");

if (startElement) {
  // Define the styles you want to filter
  var styleFilter = [
    "display",
    "flex",
    "color",
    "font-size",
    "border",
    "borderTopWidth",
    "borderBottomWidth",
    "borderRightWidth",
    "borderLeftWidth",
    "borderTopStyle",
    "borderBottomStyle",
    "borderRightStyle",
    "borderLeftStyle",
    "borderTopColor",
    "borderBottomColor",
    "borderRightColor",
    "borderLeftColor",
  ];

  // Build the tree starting from the specified element with filtered styles
  var domTree = buildTree(startElement, styleFilter);

  // Output the DOM tree to the console
  console.log("Filtered DOM Tree:", domTree);
} else {
  console.log('Element with class "start-from-here" not found.');
}
/**/

/* Without Filter */
/*
// Function to recursively build a tree from DOM elements
function buildTree(element) {
  var node = {
    tagName: element.tagName,
    coordinates: element.getBoundingClientRect(),
    styles: window.getComputedStyle(element),
    children: [],
  };

  // Recursively build the tree for each child node
  for (var i = 0; i < element.children.length; i++) {
    node.children.push(buildTree(element.children[i]));
  }

  return node;
}

// Find the starting element by class (you can use getElementById for IDs)
var startElement = document.querySelector(".features");

if (startElement) {
  // Build the tree starting from the specified element with all computed styles
  var domTree = buildTree(startElement);

  // Output the DOM tree to the console
  console.log("DOM Tree with All Computed Styles:", domTree);
} else {
  console.log('Element with class "features" not found.');
}
/**/
