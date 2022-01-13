const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
galleryEl.style.listStyle = 'none';

const addImagesToGallary = images => {
  return images.map(({ url, alt }) => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('gallery__item');
    itemEl.insertAdjacentHTML(
      'beforeend',
      `<img src="${url}" alt="${alt}" width="auto" height="140px">`,
    );

    return itemEl;
  });
};

const gallaryItemsEl = addImagesToGallary(images);

galleryEl.append(...gallaryItemsEl);

// Gallary style

const paragraphEl = document.querySelector('p');
const contsinerEl = document.createElement('div');
contsinerEl.classList.add('container');

paragraphEl.after(contsinerEl);
contsinerEl.append(galleryEl);
