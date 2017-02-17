function init() {
  var $ = go.GraphObject.make;
  var myDiagram =
    $(go.Diagram, "myDiagramDiv", {
      initialContentAlignment: go.Spot.Center, // center Diagram contents
      "undoManager.isEnabled": true, // enable Ctrl-Z to undo and Ctrl-Y to redo
      layout: $(go.TreeLayout, { angle: 90, layerSpacing: 40 })
    });
  // define a simple Node template
  myDiagram.nodeTemplate =
    $(go.Node, "Horizontal",
      // the entire node will have a light-blue background
      { width: 200, background: "#44CCFF" },
      $(go.Picture,
        // Pictures should normally have an explicit width and height.
        // This picture has a red background, only visible when there is no source set
        // or when the image is partially transparent.
        { margin: 10, width: 50, height: 50, background: "red" },
        // Picture.source is data bound to the "source" attribute of the model data
        new go.Binding("source")),
      $(go.TextBlock,
        "Default Text", // the initial value for TextBlock.text
        // some room around the text, a larger font, and a white stroke:
        { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
        // TextBlock.text is data bound to the "name" attribute of the model data
        new go.Binding("text", "name"))
    );
  // define a Link template that routes orthogonally, with no arrowhead
  myDiagram.linkTemplate =
    $(go.Link, { routing: go.Link.Orthogonal, corner: 5 },
      $(go.Shape, { strokeWidth: 2, stroke: "#dadada" })); // the link shape
  var model = $(go.TreeModel);
  model.nodeDataArray = [ // note that each node data object holds whatever properties it needs;
    // for this app we add the "name" and "source" properties
    { key: "1", name: "Thomas", source: "images/brought.png" },
    { key: "2", parent: "1", name: "George", source: "images/brought.png" },
    { key: "3", parent: "1", name: "Grigory", source: "images/brought.png" },
    { key: "4", parent: "2", name: "Alwin", source: "images/brought.png" },
    { key: "5", parent: "2", name: "Mevin", source: "images/brought.png" },
    { key: "6", parent: "3", name: "John", source: "images/brought.png" },
    { key: "7", parent: "3", name: "Harry", source: "images/brought.png" },
    { key: "8", parent: "3", name: "Ron", source: "images/brought.png" },
    { key: "9", parent: "8", name: "Edward", source: "images/brought.png" }
  ];
  myDiagram.model = model;
}
