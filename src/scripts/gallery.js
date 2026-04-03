import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
/* ══════════════════════════════════════
    GLightbox / Galeria d'imatges
    ══════════════════════════════════════ */

    // Fix perque no pot obtenir la ruta de la imatge a partir de l'enllaç
    document.querySelectorAll('.gallery-box').forEach(link => {
        const img = link.querySelector('img');
        if (img) link.href = img.src;
    });

    const lightbox = GLightbox({
        selector: '.gallery-box',
        openEffect: 'fade',
        closeEffect: 'fade'
    });

});