import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector('.gallery');
const galleryItemsList = makeGalleryItems(galleryItems);

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

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
