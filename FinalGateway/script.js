// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');


// constants
const urls = [
    "images/altman4.png",
    "images/sandy.png",
    "images/buffy.png",
    "images/catty.png",
    "images/joseph.png"
    ];

// variables
let cardCount = 0;
let swipeNum = 0;

// functions


function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 5],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}



// first 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard();
}

