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

  // Список текстов для карточек
  const cardTexts = [
    'Ты всегда делаешь мой день светлее! 💖',
    'Ты мой ангел-хранитель, мой компас, который всегда ведет меня!💖',
    'Ты - моя радость и вдохновение. Спасибо, что ты со мной!💖',
    'С тобой я чувствую себя счастливее всех людей на свете! 💖',
    'Ты делаешь мою жизнь цветущей и прекрасной. 💖',
    'Твоя любовь-это мое самое большое сокровище.Спасибо за всё! 💖',
    'С тобой каждый день - праздник. Будь всегда рядом! 💖',
    'Ты - мое солнце, которое освещает мой путь. 💖',
    'С тобой моя жизнь наполнена смыслом и радостью 💖',
    'Ты - моя звезда на небе, мой надежный ориентир в жизни. 💖',
    'Твои глаза-это мое небо,где я нахожу покой и счастье. 💖',
    'С тобой каждый день - праздник! 💖',
    'Ты - мой вдохновитель и мой главный оптимист! 💖',
    'С тобой даже самые обычные моменты становятся особенными. 💖',
    'Ты наполняешь мою жизнь смыслом и радостью каждый день. 💖',
    'Ты - мой луч света в темноте, моя надежда и поддержка. 💖',
    'Твоя улыбка - мое счастье, которое я ценю больше всего. 💖',
    'Твоя любовь крепче всех бурь и непогод, она несокрушима. 💖',
    'С тобой я чувствую, что могу преодолеть все трудности. 💖',
    'Ты - мое драгоценное сокровище, защищаемое сильнее всего. 💖',
    'С каждым мгновением я все больше и больше ценю тебя. 💖',
    'Ты-моя радуга после дождя,мой знак надежды и возрождения. 💖',
    'Ты даришь мне крылья, чтобы я мог летать в облаках счастья. 💖',
    'Ты - мое сокровище,найденное в сердце океана любви. 💖',
    'Твоё присутствие делает мою жизнь целостной и полной. 💖',
    'С тобой я ощущаю,что небо становится яснее и ярче. 💖',
    'Твоя забота и внимание - как светлый огонек во мраке. 💖',
    'Любовь к тебе наполняет мое сердце теплом и блаженством каждый день. 💖',
    'С тобой каждый день - как новая страница в самой прекрасной книге.💖',
    'Твоя любовь-это магический ключ, открывающий все двери.💖',
    'Твои объятия - мое самое уютное убежище от всех забот и тревог.💖',
    'С тобой я чувствую, что могу преодолеть любые трудности и преграды.💖',
    'Ты - мое созвездие счастья на небе жизни, которое освещает все вокруг.💖',
    'С тобой я осмеливаюсь мечтать о самых смелых идеях и желаниях.💖',
    'С тобой каждый день - как новый мир, который я хочу исследовать и познать.💖',
    'Ты - мое сокровище, мое счастье. Люблю тебя!С Днем Святого Валентина! ',
  ];

  // Переменная для отслеживания текущего индекса текста на карточке
  let currentIndex = 0;

  // Получаем элементы, с которыми будем взаимодействовать
  const valentineCard = document.querySelector('.card');
  const cardText = document.querySelector('.text');

  // Функция для изменения текста на карточке
  function changeCardText() {
    // Увеличиваем индекс или возвращаемся к началу списка, если достигнут конец
    currentIndex = (currentIndex + 1) % cardTexts.length;
    // Устанавливаем новый текст на карточку
    cardText.textContent = cardTexts[currentIndex];
    // Проверяем, достигли ли конца списка текстов
    if (currentIndex === cardTexts.length - 1) {
      // Если достигли, удаляем обработчик клика для остановки прокрутки
      valentineCard.removeEventListener('click', changeCardText);
    }
  }
  // Добавляем обработчик события на клик по валентинке
  valentineCard.addEventListener('click', changeCardText);
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
// Функция для изменения заднего фона
function changeBackgroundImage() {
  // Увеличиваем индекс, чтобы переключиться на следующую картинку
  currentIndex = (currentIndex + 1) % backgroundImageUrls.length;

  // Создаем новый Image объект
  const preloadImage = new Image();

  // Загружаем следующее изображение
  preloadImage.src = backgroundImageUrls[currentIndex];

  // После загрузки изображения, меняем фон без момента разрыва
  preloadImage.onload = () => {
    document.body.style.backgroundImage = 'url("' + preloadImage.src + '")';
  };
}

// Запускаем функцию изменения заднего фона каждые 7 секунд
setInterval(changeBackgroundImage, 7000); // Изменяйте каждые 7 секунд (или другое желаемое время)

// Обработчик события DOMContentLoaded, который срабатывает после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  // Получаем ссылки на элементы контейнера, карты и аудио
  const container = document.querySelector('.container');
  const card = document.querySelector('.card');
  const audio = document.getElementById('myAudio');

  // Переменная для отслеживания статуса воспроизведения музыки
  let audioPlaying = false;

  // Функция для воспроизведения аудио
  function playAudio() {
    // Проверяем, играет ли аудио в данный момент
    if (!audioPlaying) {
      // Если аудио не играет, включаем его и устанавливаем флаг в true
      audio.play();
      audioPlaying = true;
    }
  }

  // Добавляем обработчик события для события click на контейнере
  container.addEventListener('click', playAudio);

  // Добавляем обработчик события для события click на карточке
  card.addEventListener('click', () => {
    // При клике на карточку, анимируем её
    card.style.transition = 'top 0.5s';
    card.style.top = '-90px';
    // Включаем аудио
    playAudio();
  });

  // Список текстов для карточек
  const cardTexts = [
    'Ты всегда делаешь мой день светлее! 💖',
    // остальные тексты
  ];

  // Переменная для отслеживания текущего индекса текста на карточке
  let currentIndex = 0;

  // Получаем элементы, с которыми будем взаимодействовать
  const valentineCard = document.querySelector('.card');
  const cardText = document.querySelector('.text');

  // Функция для изменения текста на карточке
  function changeCardText() {
    // Увеличиваем индекс или возвращаемся к началу списка, если достигнут конец
    currentIndex = (currentIndex + 1) % cardTexts.length;
    // Устанавливаем новый текст на карточку
    cardText.textContent = cardTexts[currentIndex];
    // Проверяем, достигли ли конца списка текстов
    if (currentIndex === cardTexts.length - 1) {
      // Если достигли, удаляем обработчик клика для остановки прокрутки
      valentineCard.removeEventListener('click', changeCardText);
    }
  }

  // Добавляем обработчик события на клик по валентинке
  valentineCard.addEventListener('click', changeCardText);
});

// Создайте массив с URL-адресами картинок заднего фона
var backgroundImageUrls = [
  'love1.jpg',
  // остальные изображения
];
var currentIndex = 0;

// Функция для изменения заднего фона
function changeBackgroundImage() {
  // Увеличиваем индекс, чтобы переключиться на следующую картинку
  currentIndex = (currentIndex + 1) % backgroundImageUrls.length;
  // Устанавливаем новый задний фон с плавной анимацией
  document.body.style.backgroundImage = 'url("' + backgroundImageUrls[currentIndex] + '")';
}

// Функция для изменения заднего фона
function changeBackgroundImage() {
  // Увеличиваем индекс, чтобы переключиться на следующую картинку
  currentIndex = (currentIndex + 1) % backgroundImageUrls.length;

  // Создаем новый Image объект
  const preloadImage = new Image();

  // Загружаем следующее изображение
  preloadImage.src = backgroundImageUrls[currentIndex];

  // После загрузки изображения, меняем фон без момента разрыва
  preloadImage.onload = () => {
    document.body.style.backgroundImage = 'url("' + preloadImage.src + '")';
  };
}

// Запускаем функцию изменения заднего фона каждые 7 секунд
setInterval(changeBackgroundImage, 5000); // Изменяйте каждые 7 секунд (или другое желаемое время)
