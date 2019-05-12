// Menu variables
let menu_btn = document.querySelector('#burger'),
    navigate = document.querySelector('.menu');
// Banner variables
let banner_title = document.querySelector('.title-container'),
    down = document.querySelector('#down'),
    logoBlock = document.querySelector('.head'),
    up = document.querySelector('#up');

// Burger in mobile
menu_btn.addEventListener('click', function() {
    navigate.classList.toggle('menu-active');
    this.classList.toggle('burger-active');
    logoBlock.classList.toggle('mobile_head');
});

// add style anchor in menu mobile version
navigate.childNodes.forEach(function(el) {
   el.addEventListener('click', function() {
        this.classList.toggle('mobile_hover');
        this.style.border = 'none';
        setTimeout(function() {
            el.classList.remove('mobile_hover');
        }, 300);
   })
});

// Scroll down (click chevron header)
down.addEventListener('click', function() {
    window.scrollTo({
        top: 760,
        behavior: "smooth"
    });
    up.style.display = 'inline-block';
});

//scroll up
function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    up.style.display = 'none';
}
up.addEventListener('click', scrollUp);
up.addEventListener('touchstart', scrollUp);

// Add button to top
window.addEventListener('scroll', function () {
    if(this.pageYOffset > 0) {
        up.style.display = 'inline-block';
    } else {
        up.style.display = 'none';
    }
});
// Filter portfolio
function filterOption() {
    let pickBtn = document.querySelectorAll('.filter_item'),
        items = document.querySelectorAll('.item');
    let column =document.querySelectorAll('.prtf_column');

    for(let i = 0; i < pickBtn.length; i++) {
        pickBtn[i].addEventListener('click', function(el) {
            el.preventDefault();
            for(let j = 0; j < items.length; j++) {
                if(pickBtn[i].classList.contains('print')) {
                    if(items[j].classList.contains('print')) {
                        items[j].style.display = 'block';
                    } else {
                        items[j].style.display = 'none';
                    }
                } else if(pickBtn[i].classList.contains('identity')) {
                    if(items[j].classList.contains('identity')) {
                        items[j].style.display = 'block';
                    } else {
                        items[j].style.display = 'none';
                    }
                } else if(pickBtn[i].classList.contains('branding')) {
                    if(items[j].classList.contains('branding')) {
                        items[j].style.display = 'block';
                    } else {
                        items[j].style.display = 'none';
                    }
                } else if(pickBtn[i].classList.contains('web')) {
                    if(items[j].classList.contains('web')) {
                        items[j].style.display = 'block';
                    } else {
                        items[j].style.display = 'none';
                    }
                } else if(pickBtn[i].classList.contains('html')) {
                    if(items[j].classList.contains('html')) {
                        items[j].style.display = 'block';
                    } else {
                        items[j].style.display = 'none';
                    }
                } else if(pickBtn[i].classList.contains('wordpress')) {
                    if(items[j].classList.contains('html')) {
                        items[j].style.display = 'block';
                    } else {
                        items[j].style.display = 'none';
                    }
                } else {
                    items[j].style.display = 'flex';
                }
            }
        })
    }
}
filterOption();

// team board
function teammateBlock() {
    //Teammate photo
    let photoBlock = document.querySelector('.teammate_photo'),
        photos = ['./img/teammate1.jpg', './img/teammate2.jpg', './img/teammate3.jpg'],
        rand = Math.floor(Math.random() * photos.length),
        team_btn = document.querySelectorAll('.circle_btn');

    // Progress variable
    let bar = document.querySelectorAll('.progress-bar'),
        brandingBar,
        designBar,
        interfaceBar;

    // Teammate name
    let name = document.querySelector('#name'),
        position = document.querySelector('#position');

    photoBlock.style.backgroundImage = 'url(' + photos[0] + ')';

    team_btn.forEach(function(el) {
        let btn_index = el.getAttribute('data-value');

        el.addEventListener('click', function() {
            switch (btn_index) {
                case '1':
                    photoBlock.style.backgroundImage = 'url(' + photos[0] + ')';
                    brandingBar = '82%';
                    designBar = '76%';
                    interfaceBar = '90%';
                    name.innerHTML = 'Abdulah Noman';
                    position.innerHTML = 'Creative Director, code cafe';
                    break;
                case '2':
                    photoBlock.style.backgroundImage = 'url(' + photos[1] + ')';
                    brandingBar = '80%';
                    designBar = '50%';
                    interfaceBar = '95%';
                    name.innerHTML = 'Jeremy Chang';
                    position.innerHTML = 'UI Director, code clear';
                    break;
                case '3':
                    photoBlock.style.backgroundImage = 'url(' + photos[2] + ')';
                    brandingBar = '93%';
                    designBar = '79%';
                    interfaceBar = '67%';
                    name.innerHTML = 'Billy Willey';
                    position.innerHTML = 'Designer, photoshop Master';
                    break;
            }
            bar.forEach(function(el) {
                if(el.classList.contains('branding')) {
                    el.style.width = brandingBar;
                }
                if(el.classList.contains('design')) {
                    el.style.width = designBar;
                }
                if(el.classList.contains('interface')) {
                    el.style.width = interfaceBar;
                }
            });
            progress();
        })
    });
}
teammateBlock();

//Progress bar
function progress() {
    let bar = document.querySelectorAll('.progress-bar'),
        outSpan = document.querySelectorAll('.percent');

    bar.forEach(function(el) {
        let elWidth = el.style.width;
        outSpan.forEach(function(p) {
            if(el.classList.contains('design') && p.classList.contains('design')) {
                p.innerHTML = elWidth;
            }
            if(el.classList.contains('branding') && p.classList.contains('branding')) {
                p.innerHTML = elWidth;
            }
            if(el.classList.contains('interface') && p.classList.contains('interface')) {
                p.innerHTML = elWidth;
            }
        })
    })
}

// Slide quotes variables
let main = document.querySelectorAll('.main_quote'),
    buttonChange = document.querySelectorAll('.slide_btn');

//show only one, hide other quote
function showOnlyOne(arr) {
    arr.forEach(function(el) {
        if(el === arr[0]) {
            el.style.display = 'flex';
        } else {
            el.style.display = 'none';
        }
    })
}
showOnlyOne(main);

// quote slide
function slideQuote(arr1, arr2) {
    function changeSlide(el, arr) {
        let elIndex = el.getAttribute('data-num');
        arr.forEach(function(item) {
            let slideIndex = item.getAttribute('data-num');
            if(elIndex === slideIndex) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        })
    }
    arr2.forEach(function(el) {
        el.addEventListener('click', function() {
            changeSlide(el, arr1);
        })
    })
}
slideQuote(main, buttonChange);

// Blog slide
let blogContent = document.querySelectorAll('.main_content'),
    blogBtn = document.querySelectorAll('.slide_blog-btn');

// call function slide for blog
showOnlyOne(blogContent);
slideQuote(blogContent, blogBtn);

// Price Cards
let cards = document.querySelectorAll('.option');

function hoverCard(arr) {
    arr.forEach(function(item) {
        let hideBlock = item.firstElementChild;
        item.addEventListener('mouseenter',function() {
            hideBlock.style.transform = 'translateY(3%)';
        });
        item.addEventListener('mouseleave', function() {
            hideBlock.style.transform = 'translateY(-50%)';
        });
    })
}
hoverCard(cards);

// Map
let map = document.querySelector('.dark_fon');

map.addEventListener('click', function() {
    this.style.opacity = '0';
    this.style.transition = '1s ease-out';
    setTimeout(function() {
        map.style.zIndex = '-5';
    }, 2000);
});