import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import 'photoswipe/dist/photoswipe.css';

document.addEventListener('DOMContentLoaded', () => {
    /* ══════════════════════════════════════
        PhotoSwipe / Galeria d'imatges
        ══════════════════════════════════════ */

    const lightbox = new PhotoSwipeLightbox({
        gallery: '.post-gallery',
        children: '.post-gallery__item',
        showHideAnimationType: 'fade',
        arrowPrevSVG: '<i class="fa-solid fa-chevron-left"></i>',
        arrowNextSVG: '<i class="fa-solid fa-chevron-right"></i>',
        closeSVG: '<i class="fa-solid fa-xmark"></i>',
        zoomSVG: '<i class="fa-solid fa-magnifying-glass-plus"></i>',
        pswpModule: () => import('photoswipe/dist/photoswipe.esm.js')
    });

    lightbox.on('beforeOpen', () => {
        document.querySelectorAll('.post-gallery__item').forEach(link => {
            if (!link.dataset.pswpWidth) {
                const fullImage = new Image();
                fullImage.onload = () => {
                    link.dataset.pswpWidth = fullImage.naturalWidth;
                    link.dataset.pswpHeight = fullImage.naturalHeight;
                };
                fullImage.src = link.href;
            }
        });
    });

    lightbox.init();

});