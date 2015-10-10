<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
// Your code here.
  var dots = [];
  for (var i = 0; i < 15; i++) {
    var node = document.createElement('div');
    node.className = 'trail';
    document.body.appendChild(node);
    dots.push(node);
  }
  var currentDot = 0;
  addEventListener('mousemove', function (event) {
    var dot = dots[currentDot];
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    currentDot = (currentDot + 1) % dots.length;
  })
</script>