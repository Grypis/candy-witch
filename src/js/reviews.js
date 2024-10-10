window.onload = () => {
  const reviewList = document.getElementById('reviewList');
  const cards = Array.from(reviewList.children);
  const totalCards = cards.length;
  let currentIndex = 0;
  const cardWidth = 283 + 16; // Ширина картки + gap (16px)

  // Клонування карток для безперервного руху
  for (let i = 0; i < totalCards; i++) {
    const clone = cards[i].cloneNode(true);
    reviewList.appendChild(clone);
  }

  function updateCarousel() {
    const offset = -currentIndex * cardWidth; // Обчислення зміщення
    reviewList.style.transform = `translateX(${offset}px)`;
  }

  function autoScroll() {
    currentIndex++;
    // Якщо досягли кінця оригінальних карток, скидаємо позицію до початку
    if (currentIndex >= totalCards) {
      currentIndex = 0; // Зворотнє прокручування
    }
    updateCarousel();
  }

  // Запуск автоматичної прокрутки кожні 3 секунди (3000 мілісекунд)
  setInterval(autoScroll, 3000);
};
