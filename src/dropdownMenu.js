// HTML elements should be hardcoded by user
// styling supplied by the user, minus optional color or bgcolor
// nodeID is the div you're choosing as the dropdown menu
// className will be the name of your CSS class which will be applied on click

const popMenu = (nodeID, className, color, bgcolor) => {
  // check for any opened menus and close them first
  if (document.querySelectorAll(`.${className}`).length > 0) {
    if (document.querySelectorAll(`.${className}`)[0].id !== nodeID) {
      document.querySelectorAll(`.${className}`)[0].className = '';
    }
  }

  const menuNode = document.getElementById(nodeID);

  // if selected menu is already open, close it -- remove class
  if (menuNode.className === '') {
    menuNode.setAttribute('class', className);
  } else {
    menuNode.setAttribute('class', '');
  }

  // check if color args are supplied and set them
  // in-line override of CSS
  if (color) {
    menuNode.style.color = color;
  }

  if (bgcolor) {
    menuNode.style.backgroundColor = bgcolor;
  }
};

export { popMenu };
