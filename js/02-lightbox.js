import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryPhotos = document.querySelector('.gallery');

let items = galleryItems.map(({ preview, original, description }) => 
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`
).join('')


galleryPhotos.innerHTML = items

const lightbox = new SimpleLightbox('.gallery a', {  
    captionsData: "alt",
    captionDelay: 250,
});


