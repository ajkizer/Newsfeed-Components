/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  */

const createMenu = menuArr => {
  const menu = document.createElement("div");
  const list = document.createElement("ul");
  menuArr.forEach(el => {
    const li = document.createElement("li");
    li.textContent = el;
    list.appendChild(li);
  });

  menu.appendChild(list);

  menu.classList.add("menu");

  return menu;
};

const header = document.querySelector(".header");
header.appendChild(createMenu(menuItems));

var menuState = 0;
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-button");

menuBtn.addEventListener("click", function(e) {
  e.preventDefault();
  let tl = new TimelineLite();
  menu.classList.toggle("menu--open");
  tl.from(menu, 0.3, { xPercent: -100 });
});
// const menuList = createMenu(menuItems);

// const header = document.querySelector(".header");
// header.appendChild(menuList);
/*

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
