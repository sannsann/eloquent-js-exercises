<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
   var result = [];
   var recurse = function(node, tagName) {
	if (node.nodeType == document.TEXT_NODE || node.tagName == undefined) {
		return;
    }
	if (node.tagName.toUpperCase() == tagName.toUpperCase()) {
		result.push(node);
	}
	if (node.childNodes) {
		for (var i=0; i<node.childNodes.length; ++i) {
			recurse(node.childNodes[i], tagName);
		}
	}
  }
  recurse(node, tagName);
  return result;
  }
  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>