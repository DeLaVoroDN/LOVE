// Получаем ссылки на элементы контейнера, карты и аудио
const container = document.querySelector('.container');
const card = document.querySelector('.card');
const audio = document.getElementById('myAudio');

// Добавляем обработчик события для события mouseenter на контейнере
container.addEventListener('mouseenter', () => {
  // При наведении мыши на контейнер, анимируем карту, поднимая ее наверх
  card.style.transition = 'top 0.5s';
  card.style.top = '-90px';
});

// Добавляем обработчик события для события mouseleave на контейнере
container.addEventListener('mouseleave', () => {
  // При уходе мыши с контейнера, возвращаем карту на место
  card.style.transition = 'top 0.5s';
  card.style.top = '0';
});

// Добавляем обработчик события для события click на контейнере
container.addEventListener('click', event => {
  // Проверяем, был ли клик именно на элементе .front
  if (event.target.classList.contains('front')) {
    // Если да, то анимируем карту, поднимая ее наверх, и воспроизводим аудио
    card.style.transition = 'top 0.5s';
    card.style.top = '-90px';
    audio.play();
  }
});
