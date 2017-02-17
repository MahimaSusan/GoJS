function init() {
  var $ = go.GraphObject.make;
  var myDiagram =
    $(go.Diagram, "myDiagramDiv", {
      initialContentAlignment: go.Spot.Center,
      "textEditingTool.starting": go.TextEditingTool.SingleClick,
      "undoManager.isEnabled": true,
      layout: $(go.TreeLayout)
    });
  myDiagram.nodeTemplate =
    $(go.Node, "Horizontal", { width: 200, background: "#d1d1d1" },
      $(go.Picture, { margin: 10, width: 50, height: 50, background: "#7f7f7f" },
        new go.Binding("source")),
      $(go.TextBlock,
        "Default Text", { margin: 12, stroke: "white", font: "bold 16px sans-serif",editable: true },
        new go.Binding("text", "name"))
    );
  myDiagram.linkTemplate =
    $(go.Link, { routing: go.Link.Orthogonal, corner: 5, selectable: false },
      $(go.Shape, { strokeWidth: 2, stroke: "#dadada" }));
  var model = $(go.TreeModel);
  model.nodeDataArray = [
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
