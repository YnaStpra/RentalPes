'use strict';

const allCards = document.querySelectorAll('.container-member');
if (window.innerWidth < 990) {
    less990px(allCards);
} else {
    greater990px(allCards);
}

function less990px(array) {
    for (let i = 1; i <= array.length; i++) {
        let card = array[i - 1];
        
        if (i % 2) {
            card.style.opacity = 0;
            card.style.right = '110%';
            card.classList.add('less-from-left'); 
        } else {
            card.style.opacity = 0;
            card.style.left = '110%';
            card.classList.add('less-from-right');
        }
    }
}
function greater990px(array) {
    for (let i = 0; i < array.length; i++) {
        let card = array[i];
        
        if (i === 0 || i == 3) {
            card.style.right = '110%';
            card.classList.add('greater-from-left');
        } else if (i == 1 || i == 4) {
            card.style.opacity = 0;
            card.classList.add('greater-center');
        } else {
            card.style.left = '110%';
            card.classList.add('greater-from-right');
        }
    }
}

window.addEventListener('resize', function () {

    let width = window.innerWidth;

    if (width < 990) {
        allCards.forEach(function (card, i) {
            card.classList.remove('greater-from-left', 'greater-from-right', 'greater-center');

            if (i === 2) card.style.removeProperty('left');
        });

        less990px(allCards);
    } else {
        allCards.forEach(function (card, i) {
            card.classList.remove('less-from-left', 'less-from-right');

            if (i === 1 || i === 3) {
                card.style.removeProperty('left');
            } else if (i === 4) {
                card.style.removeProperty('right');
            }
            
        });

        greater990px(allCards);
    }
});

const footerLink = document.querySelector('#footer a'),
      profiles = ['https://github.com/YnaStpra'];

footerLink.href = profiles[Math.floor(Math.random() * profiles.length)];