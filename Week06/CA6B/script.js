let hot = document.getElementsByClassName("hot");
if (hot.length >= 3) {
  console.log("There are at least 3 elements with class attribute of hot");
  hot[2].className = "cool";
  console.log("Change the 3rd one to cool");
}
