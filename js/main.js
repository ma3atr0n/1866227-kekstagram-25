const NAME = [
  'Артём',
  'Маша',
  'Катя',
  'Сергей',
  'Андрей',
  'Миша'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = [
  'Удачный кадр',
  'Одно из лучших фото',
  'Фотографи в высоком качестве'
];

const MAX_POST_ID = 25;
let commentId = 1;
let photoId = 1;


const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const genArrayFromObjects = (maxCount, fn) => Array.from({length: getRandomNumber(1, maxCount)}, fn);

const createPhotoComments = () => ({
  id: commentId++,
  avatar: `img/avatar-${ getRandomNumber(1, 6) }.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME)
});

const createPhotoDescription = () => ({
  url: `photos/${ photoId }.jpg`,
  id: photoId++,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomNumber(15, 200),
  comments: genArrayFromObjects(4, createPhotoComments)
});

const photos = Array.from({length: MAX_POST_ID}, createPhotoDescription);


/*
for (let m = 0; m < photos.length; m++) {
  console.log(photos[m]);
}
*/
