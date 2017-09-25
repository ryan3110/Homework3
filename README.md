<head>
	<script>
function getInput() {
	var animalsInput = document.getElementById("animals-input");
  var animalsList = document.getElementById("animals-list");
  var animalsCount = document.getElementById("animals-count");

  var li = document.createElement("li");
  li.innerHTML = animalsInput.value;
  animalsList.appendChild(li);
  animalsInput.value = "";
  
  var a = animalsCount.innerHTML;
  a++;
  animalsCount.innerHTML = a;
}
	</script>
</head>

<body>
  <p id="animals-count">
    3
  </p>
  <ul id="animals-list">
    <li>Cat</li>
    <li>Dog</li>
    <li>Rabbit</li>
  </ul>
  <input type="text" id="animals-input">
  <button onclick="getInput()">
    enter an animal
  </button>
