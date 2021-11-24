/* querySelectorAll() retrieves a list of elements from the document based on 
   your given selector, and returns a static NodeList object.
   getElementsByClassName() retrieves a list of elements from the document based on 
   an element’s class name, and returns a live HTML collection of elements. */

// solution 1: use querySelectorAll()
let hot = document.querySelectorAll("li.hot");
console.log(hot.length);
console.log(hot[0].textContent);
console.log(hot[1].textContent);

for (let i = 0; i < hot.length; i++) {
  console.log(`hot[${i}]: ${hot[i].textContent}`);
  console.log(`Before change: class name is ${hot[i].className}`);
  hot[i].className = "cool";
  console.log(`After change: class name is ${hot[i].className}`);
}
hot = document.getElementsByClassName("hot");
console.log(hot.length);

// solution 2: use getElementsByClassName()
/* let hot = document.getElementsByClassName("hot");
console.log(hot.length);
console.log(hot[0].textContent);
console.log(hot[1].textContent);

for (let i = 0; i < hot.length; ) {
  console.log(`hot[${i}]: ${hot[i].textContent}`);
  console.log(`Before change: class name is ${hot[i].className}`);
  hot[i].className = "cool";
  // the following statement cannot be done after the last iteration:
  // console.log(`After change: class name is ${hot[i].className}`);
}
hot = document.getElementsByClassName("hot");
console.log(hot.length); */
