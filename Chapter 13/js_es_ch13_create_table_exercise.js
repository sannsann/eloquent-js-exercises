<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    // Your code here.
    var keys = ["Name", "Height", "Country"];
    var table = document.createElement("table");
    
    var headerRow = document.createElement("tr");
    for (var i = 0; i < keys.length; i++) {
      
      var headerCol = document.createElement("td");
      var text = document.createTextNode(keys[i]);
      
      headerCol.appendChild(text);
      headerRow.appendChild(headerCol);
    }
    
    table.appendChild(headerRow);
  
    for (var i = 0; i < data.length; i++) {
      var row = document.createElement("tr");
      
      var name = document.createElement("td");
      var nameText = document.createTextNode(data[i].name);
      name.appendChild(nameText);
      row.appendChild(name);
    
      var height = document.createElement("td");
      var heightText = document.createTextNode(data[i].height);
      height.appendChild(heightText);
      row.appendChild(height);

      var country = document.createElement("td");
      var countryText = document.createTextNode(data[i].country);
      country.appendChild(countryText);
      row.appendChild(country);
      
      table.appendChild(row);
    }
    
    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>