<p style="text-align: center">
<img src="img/cat.png" id="cat" style="position: relative">
<img src="img/hat.png" id="hat" style="position: relative">
</p>

<script>
  var cat = document.querySelector("#cat");
  var hat = document.querySelector("#hat");
  // Your code here.

  
  var angle = 0, lastTime = null;
  function animate(time) {
    if (lastTime != null)
      angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    
    hat.style.top = (Math.sin(angle) * -20) + "px";
    hat.style.left = (Math.cos(angle) * -200) + "px";
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
</script>
