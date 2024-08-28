let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(() => {
  nextSlide();
}, 4000);
const container = document.getElementById('event-container');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const itemsToShow = 1;
const itemWidth = container.children[0].offsetWidth + 30;
let scrollPosition = 0;

// Clone items to create an infinite loop effect
const cloneItem = () => {
  const items = Array.from(container.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    container.appendChild(clone);
  });
};

cloneItem();

nextBtn.addEventListener('click', () => {
  if (scrollPosition < container.scrollWidth - container.clientWidth) {
    scrollPosition += itemWidth * itemsToShow;
    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  } else {
    scrollPosition = 0;
    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  }
});

prevBtn.addEventListener('click', () => {
  if (scrollPosition > 0) {
    scrollPosition -= itemWidth * itemsToShow;
    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  } else {
    scrollPosition = container.scrollWidth - container.clientWidth;
    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  }
});

let currentIndexs = 0;

function updateSlidePosition() {
    const carouselInners = document.querySelector('.carousel-inners');
    const offset = -currentIndexs * 370; // Adjusted according to the container width
    carouselInners.style.transform = `translateX(${offset}px)`;
}

function nextsSlide() {
    const slides = document.querySelectorAll('.carousel-items');
    if (currentIndexs < slides.length - 1) {
        currentIndexs++;
    } else {
        currentIndexs = 0;
    }
    updateSlidePosition();
}

function prevsSlide() {
    const slides = document.querySelectorAll('.carousel-items');
    if (currentIndexs > 0) {
        currentIndexs--;
    } else {
        currentIndexs = slides.length - 1;
    }
    updateSlidePosition();
};
const containers = document.getElementById('program-container');
const nextBtns = document.getElementById('nexts');
const prevBtns = document.getElementById('prevs');
const itemsToShows = 1;
const itemsWidth = containers.children[0].offsetWidth + 30;
let scrollsPosition = 0;

// Clone items to create an infinite loop effect
const cloneItems = () => {
  const items = Array.from(containers.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    containers.appendChild(clone);
  });
};

cloneItems();

nextBtns.addEventListener('click', () => {
  if (scrollsPosition < containers.scrollWidth - containers.clientWidth) {
    scrollsPosition += itemsWidth * itemsToShows;
    containers.scrollTo({ left: scrollsPosition, behavior: 'smooth' });
  } else {
    scrollsPosition = 0;
    containers.scrollTo({ left: scrollsPosition, behavior: 'smooth' });
  }
});

prevBtns.addEventListener('click', () => {
  if (scrollsPosition > 0) {
    scrollsPosition -= itemsWidth * itemsToShows;
    containers.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  } else {
    scrollsPosition = containers.scrollWidth - containers.clientWidth;
    containers.scrollTo({ left: scrollsPosition, behavior: 'smooth' });
  }
});
const contain = document.getElementById('pro-container'); // Corrected ID
const frontBtns = document.getElementById('front'); // Corrected ID
const previousBtns = document.getElementById('previous'); // Corrected ID
const itemToShow = 1;
const itemssWidth = contain.children[0].offsetWidth + 30;
let scrollsPositions = 0;

// Clone items to create an infinite loop effect
const clonedItems = () => {
  const items = Array.from(contain.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    contain.appendChild(clone);
  });
};

clonedItems();

frontBtns.addEventListener('click', () => {
  if (scrollsPositions < contain.scrollWidth - contain.clientWidth) {
    scrollsPositions += itemssWidth * itemToShow;
    contain.scrollTo({ left: scrollsPositions, behavior: 'smooth' });
  } else {
    scrollsPositions = 0;
    contain.scrollTo({ left: scrollsPositions, behavior: 'smooth' });
  }
});

previousBtns.addEventListener('click', () => {
  if (scrollsPositions > 0) {
    scrollsPositions -= itemssWidth * itemToShow;
    contain.scrollTo({ left: scrollsPositions, behavior: 'smooth' });
  } else {
    scrollsPositions = contain.scrollWidth - contain.clientWidth;
    contain.scrollTo({ left: scrollsPositions, behavior: 'smooth' });
  }
});









