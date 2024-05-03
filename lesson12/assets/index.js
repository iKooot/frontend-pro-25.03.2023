const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');

box1.style.transition = 'transform 1s ease';
box2.style.transition = 'transform 2s ease';
box3.style.transition = 'transform 1000ms ease';
box4.style.transition = 'transform 0.5s ease';


setTimeout(function() {
    box1.style.transform = 'scale(1.2)';
    box2.style.transform = 'translateY(50px)'
    box3.style.transform = 'rotate(180deg)'
    box4.style.transform = 'translateX(50px)'
}, 100);