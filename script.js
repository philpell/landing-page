/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
      if (!e.target.matches('.dropBtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//Event listener to change the button text based on button click
const dropdownBtn = document.querySelector('.dropBtn');
dropdownBtn.addEventListener('click', changeX);

//Function to change the colour of the cells
function changeX()  {
      if (dropdownBtn.textContent == "≡") {
        dropdownBtn.textContent = "X";
    }
      else dropdownBtn.textContent = "≡";
  }