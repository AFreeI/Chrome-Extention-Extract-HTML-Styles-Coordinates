// Function to recursively build a tree from DOM elements
function buildTree(element, styleFilter) {
  var node = {
    type: element.tagName,
    visible: true,
    classes: element.classList.value,
    coordinates: element.getBoundingClientRect(),
    styles: getFilteredStyles(element, styleFilter),
    insideText: element.textContent.trim(),
    existInsideText: Boolean(element.textContent.trim().length),
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
var startElement = document.querySelector(".creativity");

if (startElement) {
  // Define the styles you want to filter
  var styleFilter = ["display", "flex", "color", "font-size", "border"];

  // Build the tree starting from the specified element with filtered styles
  var domTree = buildTree(startElement, styleFilter);

  // Output the DOM tree to the console
  console.log("Filtered DOM Tree:", domTree);
} else {
  console.log('Element with class "start-from-here" not found.');
}




var colors = [
  ["beige", "#f5f5dc"],
  ["aqua", "#00ffff"],
  ["brown", "#a52a2a"],
  ["aquamarine", "#7fffd4"],
  ["darkgoldenrod", "#b8860b"],
  ["blue", "#0000ff"],
  ["burlywood", "#deb887"],
  ["blueviolet", "#8a2be2"],
  ["cadetblue", "#5f9ea0"],
  ["chartreuse", "#7fff00"],
  ["coral", "#ff7f50"],
  ["cornflowerblue", "#6495ed"],
  ["darkgreen", "#006400"],
  ["darkorange", "#ff8c00"],
  ["darkseagreen", "#8fbc8f"],
  ["gold", "#ffd700"],
  ["gray", "#808080"],
  ["greenyellow", "#adff2f"],
  ["lightpink", "#ffb6c1"],
  ["lime", "#00ff00"],
  ["zanah", "#daecd6"],
  ["magenta", "#ff00ff"],
  ["olive", "#808000"],
  ["saddlebrown", "#8b4513"],
  ["yellow", "#ffff00"],
  ["yellowgreen", "#9acd32"],
];

//aici pastram coordonatele unice
var layouts = [];
var fflayouts = [];

function colectRows(element, depth) {
  if (typeof depth == 'number')
    depth++;
  else
    depth = 1;

  var rect = element.getBoundingClientRect();
  var cc = {
    left: Math.ceil(rect.left + window.scrollX),
    top: Math.ceil(rect.top + window.scrollY),
    height: Math.ceil(rect.height),
    width: Math.ceil(rect.width),
    bottom: Math.ceil(rect.bottom + window.scrollY),
    right: Math.ceil(rect.right + window.scrollX),
    children: []
  };

  findchild(layouts, cc);

  for (var i = 0; i < element.children.length; i++) {
    colectRows(element.children[i], depth);
  }


/*
  if (exists === -1) {
    var parent = layouts.findIndex(el => el.left <= cc.left && el.top <= cc.top &&
        el.bottom >= cc.bottom && el.right >= cc.right);
    if (parent>-1) {
      //layouts.splice(parent, 0, 'kk', cc);
      layouts[parent].children.push(cc);

    } else {
      layouts.push(cc);
    }
  }
*/


/*
  var node = {
    type: element.tagName,
    visible: true,
    coordinates: element.getBoundingClientRect(),
    insideText: element.textContent.trim(),
    existInsideText: Boolean(element.textContent.trim().length),
    children: [],
  };

  // Recursively build the tree for each child node
  for (var i = 0; i < element.children.length; i++) {
    var rect = element.children[i].getBoundingClientRect();
    if (rect.width == 0 || rect.height == 0) continue;
    color = depth>25 ? 25 : depth;
    //element.children[i].style.border = "3px solid " + colors[color][0];
    node.children.push(colectRows(element.children[i], depth));
  }

  return arr;
  //return node;

 */
}

colectRows(document.body);
//dupa ce am strins ierarhia blocurilor, la final trecem prin tot si cine are doar un child, il mutam cu un nivel mai sus
//de exemplu, daca este un div de 1600x400 si in el este ald div de 1500x360, mutam contentul din div2 in parent div
//la fel daca o sa fie paragraph in div, mutam textul sus

for (var i = 0; i < layouts.length; i++) {
  mergewithparent(layouts[i]);
}
console.log(layouts);


function findchild(parentrect, cc) {
  //daca are aceleashi coordonate, si daca heigh sau with au diferenta de 1px, atunci consideram un singur bloc, nu le dublam
  const exists = parentrect.findIndex(el => (el.left === cc.left && el.top === cc.top &&
          (el.height === cc.height || el.height === cc.height+1 || el.height === cc.height-1) &&
          (el.width === cc.width || el.width === cc.width+1 || el.width === cc.width-1)) ||
      (cc.width == 0 || cc.height == 0 || cc.left < 0 || cc.top < 0)
  ) > -1;
  if (exists) return;

  var parent = parentrect.findIndex(el => el.left <= cc.left && el.top <= cc.top &&
      el.bottom >= cc.bottom && el.right >= cc.right);

  if (parent>-1) {
      findchild(parentrect[parent].children, cc);
  } else {
      parentrect.push(cc);
  }
}

function mergewithparent(node) {
  // console.log('o'); console.log(node); console.log('ss');
  for (var i = 0; i < node.children.length; i++) {
    if (node.children.length == 1) {
      node.children = node.children[0].children;
      mergewithparent(node);
    } else {
      mergewithparent(node.children[i]);
    }
  }
}










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
*/
