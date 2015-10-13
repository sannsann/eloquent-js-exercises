<link rel="stylesheet" href="css/game.css">

<body>
<script>
  // The old runGame function. Modify it...
  function runGame(plans, Display) {
    function startLevel(n, lives) {
      runLevel(new Level(plans[n]), Display, function(status) {
        if (status == "lost")
          if (lives == 0) {
            console.log("You lost :(. Starting over...");
            startLevel(0, 3);
          } else {
            lives--;
            startLevel(n);
          }
        else if (n < plans.length - 1)
          startLevel(n + 1);
        else
          console.log("You win!");
      });
    }
    startLevel(0, 3);
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body>