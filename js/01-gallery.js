import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl =
  document.querySelector('.gallery');
const galleryItemsList =
  makeGalleryItems(galleryItems);

function makeGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href='${original}'>
          <img
            class="gallery__image"
            src='${preview}'
            data-source='${original}'
            alt='${description}'
          />
        </a>
      </div>`;
    })
    .join('');
}

galleryContainerEl.innerHTML = galleryItemsList;

galleryContainerEl.addEventListener(
  'click',
  openModal
);

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source} width="800" height="600" alt=${event.target.alt}> `
  );

  instance.show();

  window.addEventListener('keydown', event => {
    if (event.key !== 'Escape') {
      return;
    }
    instance.close();
  });
}
