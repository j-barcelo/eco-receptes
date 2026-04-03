document.addEventListener('DOMContentLoaded', () => {
/* ══════════════════════════════════════
    Tags / Etiquetes de la pàgina de categoria
   ══════════════════════════════════════ */
    const tagButtons = document.querySelectorAll('.recipes-list__tag');
    const cards = document.querySelectorAll('.recipes-list .card');
    const countEl = document.querySelector('.recipes-list__count');

    function applyGridAsymmetry() {
        const visibleCards = Array.from(cards).filter(card => !card.classList.contains('card--hide'));
        
        visibleCards.forEach((card, index) => {
            card.classList.toggle('card--offset', index % 2 === 0);
        });
    }

    if (tagButtons.length > 0 && cards.length > 0) {
        applyGridAsymmetry();

        tagButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');

                tagButtons.forEach(btn => btn.classList.remove('recipes-list__tag--active'));
                button.classList.add('recipes-list__tag--active');

                let visibleCount = 0;

                cards.forEach(card => {
                    const tags = card.getAttribute('data-tags') || '';
                    const isVisible = filter === 'all' || tags.split(' ').includes(filter);

                    card.classList.toggle('card--hide', !isVisible);
                    if (isVisible) visibleCount++;
                });

                applyGridAsymmetry();
                countEl.textContent = `${visibleCount} productes`;
            });
        });
    }
});