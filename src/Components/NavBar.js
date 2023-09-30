/*import React from "react";*/

/*const Navbar = () => {
  // Navbar component code
};

export default Navbar;*/
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    // Perform navigation functionality here
    console.log("Navigating to:", href);
  });
});
