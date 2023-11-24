/*=============== menu icon navbar =============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()  => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};






/*=============== scroll secion active =============*/
let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >+ offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/*=============== sticky navbar =============*/    
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

/*=============== remove icon navbar when clicked =============*/    
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');





};


/*===============dark light mode =============*/   
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

/*===============  send email  =============*/   
function sendEmail() {
    var body = document.getElementById("name , email,number").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var emailSubject = document.getElementById("emailSubject").value;
    var email = document.getElementById("message").value;
    window.location.href = "mailto:lsron2016@gmail.com?subject="+emailSubject+"&body="+body;

}