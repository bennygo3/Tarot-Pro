// Get the button and the dropdown menu
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header-menu');

//show and hide the menu on click of the menu button
menuButton.addEventListener('click', function() {
    menu.classList.toggle('active');
});

//check window width and toggle the class based on width
window.addEventListener('resize', function() {
    if (this.window.innerWidth >= 768) {
        menu.classList.remove('active');
        menuButton.style.display = 'none';
    } else {
        menuButton.style.display = 'block';
    }
});

if (window.innerWidth >= 768) {
    menuButton.style.display = 'none';
}

//hiding showing links
const currentURL = window.location.href;

if(currentURL.includes("about.html")){
    console.log("Running on about or art page");
    const aboutLink = document.getElementById("aboutXLink");
    aboutLink.style.display = "none";
};



