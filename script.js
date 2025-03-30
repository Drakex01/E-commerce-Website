// Mobile Menu Toggle
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('nav');

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Product Slider
const imgSlider = document.querySelector('.img-slider');
const items = document.querySelectorAll('.item');
const imgItems = document.querySelectorAll('.img-item');
const infoItems = document.querySelectorAll('.info-item');

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let colors = ['#3674be', '#d26181', '#ceb13d', '#c6414c', '#171f2b', '#50aa61'];
let indexSlider = 0;
let index = 0;

const slider = () => {
    imgSlider.style.transform = `rotate(${indexSlider * 60}deg)`;

    items.forEach(item => {
        item.style.transform = `rotate(${indexSlider * -60}deg)`;
    });

    document.querySelector('.img-item.active').classList.remove('active');
    imgItems[index].classList.add('active');

    document.querySelector('.info-item.active').classList.remove('active');
    infoItems[index].classList.add('active');

    document.body.style.background = colors[index];
};

nextBtn.addEventListener('click', () => {
    indexSlider++;
    index++;
    if (index > imgItems.length - 1) {
        index = 0;
    }

    slider();
});

prevBtn.addEventListener('click', () => {
    indexSlider--;
    index--;
    if (index < 0) {
        index = imgItems.length - 1;
    }

    slider();
});

// Make slider items clickable
imgItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        // Calculate the number of steps to rotate
        let steps = idx - index;
        
        // Update indexSlider and index
        indexSlider += steps;
        index = idx;
        
        // Call slider function to update UI
        slider();
    });
});

// Initialize color selection
// Initialize color selection
document.addEventListener('DOMContentLoaded', () => {
    // Add click event to color selectors
    const colorSpans = document.querySelectorAll('.colors span');
    
    colorSpans.forEach((span, idx) => {
        span.addEventListener('click', () => {
            // Remove active class from current active color
            document.querySelector('.colors span.active').classList.remove('active');
            // Add active class to clicked color
            span.classList.add('active');
            // Change product color/image
            index = idx;
            indexSlider = idx;
            slider();
        });
    });
});