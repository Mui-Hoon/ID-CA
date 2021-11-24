let hot = document.getElementsByTagName("li");

if (hot.length >= 1) {
  console.log(`at least one list item with class attribute hot`);
  hot[0].className = "cool";
  console.log(`change the first element to cool`);
}
