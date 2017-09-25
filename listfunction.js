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
