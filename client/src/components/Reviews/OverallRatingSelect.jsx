const React = require("react");
const StarFill = require("../shared/StarFill.jsx");
const { Typography } = require("@material-ui/core");
const { Box } = require("@material-ui/core");

module.exports = () => {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Overall Rating</Typography>
        <StarFill
          onClick={e => {
            console.log(e.target);
          }}
        />
      </Box>
    </div>
  );
};

{
  /* <div onmousemove="showCoords(event)" onmouseout="clearCoor()"></div>

<p>Mouse over the rectangle above to get the horizontal and vertical coordinates of your mouse pointer.</p>

<p id="demo"></p>

<script>
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coor;
}

function clearCoor() {
  document.getElementById("demo").innerHTML = "";
}
</script> */
}

{
  /* 
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var rect = event.target.getBoundingClientRect();
  var elCoords = [rect.top, rect.right, rect.bottom, rect.left].join(",");
  var coords = "X coords: " + x + ", Y coords: " + y + ", El coords: " + elCoords;
  document.getElementById("demo").innerHTML = coords;
}
document.getElementById.getBoundingClientRect();
*/
}
