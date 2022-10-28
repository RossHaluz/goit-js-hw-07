import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryPhotos = document.querySelector('.gallery');

let items = galleryItems.map(({ preview, original, description }) => 
`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
).join('')


galleryPhotos.insertAdjacentHTML('beforeend', items)

galleryPhotos.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault()
    const url = evt.target.dataset.source
    console.log(url)
    if (evt.target.nodeName !== 'IMG') {
        return
    } 
        const instance = basicLightbox.create(`
        <img src="${url}" width="800" height="600">`)
        instance.show();

    galleryPhotos.addEventListener('keydown', closeModal)

    function closeModal(evt) {
    if (evt.code === "Escape") {
        instance.close()
    }
}
}




