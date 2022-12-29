let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};

window.onscroll = () => {
navbar.classList.remove("open-menu");
navbar.classList.remove("move");
}

// reviews swiper
var swiper = new Swiper(".reviews-content", {

    spaceBetween: 40,
    CenteredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Email JS
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".Mail");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name, email, msg) {
    emailjs.send("service_tofrt3t","template_rb8qg2u",{
        to_name: "Nana Yaw Scriptures",
        from_name: name,
        message: msg,
        from_email: email,
        });
}

function emptyerror() {
    swal({
        title: "Sorry!",
        text: "Fields cannot be empty! 😞",
        icon: "error",

    });
}


function success() {
    swal({
        title: "Message was sent",
        text: "We try to reply you in 24hrs 😀",
        icon: "success",

    });
}

//Header Background Change on Scroll
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});
// scroll Top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY > 0);
});

// modes
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});
