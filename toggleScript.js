// --- all the navHTML is in the navHTML.html file
const navhtml = 
`
    <!-- navbar brand -->
    <div class="navbar-brand">
      <a href="homepage.html" class="navbar-item">LOGO</a>
      <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <!-- navbar menu -->
    <div class="navbar-menu" id="navMenu">
      <div class="navbar-start">
        <a href="homepage.html" class="navbar-item">homepage</a>
        <a href="bank1.html" class="navbar-item">bank1</a>
        <a href="bank2.html" class="navbar-item">bank2</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">Icon</div>
      </div>
    </div>
  
`;

//-- getting the navbar item and changing the inner html
const navbarComplete = document.querySelector('.navbar');
navbarComplete.innerHTML = navhtml;

//-- this should be done with a server but this is not possible for now

const burgerIcon = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('#navMenu');

burgerIcon.addEventListener('click', () =>
  {
    // Toggle the "is-active" class
    burgerIcon.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });


