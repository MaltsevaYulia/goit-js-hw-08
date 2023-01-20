// Add imports above this line
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galaryContainer=document.querySelector('.gallery')
const galaryMarkup = createGalaryMarkup(galleryItems);
galaryContainer.insertAdjacentHTML('beforeend',galaryMarkup)

function createGalaryMarkup(galleryItems) {
    return galleryItems.map(({preview,original,description}) =>
        `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
    ).join('')

}


const lightbox = new SimpleLightbox('.gallery a', { /* options */captionsData: 'alt',captionPosition:'bottom',captionDelay:	250 });

