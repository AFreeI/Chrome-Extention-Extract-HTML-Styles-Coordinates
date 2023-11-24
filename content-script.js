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
  // Build the tree starting from the specified element
  var domTree = buildTree(startElement);

  // Output the DOM tree to the console
  console.log("DOM Tree:", domTree);
} else {
  console.log('Element with class "start-from-here" not found.');
}
