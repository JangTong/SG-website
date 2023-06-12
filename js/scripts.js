window.onload = function() {
    var header_masthead = document.querySelector('header.masthead');
    setTimeout(function(){
        header_masthead.style.backgroundColor = "rgba(0,0,0,0)";
    }, 600);  
};

window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var tran_po_observer = new IntersectionObserver((e)=>{
    e.forEach((text)=>{
        if(text.isIntersecting){
            text.target.classList.add('show')
        }
    })
});

var tran_po_arr = document.querySelectorAll('.tran_po')

tran_po_observer.observe(tran_po_arr[0])
tran_po_observer.observe(tran_po_arr[1])
tran_po_observer.observe(tran_po_arr[2])
tran_po_observer.observe(tran_po_arr[3])
tran_po_observer.observe(tran_po_arr[4])

var tran_op_observer = new IntersectionObserver((e)=>{
    e.forEach((text)=>{
        if(text.isIntersecting){
            text.target.style.opacity = 1;
        }
        else{
            text.target.style.opacity = 0;
        }
    })
});

var tran_op_arr = document.querySelectorAll('.tran_op')

tran_op_observer.observe(tran_op_arr[0])
tran_op_observer.observe(tran_op_arr[1])
tran_op_observer.observe(tran_op_arr[2])
tran_op_observer.observe(tran_op_arr[3])
tran_op_observer.observe(tran_op_arr[4])


var section_contact = document.querySelector('section#contact')

var section_contact_observer = new IntersectionObserver((e)=>{
    e.forEach((bg)=>{
        if(bg.isIntersecting){
            bg.target.style.backgroundColor = "rgba(35,39,42,1)";
        }
        else{
            bg.target.style.backgroundColor = "rgba(35,39,42,0)";
        }
    })
});

section_contact_observer.observe(section_contact)

const $counter = document.querySelectorAll(".count");

const $text = document.querySelector("#sub_title");
const letters = ["Game On, Together!", "Game On, Level Up!", "Join the Game Revolution!"];
const speed = 100;
let i = 0;

const typing = async () => {  
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }
  
  await wait(800);

  remove();
}

const remove = async () => {
  const letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    $text.innerHTML = letter.join(""); 
  }

  i = !letters[i+1] ? 0 : i + 1;
  typing();
}

function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

setTimeout(remove, 1500);

const counter = ($counter, max) => {
    let now = max;
  
    const handle = setInterval(() => {
      $counter.innerHTML = Math.ceil(max - now);
      if (now < 1) {
        clearInterval(handle);
      }

      const step = now / 10;

      now -= step;
    }, 50);
}


const count_num_observer = new IntersectionObserver((e)=>{
    e.forEach((num)=>{
        if(num.isIntersecting){
            const targetCount = parseInt(num.target.getAttribute('data-count'));
            counter(num.target, targetCount);
        }
    })
});

const count_num_arr = document.querySelectorAll(".count-num");

count_num_arr.forEach((count_num) => {
    count_num_observer.observe(count_num);
  });
  