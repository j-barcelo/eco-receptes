import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import 'photoswipe/dist/photoswipe.css';

document.addEventListener('DOMContentLoaded', () => {
    /* ══════════════════════════════════════
        PhotoSwipe / Galeria de Vídeos (Youtube)
        ══════════════════════════════════════ */

    document.querySelectorAll('a.video-gallery__link').forEach((link) => {
        const singleVideoLightbox = new PhotoSwipeLightbox({
            gallery: link,
            showHideAnimationType: 'fade',
            closeSVG: '<i class="fa-solid fa-xmark"></i>',
            arrowPrev: false,
            arrowNext: false,
            counter: false,
            zoom: false,
            allowPanToNext: false,
            pswpModule: () => import('photoswipe/dist/photoswipe.esm.js')
        });

        singleVideoLightbox.on('contentLoad', (e) => {
            const { content } = e;
            if (content.type === 'youtube') {
                e.preventDefault();

                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${content.data.element.dataset.videoId}?autoplay=1&si=joESw7gfgfjGSZos`;
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.title = 'YouTube video player';
                iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
                iframe.referrerPolicy = 'strict-origin-when-cross-origin';
                iframe.allowFullscreen = true;

                content.element = iframe;
            }
        });

        singleVideoLightbox.init();
    });
});
