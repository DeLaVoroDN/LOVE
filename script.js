//Обработчик события DOMContentLoaded, который срабатывает после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
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
});
// Создайте массив с URL-адресами картинок заднего фона
var backgroundImageUrls = [
  'love1.jpg',
  'love2.jpg',
  'love3.jpg',
  'love4.jpg',
  'love5.jpg',
  'love6.jpg',
  'love7.jpg',
  'love8.jpg',
  'love9.jpg',
  'love10.jpg',
  'love11.jpg',
  'love12.jpg',
  'love13.jpg',
  'love14.jpg',
  'love15.jpg',
  'love16.jpg',
];
var currentIndex = 0;

// Функция для изменения заднего фона
function changeBackgroundImage() {
  // Увеличиваем индекс, чтобы переключиться на следующую картинку
  currentIndex = (currentIndex + 1) % backgroundImageUrls.length;
  // Устанавливаем новый задний фон с плавной анимацией
  document.body.style.backgroundImage = 'url("' + backgroundImageUrls[currentIndex] + '")';
}

// Запускаем функцию изменения заднего фона каждые 5 секунд
setInterval(changeBackgroundImage, 7000); // Изменяйте каждые 5 секунд (или другое желаемое время)
