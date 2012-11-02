var hue = 0;

exports.Cell = Cell;
function Cell(autoColor) {
  this.el = document.createElement("div");
  if (autoColor) {
    var color = "hsl(" + (hue = (hue + 47) % 360) + ", 50%, 80%)";
    this.el.style.backgroundColor = color;
  }
}

Cell.prototype.resize = function (width, height) {
  this.el.style.width = width + "px";
  this.el.style.height = height + "px";
};
