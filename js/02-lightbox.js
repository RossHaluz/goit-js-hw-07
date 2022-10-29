import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryPhotos = document.querySelector('.gallery');

let items = galleryItems.map(({ preview, original, description }) => 
`<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a></li>`
).join('')


galleryPhotos.innerHTML = items

const lightbox = new SimpleLightbox('.gallery a', {  
  captions: true,
  captionPosition: 'bottom',
    captionsData: "alt",
    captionDelay: 250,
});


