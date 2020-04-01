/* 
Note: I did not use the MDN source code at all for this assignment. However, I did look at their descriptions of what the JS should accomplish in order to gain clarity on what was being asked in the assignment description on ELMS. */

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */
for (let i = 1; i <= 5; i++) {
  const newImage = document.createElement("img");

  let path = "images/pic" + i + ".jpg";

  newImage.setAttribute("src", path);
  thumbBar.appendChild(newImage);

  // adding onClick handler to change to selected image path 
  newImage.onclick = function() {
    displayedImage.setAttribute("src", path);
  }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
    // check current class name set on button
    let currClass = btn.getAttribute('class');

    // if class name is "dark"
    if(currClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
