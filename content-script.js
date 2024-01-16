/* */

// Initialize a counter for generating unique IDs
let nodeIdCounter = 0;

// Function to recursively build a tree from DOM elements
function buildTree(element, styleFilter, parent = null) {
  // Increment the counter to get a unique ID
  const nodeId = nodeIdCounter++;

  var node = {
    id: "id" + nodeId,
    type: element.tagName,
    visible: true,
    classes: element.classList.value,
    coordinates: element.getBoundingClientRect(),
    styles: getFilteredStyles(element, styleFilter),
    insideText: element.textContent.trim(),
    iAMText:
      element.childNodes.length === 1 && element.childNodes[0].nodeType === 3,
    previousSibling:
      element.previousSibling && element.previousSibling.nodeValue
        ? element.previousSibling.nodeValue.trim()
        : "",
    nextSibling:
      element.nextSibling && element.nextSibling.nodeValue
        ? element.nextSibling.nodeValue.trim()
        : "",
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

// Cortex

//var startElement = document.querySelector(".link-btn.white.w-inline-block"); // https://i.imgur.com/X41kDyf.png +

//var startElement = document.querySelector(".primary-btn.hero.w-inline-block"); // https://i.imgur.com/BOm5N38.png +

//var startElement = document.querySelector(".ft-btn.w-inline-block"); // https://i.imgur.com/X41kDyf.png +

// var startElement = document.querySelector(".ft-contact-link"); // https://i.imgur.com/H6JPKZZ.png +

// var startElement = document.querySelector(".header-btn.white"); // https://i.imgur.com/XEkMCWo.png +

// var startElement = document.querySelector(".w-commerce-commercecartopenlink.cart.white.w-inline-block"); // https://i.imgur.com/i2jtCXY.png +

// Toolset.com

// var startElement = document.querySelector(".tb-container-inner .tb-button__link"); // https://i.imgur.com/F2fFFl1.png +

// WebFlow

// var startElement = document.querySelector(".button-large.cc-open-template.w-inline-block"); // https://i.imgur.com/3exGZN4.png +

// var startElement = document.querySelector(".button.w-inline-block"); // https://i.imgur.com/GGz1as3.png +

// var startElement = document.querySelector(".g-footer-list_item-link.cc-combo.w-inline-block"); // https://i.imgur.com/B6K30Qx.png +

// var startElement = document.querySelector(".s_content-w.is--enterprise .button.w-inline-block"); // https://i.imgur.com/4ZWQxfd.png +

// DigitalOcean

 // var startElement = document.querySelector(".LazyLink___StyledA-sc-yi29t7-1.cjtx.SignupButtons___StyledLazyLink-sc-1j4c66p-0.fBroQX"); // https://i.imgur.com/kBUbKzv.png +

 // var startElement = document.querySelector(".CardPricingstyles__StyledMainContent-sc-1c4kjfb-2 .LinkTextstyles-sc-jz3jcd-0.eIuOhE"); // https://i.imgur.com/DCxvMYF.png

// Shopify

// var startElement = document.querySelector(".group.inline-block.w-full.text-white"); // https://i.imgur.com/FVY6F8x.png +

// Zaimania

// var startElement = document.querySelector(".w-commerce-commercecartopenlink.cart-button.w-inline-block"); // https://i.imgur.com/B8f49kd.png // https://zaimania.webflow.io/home-pages/home-v1 +

// var startElement = document.querySelector(".banner-v1-wrapper .primary-button.w-inline-block"); // https://i.imgur.com/FbaDwXR.png // https://zaimania.webflow.io/home-pages/home-v1 +

// Contra

// var startElement = document.querySelector(".framer-15xb5su.framer-1j9pppm"); // https://i.imgur.com/bQTiveo.png // https://contra.com/portfolios +

// var startElement = document.querySelector(".c-imalmM"); // https://i.imgur.com/kdqeh3W.png // https://contra.com/portfolios +

// var startElement = document.querySelector(".c-inMWFm.c-inMWFm-bYRpZE-size-md.c-inMWFm-iGzQvm-variant-outlineTag"); // https://i.imgur.com/vG3ifmz.png // https://contra.com/portfolios +

// var startElement = document.querySelector(".c-fSjrHW.c-fSjrHW-dTgCPt-isActive-false"); // https://i.imgur.com/dtzi74y.png // https://contra.com/ +

// var startElement = document.querySelector(".c-fDQBDF"); // https://i.imgur.com/LLgZFji.png // https://contra.com/ +

// var startElement = document.querySelector(".c-eEjXFo"); // https://i.imgur.com/phgcQsd.png // https://contra.com/ +

// var startElement = document.querySelector(".c-jbeloR"); // https://i.imgur.com/11jEHY9.png // https://contra.com/ +

//var startElement = document.querySelector(".c-cJEQik"); // https://i.imgur.com/qzh91b0.png // https://contra.com/ +

 var startElement = document.querySelector(".c-inMWFm.c-inMWFm-bYRpZE-size-md.c-inMWFm-fNiefI-variant-outline"); // https://i.imgur.com/EOXLAZg.png // https://contra.com/ +

////////
////////
////////
////////

///////////////////////////////////////////////////////////
// Button GROUP
///////////////////////////////////////////////////////////

//var startElement = document.querySelector(".hero-btn-wrap"); // https://i.imgur.com/4RSta5G.png

///////////////////////////////////////////////////////////
// HERO
///////////////////////////////////////////////////////////

//var startElement = document.querySelector(".hero > .w-layout-blockcontainer.container.w-container"); // https://i.imgur.com/4RSta5G.png

///////////////////////////////////////////////////////////
// LOGOS
///////////////////////////////////////////////////////////

//var startElement = document.querySelector(".logo-scroll"); // https://i.imgur.com/clZRVwZ.png

///////////////////////////////////////////////////////////
// Header
///////////////////////////////////////////////////////////

//var startElement = document.querySelector(".header.white"); // https://i.imgur.com/7S6biJ8.png

///////////////////////////////////////////////////////////
// ... //
///////////////////////////////////////////////////////////

//var startElement = document.querySelector("[data-cta-position='footer hero']");

if (startElement) {
  // Define the styles you want to filter
  var styleFilter = [
    "accentColor",

    "additiveSymbols",

    "alignContent",

    "alignItems",

    "alignSelf",

    "alignmentBaseline",

    "all",

    "animation",

    "animationComposition",

    "animationDelay",

    "animationDirection",

    "animationDuration",

    "animationFillMode",

    "animationIterationCount",

    "animationName",

    "animationPlayState",

    "animationRange",

    "animationRangeEnd",

    "animationRangeStart",

    "animationTimeline",

    "animationTimingFunction",

    "appRegion",

    "appearance",

    "ascentOverride",

    "aspectRatio",

    "backdropFilter",

    "backfaceVisibility",

    "background",

    "backgroundAttachment",

    "backgroundBlendMode",

    "backgroundClip",

    "backgroundColor",

    "backgroundImage",

    "backgroundOrigin",

    "backgroundPosition",

    "backgroundPositionX",

    "backgroundPositionY",

    "backgroundRepeat",

    "backgroundRepeatX",

    "backgroundRepeatY",

    "backgroundSize",

    "basePalette",

    "baselineShift",

    "baselineSource",

    "blockSize",

    "border",

    "borderBlock",

    "borderBlockColor",

    "borderBlockEnd",

    "borderBlockEndColor",

    "borderBlockEndStyle",

    "borderBlockEndWidth",

    "borderBlockStart",

    "borderBlockStartColor",

    "borderBlockStartStyle",

    "borderBlockStartWidth",

    "borderBlockStyle",

    "borderBlockWidth",

    "borderBottom",

    "borderBottomColor",

    "borderBottomLeftRadius",

    "borderBottomRightRadius",

    "borderBottomStyle",

    "borderBottomWidth",

    "borderCollapse",

    "borderColor",

    "borderEndEndRadius",

    "borderEndStartRadius",

    "borderImage",

    "borderImageOutset",

    "borderImageRepeat",

    "borderImageSlice",

    "borderImageSource",

    "borderImageWidth",

    "borderInline",

    "borderInlineColor",

    "borderInlineEnd",

    "borderInlineEndColor",

    "borderInlineEndStyle",

    "borderInlineEndWidth",

    "borderInlineStart",

    "borderInlineStartColor",

    "borderInlineStartStyle",

    "borderInlineStartWidth",

    "borderInlineStyle",

    "borderInlineWidth",

    "borderLeft",

    "borderLeftColor",

    "borderLeftStyle",

    "borderLeftWidth",

    "borderRadius",

    "borderRight",

    "borderRightColor",

    "borderRightStyle",

    "borderRightWidth",

    "borderSpacing",

    "borderStartEndRadius",

    "borderStartStartRadius",

    "borderStyle",

    "borderTop",

    "borderTopColor",

    "borderTopLeftRadius",

    "borderTopRightRadius",

    "borderTopStyle",

    "borderTopWidth",

    "borderWidth",

    "bottom",

    "boxShadow",

    "boxSizing",

    "breakAfter",

    "breakBefore",

    "breakInside",

    "bufferedRendering",

    "captionSide",

    "caretColor",

    "clear",

    "clip",

    "clipPath",

    "clipRule",

    "color",

    "colorInterpolation",

    "colorInterpolationFilters",

    "colorRendering",

    "colorScheme",

    "columnCount",

    "columnFill",

    "columnGap",

    "columnRule",

    "columnRuleColor",

    "columnRuleStyle",

    "columnRuleWidth",

    "columnSpan",

    "columnWidth",

    "columns",

    "contain",

    "containIntrinsicBlockSize",

    "containIntrinsicHeight",

    "containIntrinsicInlineSize",

    "containIntrinsicSize",

    "containIntrinsicWidth",

    "container",

    "containerName",

    "containerType",

    "content",

    "contentVisibility",

    "counterIncrement",

    "counterReset",

    "counterSet",

    "cursor",

    "cx",

    "cy",

    "d",

    "descentOverride",

    "direction",

    "display",

    "dominantBaseline",

    "emptyCells",

    "fallback",

    "fill",

    "fillOpacity",

    "fillRule",

    "filter",

    "flex",

    "flexBasis",

    "flexDirection",

    "flexFlow",

    "flexGrow",

    "flexShrink",

    "flexWrap",

    "float",

    "floodColor",

    "floodOpacity",

    "font",

    "fontDisplay",

    "fontFamily",

    "fontFeatureSettings",

    "fontKerning",

    "fontOpticalSizing",

    "fontPalette",

    "fontSize",

    "fontStretch",

    "fontStyle",

    "fontSynthesis",

    "fontSynthesisSmallCaps",

    "fontSynthesisStyle",

    "fontSynthesisWeight",

    "fontVariant",

    "fontVariantAlternates",

    "fontVariantCaps",

    "fontVariantEastAsian",

    "fontVariantLigatures",

    "fontVariantNumeric",

    "fontVariantPosition",

    "fontVariationSettings",

    "fontWeight",

    "forcedColorAdjust",

    "gap",

    "grid",

    "gridArea",

    "gridAutoColumns",

    "gridAutoFlow",

    "gridAutoRows",

    "gridColumn",

    "gridColumnEnd",

    "gridColumnGap",

    "gridColumnStart",

    "gridGap",

    "gridRow",

    "gridRowEnd",

    "gridRowGap",

    "gridRowStart",

    "gridTemplate",

    "gridTemplateAreas",

    "gridTemplateColumns",

    "gridTemplateRows",

    "height",

    "hyphenateCharacter",

    "hyphenateLimitChars",

    "hyphens",

    "imageOrientation",

    "imageRendering",

    "inherits",

    "initialLetter",

    "initialValue",

    "inlineSize",

    "inset",

    "insetBlock",

    "insetBlockEnd",

    "insetBlockStart",

    "insetInline",

    "insetInlineEnd",

    "insetInlineStart",

    "isolation",

    "justifyContent",

    "justifyItems",

    "justifySelf",

    "left",

    "letterSpacing",

    "lightingColor",

    "lineBreak",

    "lineGapOverride",

    "lineHeight",

    "listStyle",

    "listStyleImage",

    "listStylePosition",

    "listStyleType",

    "margin",

    "marginBlock",

    "marginBlockEnd",

    "marginBlockStart",

    "marginBottom",

    "marginInline",

    "marginInlineEnd",

    "marginInlineStart",

    "marginLeft",

    "marginRight",

    "marginTop",

    "marker",

    "markerEnd",

    "markerMid",

    "markerStart",

    "mask",

    "maskType",

    "mathDepth",

    "mathShift",

    "mathStyle",

    "maxBlockSize",

    "maxHeight",

    "maxInlineSize",

    "maxWidth",

    "minBlockSize",

    "minHeight",

    "minInlineSize",

    "minWidth",

    "mixBlendMode",

    "negative",

    "objectFit",

    "objectPosition",

    "objectViewBox",

    "offset",

    "offsetAnchor",

    "offsetDistance",

    "offsetPath",

    "offsetPosition",

    "offsetRotate",

    "opacity",

    "order",

    "orphans",

    "outline",

    "outlineColor",

    "outlineOffset",

    "outlineStyle",

    "outlineWidth",

    "overflow",

    "overflowAnchor",

    "overflowClipMargin",

    "overflowWrap",

    "overflowX",

    "overflowY",

    "overlay",

    "overrideColors",

    "overscrollBehavior",

    "overscrollBehaviorBlock",

    "overscrollBehaviorInline",

    "overscrollBehaviorX",

    "overscrollBehaviorY",

    "pad",

    "padding",

    "paddingBlock",

    "paddingBlockEnd",

    "paddingBlockStart",

    "paddingBottom",

    "paddingInline",

    "paddingInlineEnd",

    "paddingInlineStart",

    "paddingLeft",

    "paddingRight",

    "paddingTop",

    "page",

    "pageBreakAfter",

    "pageBreakBefore",

    "pageBreakInside",

    "pageOrientation",

    "paintOrder",

    "perspective",

    "perspectiveOrigin",

    "placeContent",

    "placeItems",

    "placeSelf",

    "pointerEvents",

    "position",

    "prefix",

    "quotes",

    "r",

    "range",

    "resize",

    "right",

    "rotate",

    "rowGap",

    "rubyPosition",

    "rx",

    "ry",

    "scale",

    "scrollBehavior",

    "scrollMargin",

    "scrollMarginBlock",

    "scrollMarginBlockEnd",

    "scrollMarginBlockStart",

    "scrollMarginBottom",

    "scrollMarginInline",

    "scrollMarginInlineEnd",

    "scrollMarginInlineStart",

    "scrollMarginLeft",

    "scrollMarginRight",

    "scrollMarginTop",

    "scrollPadding",

    "scrollPaddingBlock",

    "scrollPaddingBlockEnd",

    "scrollPaddingBlockStart",

    "scrollPaddingBottom",

    "scrollPaddingInline",

    "scrollPaddingInlineEnd",

    "scrollPaddingInlineStart",

    "scrollPaddingLeft",

    "scrollPaddingRight",

    "scrollPaddingTop",

    "scrollSnapAlign",

    "scrollSnapStop",

    "scrollSnapType",

    "scrollTimeline",

    "scrollTimelineAxis",

    "scrollTimelineName",

    "scrollbarGutter",

    "shapeImageThreshold",

    "shapeMargin",

    "shapeOutside",

    "shapeRendering",

    "size",

    "sizeAdjust",

    "speak",

    "speakAs",

    "src",

    "stopColor",

    "stopOpacity",

    "stroke",

    "strokeDasharray",

    "strokeDashoffset",

    "strokeLinecap",

    "strokeLinejoin",

    "strokeMiterlimit",

    "strokeOpacity",

    "strokeWidth",

    "suffix",

    "symbols",

    "syntax",

    "system",

    "tabSize",

    "tableLayout",

    "textAlign",

    "textAlignLast",

    "textAnchor",

    "textCombineUpright",

    "textDecoration",

    "textDecorationColor",

    "textDecorationLine",

    "textDecorationSkipInk",

    "textDecorationStyle",

    "textDecorationThickness",

    "textEmphasis",

    "textEmphasisColor",

    "textEmphasisPosition",

    "textEmphasisStyle",

    "textIndent",

    "textOrientation",

    "textOverflow",

    "textRendering",

    "textShadow",

    "textSizeAdjust",

    "textTransform",

    "textUnderlineOffset",

    "textUnderlinePosition",

    "textWrap",

    "timelineScope",

    "top",

    "touchAction",

    "transform",

    "transformBox",

    "transformOrigin",

    "transformStyle",

    "transition",

    "transitionBehavior",

    "transitionDelay",

    "transitionDuration",

    "transitionProperty",

    "transitionTimingFunction",

    "translate",

    "unicodeBidi",

    "unicodeRange",

    "userSelect",

    "vectorEffect",

    "verticalAlign",

    "viewTimeline",

    "viewTimelineAxis",

    "viewTimelineInset",

    "viewTimelineName",

    "viewTransitionName",

    "visibility",

    "webkitAlignContent",

    "webkitAlignItems",

    "webkitAlignSelf",

    "webkitAnimation",

    "webkitAnimationDelay",

    "webkitAnimationDirection",

    "webkitAnimationDuration",

    "webkitAnimationFillMode",

    "webkitAnimationIterationCount",

    "webkitAnimationName",

    "webkitAnimationPlayState",

    "webkitAnimationTimingFunction",

    "webkitAppRegion",

    "webkitAppearance",

    "webkitBackfaceVisibility",

    "webkitBackgroundClip",

    "webkitBackgroundOrigin",

    "webkitBackgroundSize",

    "webkitBorderAfter",

    "webkitBorderAfterColor",

    "webkitBorderAfterStyle",

    "webkitBorderAfterWidth",

    "webkitBorderBefore",

    "webkitBorderBeforeColor",

    "webkitBorderBeforeStyle",

    "webkitBorderBeforeWidth",

    "webkitBorderBottomLeftRadius",

    "webkitBorderBottomRightRadius",

    "webkitBorderEnd",

    "webkitBorderEndColor",

    "webkitBorderEndStyle",

    "webkitBorderEndWidth",

    "webkitBorderHorizontalSpacing",

    "webkitBorderImage",

    "webkitBorderRadius",

    "webkitBorderStart",

    "webkitBorderStartColor",

    "webkitBorderStartStyle",

    "webkitBorderStartWidth",

    "webkitBorderTopLeftRadius",

    "webkitBorderTopRightRadius",

    "webkitBorderVerticalSpacing",

    "webkitBoxAlign",

    "webkitBoxDecorationBreak",

    "webkitBoxDirection",

    "webkitBoxFlex",

    "webkitBoxOrdinalGroup",

    "webkitBoxOrient",

    "webkitBoxPack",

    "webkitBoxReflect",

    "webkitBoxShadow",

    "webkitBoxSizing",

    "webkitClipPath",

    "webkitColumnBreakAfter",

    "webkitColumnBreakBefore",

    "webkitColumnBreakInside",

    "webkitColumnCount",

    "webkitColumnGap",

    "webkitColumnRule",

    "webkitColumnRuleColor",

    "webkitColumnRuleStyle",

    "webkitColumnRuleWidth",

    "webkitColumnSpan",

    "webkitColumnWidth",

    "webkitColumns",

    "webkitFilter",

    "webkitFlex",

    "webkitFlexBasis",

    "webkitFlexDirection",

    "webkitFlexFlow",

    "webkitFlexGrow",

    "webkitFlexShrink",

    "webkitFlexWrap",

    "webkitFontFeatureSettings",

    "webkitFontSmoothing",

    "webkitHyphenateCharacter",

    "webkitJustifyContent",

    "webkitLineBreak",

    "webkitLineClamp",

    "webkitLocale",

    "webkitLogicalHeight",

    "webkitLogicalWidth",

    "webkitMarginAfter",

    "webkitMarginBefore",

    "webkitMarginEnd",

    "webkitMarginStart",

    "webkitMask",

    "webkitMaskBoxImage",

    "webkitMaskBoxImageOutset",

    "webkitMaskBoxImageRepeat",

    "webkitMaskBoxImageSlice",

    "webkitMaskBoxImageSource",

    "webkitMaskBoxImageWidth",

    "webkitMaskClip",

    "webkitMaskComposite",

    "webkitMaskImage",

    "webkitMaskOrigin",

    "webkitMaskPosition",

    "webkitMaskPositionX",

    "webkitMaskPositionY",

    "webkitMaskRepeat",

    "webkitMaskRepeatX",

    "webkitMaskRepeatY",

    "webkitMaskSize",

    "webkitMaxLogicalHeight",

    "webkitMaxLogicalWidth",

    "webkitMinLogicalHeight",

    "webkitMinLogicalWidth",

    "webkitOpacity",

    "webkitOrder",

    "webkitPaddingAfter",

    "webkitPaddingBefore",

    "webkitPaddingEnd",

    "webkitPaddingStart",

    "webkitPerspective",

    "webkitPerspectiveOrigin",

    "webkitPerspectiveOriginX",

    "webkitPerspectiveOriginY",

    "webkitPrintColorAdjust",

    "webkitRtlOrdering",

    "webkitRubyPosition",

    "webkitShapeImageThreshold",

    "webkitShapeMargin",

    "webkitShapeOutside",

    "webkitTapHighlightColor",

    "webkitTextCombine",

    "webkitTextDecorationsInEffect",

    "webkitTextEmphasis",

    "webkitTextEmphasisColor",

    "webkitTextEmphasisPosition",

    "webkitTextEmphasisStyle",

    "webkitTextFillColor",

    "webkitTextOrientation",

    "webkitTextSecurity",

    "webkitTextSizeAdjust",

    "webkitTextStroke",

    "webkitTextStrokeColor",

    "webkitTextStrokeWidth",

    "webkitTransform",

    "webkitTransformOrigin",

    "webkitTransformOriginX",

    "webkitTransformOriginY",

    "webkitTransformOriginZ",

    "webkitTransformStyle",

    "webkitTransition",

    "webkitTransitionDelay",

    "webkitTransitionDuration",

    "webkitTransitionProperty",

    "webkitTransitionTimingFunction",

    "webkitUserDrag",

    "webkitUserModify",

    "webkitUserSelect",

    "webkitWritingMode",

    "whiteSpace",

    "whiteSpaceCollapse",

    "widows",

    "width",

    "willChange",

    "wordBreak",

    "wordSpacing",

    "wordWrap",

    "writingMode",

    "x",

    "y",

    "zIndex",

    "zoom",
  ];

  // Build the tree starting from the specified element with filtered styles
  var domTree = buildTree(startElement, styleFilter);

  // Output the DOM tree to the console
  console.log("Filtered DOM Tree:", domTree);
} else {
  console.log('Element with class "start-from-here" not found.');
}
/* */

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
var startElement = document.querySelector(".feature-img");

if (startElement) {
  // Build the tree starting from the specified element with all computed styles
  var domTree = buildTree(startElement);

  // Output the DOM tree to the console
  console.log("DOM Tree with All Computed Styles:", domTree);
} else {
  console.log('Element with class "features" not found.');
}
/* */

/* 
{
  "0": "accent-color",
  "1": "align-content",
  "2": "align-items",
  "3": "align-self",
  "4": "alignment-baseline",
  "5": "animation-composition",
  "6": "animation-delay",
  "7": "animation-direction",
  "8": "animation-duration",
  "9": "animation-fill-mode",
  "10": "animation-iteration-count",
  "11": "animation-name",
  "12": "animation-play-state",
  "13": "animation-range-end",
  "14": "animation-range-start",
  "15": "animation-timeline",
  "16": "animation-timing-function",
  "17": "app-region",
  "18": "appearance",
  "19": "backdrop-filter",
  "20": "backface-visibility",
  "21": "background-attachment",
  "22": "background-blend-mode",
  "23": "background-clip",
  "24": "background-color",
  "25": "background-image",
  "26": "background-origin",
  "27": "background-position",
  "28": "background-repeat",
  "29": "background-size",
  "30": "baseline-shift",
  "31": "baseline-source",
  "32": "block-size",
  "33": "border-block-end-color",
  "34": "border-block-end-style",
  "35": "border-block-end-width",
  "36": "border-block-start-color",
  "37": "border-block-start-style",
  "38": "border-block-start-width",
  "39": "border-bottom-color",
  "40": "border-bottom-left-radius",
  "41": "border-bottom-right-radius",
  "42": "border-bottom-style",
  "43": "border-bottom-width",
  "44": "border-collapse",
  "45": "border-end-end-radius",
  "46": "border-end-start-radius",
  "47": "border-image-outset",
  "48": "border-image-repeat",
  "49": "border-image-slice",
  "50": "border-image-source",
  "51": "border-image-width",
  "52": "border-inline-end-color",
  "53": "border-inline-end-style",
  "54": "border-inline-end-width",
  "55": "border-inline-start-color",
  "56": "border-inline-start-style",
  "57": "border-inline-start-width",
  "58": "border-left-color",
  "59": "border-left-style",
  "60": "border-left-width",
  "61": "border-right-color",
  "62": "border-right-style",
  "63": "border-right-width",
  "64": "border-start-end-radius",
  "65": "border-start-start-radius",
  "66": "border-top-color",
  "67": "border-top-left-radius",
  "68": "border-top-right-radius",
  "69": "border-top-style",
  "70": "border-top-width",
  "71": "bottom",
  "72": "box-shadow",
  "73": "box-sizing",
  "74": "break-after",
  "75": "break-before",
  "76": "break-inside",
  "77": "buffered-rendering",
  "78": "caption-side",
  "79": "caret-color",
  "80": "clear",
  "81": "clip",
  "82": "clip-path",
  "83": "clip-rule",
  "84": "color",
  "85": "color-interpolation",
  "86": "color-interpolation-filters",
  "87": "color-rendering",
  "88": "column-count",
  "89": "column-gap",
  "90": "column-rule-color",
  "91": "column-rule-style",
  "92": "column-rule-width",
  "93": "column-span",
  "94": "column-width",
  "95": "contain-intrinsic-block-size",
  "96": "contain-intrinsic-height",
  "97": "contain-intrinsic-inline-size",
  "98": "contain-intrinsic-size",
  "99": "contain-intrinsic-width",
  "100": "container-name",
  "101": "container-type",
  "102": "content",
  "103": "cursor",
  "104": "cx",
  "105": "cy",
  "106": "d",
  "107": "direction",
  "108": "display",
  "109": "dominant-baseline",
  "110": "empty-cells",
  "111": "fill",
  "112": "fill-opacity",
  "113": "fill-rule",
  "114": "filter",
  "115": "flex-basis",
  "116": "flex-direction",
  "117": "flex-grow",
  "118": "flex-shrink",
  "119": "flex-wrap",
  "120": "float",
  "121": "flood-color",
  "122": "flood-opacity",
  "123": "font-family",
  "124": "font-kerning",
  "125": "font-optical-sizing",
  "126": "font-palette",
  "127": "font-size",
  "128": "font-stretch",
  "129": "font-style",
  "130": "font-synthesis-small-caps",
  "131": "font-synthesis-style",
  "132": "font-synthesis-weight",
  "133": "font-variant",
  "134": "font-variant-alternates",
  "135": "font-variant-caps",
  "136": "font-variant-east-asian",
  "137": "font-variant-ligatures",
  "138": "font-variant-numeric",
  "139": "font-variant-position",
  "140": "font-weight",
  "141": "grid-auto-columns",
  "142": "grid-auto-flow",
  "143": "grid-auto-rows",
  "144": "grid-column-end",
  "145": "grid-column-start",
  "146": "grid-row-end",
  "147": "grid-row-start",
  "148": "grid-template-areas",
  "149": "grid-template-columns",
  "150": "grid-template-rows",
  "151": "height",
  "152": "hyphenate-character",
  "153": "hyphenate-limit-chars",
  "154": "hyphens",
  "155": "image-orientation",
  "156": "image-rendering",
  "157": "initial-letter",
  "158": "inline-size",
  "159": "inset-block-end",
  "160": "inset-block-start",
  "161": "inset-inline-end",
  "162": "inset-inline-start",
  "163": "isolation",
  "164": "justify-content",
  "165": "justify-items",
  "166": "justify-self",
  "167": "left",
  "168": "letter-spacing",
  "169": "lighting-color",
  "170": "line-break",
  "171": "line-height",
  "172": "list-style-image",
  "173": "list-style-position",
  "174": "list-style-type",
  "175": "margin-block-end",
  "176": "margin-block-start",
  "177": "margin-bottom",
  "178": "margin-inline-end",
  "179": "margin-inline-start",
  "180": "margin-left",
  "181": "margin-right",
  "182": "margin-top",
  "183": "marker-end",
  "184": "marker-mid",
  "185": "marker-start",
  "186": "mask-type",
  "187": "math-depth",
  "188": "math-shift",
  "189": "math-style",
  "190": "max-block-size",
  "191": "max-height",
  "192": "max-inline-size",
  "193": "max-width",
  "194": "min-block-size",
  "195": "min-height",
  "196": "min-inline-size",
  "197": "min-width",
  "198": "mix-blend-mode",
  "199": "object-fit",
  "200": "object-position",
  "201": "object-view-box",
  "202": "offset-anchor",
  "203": "offset-distance",
  "204": "offset-path",
  "205": "offset-position",
  "206": "offset-rotate",
  "207": "opacity",
  "208": "order",
  "209": "orphans",
  "210": "outline-color",
  "211": "outline-offset",
  "212": "outline-style",
  "213": "outline-width",
  "214": "overflow-anchor",
  "215": "overflow-clip-margin",
  "216": "overflow-wrap",
  "217": "overflow-x",
  "218": "overflow-y",
  "219": "overlay",
  "220": "overscroll-behavior-block",
  "221": "overscroll-behavior-inline",
  "222": "padding-block-end",
  "223": "padding-block-start",
  "224": "padding-bottom",
  "225": "padding-inline-end",
  "226": "padding-inline-start",
  "227": "padding-left",
  "228": "padding-right",
  "229": "padding-top",
  "230": "paint-order",
  "231": "perspective",
  "232": "perspective-origin",
  "233": "pointer-events",
  "234": "position",
  "235": "r",
  "236": "resize",
  "237": "right",
  "238": "rotate",
  "239": "row-gap",
  "240": "ruby-position",
  "241": "rx",
  "242": "ry",
  "243": "scale",
  "244": "scroll-behavior",
  "245": "scroll-margin-block-end",
  "246": "scroll-margin-block-start",
  "247": "scroll-margin-inline-end",
  "248": "scroll-margin-inline-start",
  "249": "scroll-padding-block-end",
  "250": "scroll-padding-block-start",
  "251": "scroll-padding-inline-end",
  "252": "scroll-padding-inline-start",
  "253": "scroll-timeline-axis",
  "254": "scroll-timeline-name",
  "255": "scrollbar-gutter",
  "256": "shape-image-threshold",
  "257": "shape-margin",
  "258": "shape-outside",
  "259": "shape-rendering",
  "260": "speak",
  "261": "stop-color",
  "262": "stop-opacity",
  "263": "stroke",
  "264": "stroke-dasharray",
  "265": "stroke-dashoffset",
  "266": "stroke-linecap",
  "267": "stroke-linejoin",
  "268": "stroke-miterlimit",
  "269": "stroke-opacity",
  "270": "stroke-width",
  "271": "tab-size",
  "272": "table-layout",
  "273": "text-align",
  "274": "text-align-last",
  "275": "text-anchor",
  "276": "text-decoration",
  "277": "text-decoration-color",
  "278": "text-decoration-line",
  "279": "text-decoration-skip-ink",
  "280": "text-decoration-style",
  "281": "text-emphasis-color",
  "282": "text-emphasis-position",
  "283": "text-emphasis-style",
  "284": "text-indent",
  "285": "text-overflow",
  "286": "text-rendering",
  "287": "text-shadow",
  "288": "text-size-adjust",
  "289": "text-transform",
  "290": "text-underline-position",
  "291": "text-wrap",
  "292": "timeline-scope",
  "293": "top",
  "294": "touch-action",
  "295": "transform",
  "296": "transform-origin",
  "297": "transform-style",
  "298": "transition-behavior",
  "299": "transition-delay",
  "300": "transition-duration",
  "301": "transition-property",
  "302": "transition-timing-function",
  "303": "translate",
  "304": "unicode-bidi",
  "305": "user-select",
  "306": "vector-effect",
  "307": "vertical-align",
  "308": "view-timeline-axis",
  "309": "view-timeline-inset",
  "310": "view-timeline-name",
  "311": "view-transition-name",
  "312": "visibility",
  "313": "white-space-collapse",
  "314": "widows",
  "315": "width",
  "316": "will-change",
  "317": "word-break",
  "318": "word-spacing",
  "319": "writing-mode",
  "320": "x",
  "321": "y",
  "322": "z-index",
  "323": "zoom",
  "324": "-webkit-border-horizontal-spacing",
  "325": "-webkit-border-image",
  "326": "-webkit-border-vertical-spacing",
  "327": "-webkit-box-align",
  "328": "-webkit-box-decoration-break",
  "329": "-webkit-box-direction",
  "330": "-webkit-box-flex",
  "331": "-webkit-box-ordinal-group",
  "332": "-webkit-box-orient",
  "333": "-webkit-box-pack",
  "334": "-webkit-box-reflect",
  "335": "-webkit-font-smoothing",
  "336": "-webkit-line-break",
  "337": "-webkit-line-clamp",
  "338": "-webkit-locale",
  "339": "-webkit-mask-box-image",
  "340": "-webkit-mask-box-image-outset",
  "341": "-webkit-mask-box-image-repeat",
  "342": "-webkit-mask-box-image-slice",
  "343": "-webkit-mask-box-image-source",
  "344": "-webkit-mask-box-image-width",
  "345": "-webkit-mask-clip",
  "346": "-webkit-mask-composite",
  "347": "-webkit-mask-image",
  "348": "-webkit-mask-origin",
  "349": "-webkit-mask-position",
  "350": "-webkit-mask-repeat",
  "351": "-webkit-mask-size",
  "352": "-webkit-print-color-adjust",
  "353": "-webkit-rtl-ordering",
  "354": "-webkit-tap-highlight-color",
  "355": "-webkit-text-combine",
  "356": "-webkit-text-decorations-in-effect",
  "357": "-webkit-text-fill-color",
  "358": "-webkit-text-orientation",
  "359": "-webkit-text-security",
  "360": "-webkit-text-stroke-color",
  "361": "-webkit-text-stroke-width",
  "362": "-webkit-user-drag",
  "363": "-webkit-user-modify",
  "364": "-webkit-writing-mode",
  "accentColor": "auto",
  "additiveSymbols": "",
  "alignContent": "normal",
  "alignItems": "normal",
  "alignSelf": "auto",
  "alignmentBaseline": "auto",
  "all": "",
  "animation": "none 0s ease 0s 1 normal none running",
  "animationComposition": "replace",
  "animationDelay": "0s",
  "animationDirection": "normal",
  "animationDuration": "0s",
  "animationFillMode": "none",
  "animationIterationCount": "1",
  "animationName": "none",
  "animationPlayState": "running",
  "animationRange": "normal",
  "animationRangeEnd": "normal",
  "animationRangeStart": "normal",
  "animationTimeline": "auto",
  "animationTimingFunction": "ease",
  "appRegion": "none",
  "appearance": "none",
  "ascentOverride": "",
  "aspectRatio": "auto",
  "backdropFilter": "none",
  "backfaceVisibility": "visible",
  "background": "rgb(229, 231, 224) none repeat scroll 0% 0% / auto padding-box border-box",
  "backgroundAttachment": "scroll",
  "backgroundBlendMode": "normal",
  "backgroundClip": "border-box",
  "backgroundColor": "rgb(229, 231, 224)",
  "backgroundImage": "none",
  "backgroundOrigin": "padding-box",
  "backgroundPosition": "0% 0%",
  "backgroundPositionX": "0%",
  "backgroundPositionY": "0%",
  "backgroundRepeat": "repeat",
  "backgroundRepeatX": "repeat",
  "backgroundRepeatY": "repeat",
  "backgroundSize": "auto",
  "basePalette": "",
  "baselineShift": "0px",
  "baselineSource": "auto",
  "blockSize": "342px",
  "border": "0px none rgb(51, 51, 51)",
  "borderBlock": "0px none rgb(51, 51, 51)",
  "borderBlockColor": "rgb(51, 51, 51)",
  "borderBlockEnd": "0px none rgb(51, 51, 51)",
  "borderBlockEndColor": "rgb(51, 51, 51)",
  "borderBlockEndStyle": "none",
  "borderBlockEndWidth": "0px",
  "borderBlockStart": "0px none rgb(51, 51, 51)",
  "borderBlockStartColor": "rgb(51, 51, 51)",
  "borderBlockStartStyle": "none",
  "borderBlockStartWidth": "0px",
  "borderBlockStyle": "none",
  "borderBlockWidth": "0px",
  "borderBottom": "0px none rgb(51, 51, 51)",
  "borderBottomColor": "rgb(51, 51, 51)",
  "borderBottomLeftRadius": "0px",
  "borderBottomRightRadius": "0px",
  "borderBottomStyle": "none",
  "borderBottomWidth": "0px",
  "borderCollapse": "separate",
  "borderColor": "rgb(51, 51, 51)",
  "borderEndEndRadius": "0px",
  "borderEndStartRadius": "0px",
  "borderImage": "none",
  "borderImageOutset": "0",
  "borderImageRepeat": "stretch",
  "borderImageSlice": "100%",
  "borderImageSource": "none",
  "borderImageWidth": "1",
  "borderInline": "0px none rgb(51, 51, 51)",
  "borderInlineColor": "rgb(51, 51, 51)",
  "borderInlineEnd": "0px none rgb(51, 51, 51)",
  "borderInlineEndColor": "rgb(51, 51, 51)",
  "borderInlineEndStyle": "none",
  "borderInlineEndWidth": "0px",
  "borderInlineStart": "0px none rgb(51, 51, 51)",
  "borderInlineStartColor": "rgb(51, 51, 51)",
  "borderInlineStartStyle": "none",
  "borderInlineStartWidth": "0px",
  "borderInlineStyle": "none",
  "borderInlineWidth": "0px",
  "borderLeft": "0px none rgb(51, 51, 51)",
  "borderLeftColor": "rgb(51, 51, 51)",
  "borderLeftStyle": "none",
  "borderLeftWidth": "0px",
  "borderRadius": "0px",
  "borderRight": "0px none rgb(51, 51, 51)",
  "borderRightColor": "rgb(51, 51, 51)",
  "borderRightStyle": "none",
  "borderRightWidth": "0px",
  "borderSpacing": "0px 0px",
  "borderStartEndRadius": "0px",
  "borderStartStartRadius": "0px",
  "borderStyle": "none",
  "borderTop": "0px none rgb(51, 51, 51)",
  "borderTopColor": "rgb(51, 51, 51)",
  "borderTopLeftRadius": "0px",
  "borderTopRightRadius": "0px",
  "borderTopStyle": "none",
  "borderTopWidth": "0px",
  "borderWidth": "0px",
  "bottom": "auto",
  "boxShadow": "none",
  "boxSizing": "border-box",
  "breakAfter": "auto",
  "breakBefore": "auto",
  "breakInside": "auto",
  "bufferedRendering": "auto",
  "captionSide": "top",
  "caretColor": "rgb(51, 51, 51)",
  "clear": "none",
  "clip": "auto",
  "clipPath": "none",
  "clipRule": "nonzero",
  "color": "rgb(51, 51, 51)",
  "colorInterpolation": "srgb",
  "colorInterpolationFilters": "linearrgb",
  "colorRendering": "auto",
  "colorScheme": "normal",
  "columnCount": "auto",
  "columnFill": "balance",
  "columnGap": "normal",
  "columnRule": "0px none rgb(51, 51, 51)",
  "columnRuleColor": "rgb(51, 51, 51)",
  "columnRuleStyle": "none",
  "columnRuleWidth": "0px",
  "columnSpan": "none",
  "columnWidth": "auto",
  "columns": "auto auto",
  "contain": "none",
  "containIntrinsicBlockSize": "none",
  "containIntrinsicHeight": "none",
  "containIntrinsicInlineSize": "none",
  "containIntrinsicSize": "none",
  "containIntrinsicWidth": "none",
  "container": "none",
  "containerName": "none",
  "containerType": "normal",
  "content": "normal",
  "contentVisibility": "visible",
  "counterIncrement": "none",
  "counterReset": "none",
  "counterSet": "none",
  "cursor": "auto",
  "cx": "0px",
  "cy": "0px",
  "d": "none",
  "descentOverride": "",
  "direction": "ltr",
  "display": "block",
  "dominantBaseline": "auto",
  "emptyCells": "show",
  "fallback": "",
  "fill": "rgb(0, 0, 0)",
  "fillOpacity": "1",
  "fillRule": "nonzero",
  "filter": "none",
  "flex": "0 1 auto",
  "flexBasis": "auto",
  "flexDirection": "row",
  "flexFlow": "row nowrap",
  "flexGrow": "0",
  "flexShrink": "1",
  "flexWrap": "nowrap",
  "float": "none",
  "floodColor": "rgb(0, 0, 0)",
  "floodOpacity": "1",
  "font": "16px / 27.2px Inter, sans-serif",
  "fontDisplay": "",
  "fontFamily": "Inter, sans-serif",
  "fontFeatureSettings": "normal",
  "fontKerning": "auto",
  "fontOpticalSizing": "auto",
  "fontPalette": "normal",
  "fontSize": "16px",
  "fontStretch": "100%",
  "fontStyle": "normal",
  "fontSynthesis": "weight style small-caps",
  "fontSynthesisSmallCaps": "auto",
  "fontSynthesisStyle": "auto",
  "fontSynthesisWeight": "auto",
  "fontVariant": "normal",
  "fontVariantAlternates": "normal",
  "fontVariantCaps": "normal",
  "fontVariantEastAsian": "normal",
  "fontVariantLigatures": "normal",
  "fontVariantNumeric": "normal",
  "fontVariantPosition": "normal",
  "fontVariationSettings": "normal",
  "fontWeight": "400",
  "forcedColorAdjust": "auto",
  "gap": "normal",
  "grid": "none / none / none / row / auto / auto",
  "gridArea": "auto / auto / auto / auto",
  "gridAutoColumns": "auto",
  "gridAutoFlow": "row",
  "gridAutoRows": "auto",
  "gridColumn": "auto / auto",
  "gridColumnEnd": "auto",
  "gridColumnGap": "normal",
  "gridColumnStart": "auto",
  "gridGap": "normal normal",
  "gridRow": "auto / auto",
  "gridRowEnd": "auto",
  "gridRowGap": "normal",
  "gridRowStart": "auto",
  "gridTemplate": "none / none / none",
  "gridTemplateAreas": "none",
  "gridTemplateColumns": "none",
  "gridTemplateRows": "none",
  "height": "342px",
  "hyphenateCharacter": "auto",
  "hyphenateLimitChars": "auto",
  "hyphens": "manual",
  "imageOrientation": "from-image",
  "imageRendering": "auto",
  "inherits": "",
  "initialLetter": "normal",
  "initialValue": "",
  "inlineSize": "418.656px",
  "inset": "auto",
  "insetBlock": "auto",
  "insetBlockEnd": "auto",
  "insetBlockStart": "auto",
  "insetInline": "auto",
  "insetInlineEnd": "auto",
  "insetInlineStart": "auto",
  "isolation": "auto",
  "justifyContent": "normal",
  "justifyItems": "normal",
  "justifySelf": "auto",
  "left": "auto",
  "letterSpacing": "normal",
  "lightingColor": "rgb(255, 255, 255)",
  "lineBreak": "auto",
  "lineGapOverride": "",
  "lineHeight": "27.2px",
  "listStyle": "outside none disc",
  "listStyleImage": "none",
  "listStylePosition": "outside",
  "listStyleType": "disc",
  "margin": "0px",
  "marginBlock": "0px",
  "marginBlockEnd": "0px",
  "marginBlockStart": "0px",
  "marginBottom": "0px",
  "marginInline": "0px",
  "marginInlineEnd": "0px",
  "marginInlineStart": "0px",
  "marginLeft": "0px",
  "marginRight": "0px",
  "marginTop": "0px",
  "marker": "none",
  "markerEnd": "none",
  "markerMid": "none",
  "markerStart": "none",
  "mask": "none",
  "maskType": "luminance",
  "mathDepth": "0",
  "mathShift": "normal",
  "mathStyle": "normal",
  "maxBlockSize": "none",
  "maxHeight": "none",
  "maxInlineSize": "none",
  "maxWidth": "none",
  "minBlockSize": "0px",
  "minHeight": "0px",
  "minInlineSize": "0px",
  "minWidth": "0px",
  "mixBlendMode": "normal",
  "negative": "",
  "objectFit": "fill",
  "objectPosition": "50% 50%",
  "objectViewBox": "none",
  "offset": "none 0px auto 0deg",
  "offsetAnchor": "auto",
  "offsetDistance": "0px",
  "offsetPath": "none",
  "offsetPosition": "auto",
  "offsetRotate": "auto 0deg",
  "opacity": "1",
  "order": "0",
  "orphans": "2",
  "outline": "rgb(51, 51, 51) none 0px",
  "outlineColor": "rgb(51, 51, 51)",
  "outlineOffset": "0px",
  "outlineStyle": "none",
  "outlineWidth": "0px",
  "overflow": "visible",
  "overflowAnchor": "auto",
  "overflowClipMargin": "0px",
  "overflowWrap": "normal",
  "overflowX": "visible",
  "overflowY": "visible",
  "overlay": "none",
  "overrideColors": "",
  "overscrollBehavior": "auto",
  "overscrollBehaviorBlock": "auto",
  "overscrollBehaviorInline": "auto",
  "overscrollBehaviorX": "auto",
  "overscrollBehaviorY": "auto",
  "pad": "",
  "padding": "60px 55px",
  "paddingBlock": "60px",
  "paddingBlockEnd": "60px",
  "paddingBlockStart": "60px",
  "paddingBottom": "60px",
  "paddingInline": "55px",
  "paddingInlineEnd": "55px",
  "paddingInlineStart": "55px",
  "paddingLeft": "55px",
  "paddingRight": "55px",
  "paddingTop": "60px",
  "page": "auto",
  "pageBreakAfter": "auto",
  "pageBreakBefore": "auto",
  "pageBreakInside": "auto",
  "pageOrientation": "",
  "paintOrder": "normal",
  "perspective": "none",
  "perspectiveOrigin": "209.328px 171px",
  "placeContent": "normal",
  "placeItems": "normal",
  "placeSelf": "auto",
  "pointerEvents": "auto",
  "position": "static",
  "prefix": "",
  "quotes": "auto",
  "r": "0px",
  "range": "",
  "resize": "none",
  "right": "auto",
  "rotate": "none",
  "rowGap": "normal",
  "rubyPosition": "over",
  "rx": "auto",
  "ry": "auto",
  "scale": "none",
  "scrollBehavior": "auto",
  "scrollMargin": "0px",
  "scrollMarginBlock": "0px",
  "scrollMarginBlockEnd": "0px",
  "scrollMarginBlockStart": "0px",
  "scrollMarginBottom": "0px",
  "scrollMarginInline": "0px",
  "scrollMarginInlineEnd": "0px",
  "scrollMarginInlineStart": "0px",
  "scrollMarginLeft": "0px",
  "scrollMarginRight": "0px",
  "scrollMarginTop": "0px",
  "scrollPadding": "auto",
  "scrollPaddingBlock": "auto",
  "scrollPaddingBlockEnd": "auto",
  "scrollPaddingBlockStart": "auto",
  "scrollPaddingBottom": "auto",
  "scrollPaddingInline": "auto",
  "scrollPaddingInlineEnd": "auto",
  "scrollPaddingInlineStart": "auto",
  "scrollPaddingLeft": "auto",
  "scrollPaddingRight": "auto",
  "scrollPaddingTop": "auto",
  "scrollSnapAlign": "none",
  "scrollSnapStop": "normal",
  "scrollSnapType": "none",
  "scrollTimeline": "none",
  "scrollTimelineAxis": "block",
  "scrollTimelineName": "none",
  "scrollbarGutter": "auto",
  "shapeImageThreshold": "0",
  "shapeMargin": "0px",
  "shapeOutside": "none",
  "shapeRendering": "auto",
  "size": "",
  "sizeAdjust": "",
  "speak": "normal",
  "speakAs": "",
  "src": "",
  "stopColor": "rgb(0, 0, 0)",
  "stopOpacity": "1",
  "stroke": "none",
  "strokeDasharray": "none",
  "strokeDashoffset": "0px",
  "strokeLinecap": "butt",
  "strokeLinejoin": "miter",
  "strokeMiterlimit": "4",
  "strokeOpacity": "1",
  "strokeWidth": "1px",
  "suffix": "",
  "symbols": "",
  "syntax": "",
  "system": "",
  "tabSize": "8",
  "tableLayout": "auto",
  "textAlign": "start",
  "textAlignLast": "auto",
  "textAnchor": "start",
  "textCombineUpright": "none",
  "textDecoration": "none solid rgb(51, 51, 51)",
  "textDecorationColor": "rgb(51, 51, 51)",
  "textDecorationLine": "none",
  "textDecorationSkipInk": "auto",
  "textDecorationStyle": "solid",
  "textDecorationThickness": "auto",
  "textEmphasis": "none rgb(51, 51, 51)",
  "textEmphasisColor": "rgb(51, 51, 51)",
  "textEmphasisPosition": "over",
  "textEmphasisStyle": "none",
  "textIndent": "0px",
  "textOrientation": "mixed",
  "textOverflow": "clip",
  "textRendering": "auto",
  "textShadow": "none",
  "textSizeAdjust": "100%",
  "textTransform": "none",
  "textUnderlineOffset": "auto",
  "textUnderlinePosition": "auto",
  "textWrap": "wrap",
  "timelineScope": "none",
  "top": "auto",
  "touchAction": "auto",
  "transform": "none",
  "transformBox": "view-box",
  "transformOrigin": "209.328px 171px",
  "transformStyle": "flat",
  "transition": "all 0s ease 0s",
  "transitionBehavior": "normal",
  "transitionDelay": "0s",
  "transitionDuration": "0s",
  "transitionProperty": "all",
  "transitionTimingFunction": "ease",
  "translate": "none",
  "unicodeBidi": "normal",
  "unicodeRange": "",
  "userSelect": "auto",
  "vectorEffect": "none",
  "verticalAlign": "baseline",
  "viewTimeline": "none",
  "viewTimelineAxis": "block",
  "viewTimelineInset": "auto",
  "viewTimelineName": "none",
  "viewTransitionName": "none",
  "visibility": "visible",
  "webkitAlignContent": "normal",
  "webkitAlignItems": "normal",
  "webkitAlignSelf": "auto",
  "webkitAnimation": "none 0s ease 0s 1 normal none running",
  "webkitAnimationDelay": "0s",
  "webkitAnimationDirection": "normal",
  "webkitAnimationDuration": "0s",
  "webkitAnimationFillMode": "none",
  "webkitAnimationIterationCount": "1",
  "webkitAnimationName": "none",
  "webkitAnimationPlayState": "running",
  "webkitAnimationTimingFunction": "ease",
  "webkitAppRegion": "none",
  "webkitAppearance": "none",
  "webkitBackfaceVisibility": "visible",
  "webkitBackgroundClip": "border-box",
  "webkitBackgroundOrigin": "padding-box",
  "webkitBackgroundSize": "auto",
  "webkitBorderAfter": "0px none rgb(51, 51, 51)",
  "webkitBorderAfterColor": "rgb(51, 51, 51)",
  "webkitBorderAfterStyle": "none",
  "webkitBorderAfterWidth": "0px",
  "webkitBorderBefore": "0px none rgb(51, 51, 51)",
  "webkitBorderBeforeColor": "rgb(51, 51, 51)",
  "webkitBorderBeforeStyle": "none",
  "webkitBorderBeforeWidth": "0px",
  "webkitBorderBottomLeftRadius": "0px",
  "webkitBorderBottomRightRadius": "0px",
  "webkitBorderEnd": "0px none rgb(51, 51, 51)",
  "webkitBorderEndColor": "rgb(51, 51, 51)",
  "webkitBorderEndStyle": "none",
  "webkitBorderEndWidth": "0px",
  "webkitBorderHorizontalSpacing": "0px",
  "webkitBorderImage": "none",
  "webkitBorderRadius": "0px",
  "webkitBorderStart": "0px none rgb(51, 51, 51)",
  "webkitBorderStartColor": "rgb(51, 51, 51)",
  "webkitBorderStartStyle": "none",
  "webkitBorderStartWidth": "0px",
  "webkitBorderTopLeftRadius": "0px",
  "webkitBorderTopRightRadius": "0px",
  "webkitBorderVerticalSpacing": "0px",
  "webkitBoxAlign": "stretch",
  "webkitBoxDecorationBreak": "slice",
  "webkitBoxDirection": "normal",
  "webkitBoxFlex": "0",
  "webkitBoxOrdinalGroup": "1",
  "webkitBoxOrient": "horizontal",
  "webkitBoxPack": "start",
  "webkitBoxReflect": "none",
  "webkitBoxShadow": "none",
  "webkitBoxSizing": "border-box",
  "webkitClipPath": "none",
  "webkitColumnBreakAfter": "auto",
  "webkitColumnBreakBefore": "auto",
  "webkitColumnBreakInside": "auto",
  "webkitColumnCount": "auto",
  "webkitColumnGap": "normal",
  "webkitColumnRule": "0px none rgb(51, 51, 51)",
  "webkitColumnRuleColor": "rgb(51, 51, 51)",
  "webkitColumnRuleStyle": "none",
  "webkitColumnRuleWidth": "0px",
  "webkitColumnSpan": "none",
  "webkitColumnWidth": "auto",
  "webkitColumns": "auto auto",
  "webkitFilter": "none",
  "webkitFlex": "0 1 auto",
  "webkitFlexBasis": "auto",
  "webkitFlexDirection": "row",
  "webkitFlexFlow": "row nowrap",
  "webkitFlexGrow": "0",
  "webkitFlexShrink": "1",
  "webkitFlexWrap": "nowrap",
  "webkitFontFeatureSettings": "normal",
  "webkitFontSmoothing": "auto",
  "webkitHyphenateCharacter": "auto",
  "webkitJustifyContent": "normal",
  "webkitLineBreak": "auto",
  "webkitLineClamp": "none",
  "webkitLocale": "auto",
  "webkitLogicalHeight": "342px",
  "webkitLogicalWidth": "418.656px",
  "webkitMarginAfter": "0px",
  "webkitMarginBefore": "0px",
  "webkitMarginEnd": "0px",
  "webkitMarginStart": "0px",
  "webkitMask": "",
  "webkitMaskBoxImage": "none",
  "webkitMaskBoxImageOutset": "0",
  "webkitMaskBoxImageRepeat": "stretch",
  "webkitMaskBoxImageSlice": "0 fill",
  "webkitMaskBoxImageSource": "none",
  "webkitMaskBoxImageWidth": "auto",
  "webkitMaskClip": "border-box",
  "webkitMaskComposite": "source-over",
  "webkitMaskImage": "none",
  "webkitMaskOrigin": "border-box",
  "webkitMaskPosition": "0% 0%",
  "webkitMaskPositionX": "0%",
  "webkitMaskPositionY": "0%",
  "webkitMaskRepeat": "repeat",
  "webkitMaskRepeatX": "",
  "webkitMaskRepeatY": "",
  "webkitMaskSize": "auto",
  "webkitMaxLogicalHeight": "none",
  "webkitMaxLogicalWidth": "none",
  "webkitMinLogicalHeight": "0px",
  "webkitMinLogicalWidth": "0px",
  "webkitOpacity": "1",
  "webkitOrder": "0",
  "webkitPaddingAfter": "60px",
  "webkitPaddingBefore": "60px",
  "webkitPaddingEnd": "55px",
  "webkitPaddingStart": "55px",
  "webkitPerspective": "none",
  "webkitPerspectiveOrigin": "209.328px 171px",
  "webkitPerspectiveOriginX": "",
  "webkitPerspectiveOriginY": "",
  "webkitPrintColorAdjust": "economy",
  "webkitRtlOrdering": "logical",
  "webkitRubyPosition": "before",
  "webkitShapeImageThreshold": "0",
  "webkitShapeMargin": "0px",
  "webkitShapeOutside": "none",
  "webkitTapHighlightColor": "rgba(0, 0, 0, 0.18)",
  "webkitTextCombine": "none",
  "webkitTextDecorationsInEffect": "none",
  "webkitTextEmphasis": "none rgb(51, 51, 51)",
  "webkitTextEmphasisColor": "rgb(51, 51, 51)",
  "webkitTextEmphasisPosition": "over",
  "webkitTextEmphasisStyle": "none",
  "webkitTextFillColor": "rgb(51, 51, 51)",
  "webkitTextOrientation": "vertical-right",
  "webkitTextSecurity": "none",
  "webkitTextSizeAdjust": "100%",
  "webkitTextStroke": "",
  "webkitTextStrokeColor": "rgb(51, 51, 51)",
  "webkitTextStrokeWidth": "0px",
  "webkitTransform": "none",
  "webkitTransformOrigin": "209.328px 171px",
  "webkitTransformOriginX": "",
  "webkitTransformOriginY": "",
  "webkitTransformOriginZ": "",
  "webkitTransformStyle": "flat",
  "webkitTransition": "all 0s ease 0s",
  "webkitTransitionDelay": "0s",
  "webkitTransitionDuration": "0s",
  "webkitTransitionProperty": "all",
  "webkitTransitionTimingFunction": "ease",
  "webkitUserDrag": "auto",
  "webkitUserModify": "read-only",
  "webkitUserSelect": "auto",
  "webkitWritingMode": "horizontal-tb",
  "whiteSpace": "normal",
  "whiteSpaceCollapse": "collapse",
  "widows": "2",
  "width": "418.656px",
  "willChange": "auto",
  "wordBreak": "normal",
  "wordSpacing": "0px",
  "wordWrap": "normal",
  "writingMode": "horizontal-tb",
  "x": "0px",
  "y": "0px",
  "zIndex": "auto",
  "zoom": "1"
}

/* */
