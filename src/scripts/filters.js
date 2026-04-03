document.addEventListener('DOMContentLoaded', () => {

    const tagButtons = document.querySelectorAll('.recipes-list__tag');
    const cardsContainer = document.querySelector('.recipes-list__grid');
    const orderToggle = document.querySelector('.recipes-list__sort');
    const countEl = document.querySelector('.recipes-list__count');

    const getAllCards = () => cardsContainer.querySelectorAll('.card');
    const getVisibleCards = () => Array.from(getAllCards()).filter(c => !c.classList.contains('card--hidden'));
    const applyGridAsymmetry = () => getVisibleCards().forEach((card, i) => card.classList.toggle('card--offset', i % 2 === 0));


/* ══════════════════════════════════════
    Ordenar targetes
    ══════════════════════════════════════ */
    const SORT_CONFIG = {
        relevance: {
            label: 'Rellevància',
            sorter: (a, b) => a.dataset.relevance - b.dataset.relevance
        },
        date: {
            label: 'Recent',
            sorter: (a, b) => b.dataset.date.localeCompare(a.dataset.date)
        }
    };


    if (orderToggle && cardsContainer) {
        orderToggle.addEventListener('click', () => {

            const orderBy = orderToggle.dataset.sort === 'relevance' ? 'date' : 'relevance';
            orderToggle.setAttribute('data-sort', orderBy);
            orderToggle.querySelector('b').textContent = SORT_CONFIG[orderBy].label;

            // Reordenar targetes
            Array.from(getAllCards()).sort(SORT_CONFIG[orderBy].sorter).forEach(card => cardsContainer.appendChild(card));

            
            applyGridAsymmetry();
        });
    }

/* ══════════════════════════════════════
    Filtrar targetes
    ══════════════════════════════════════ */
    if (tagButtons.length && cardsContainer) {
        tagButtons.forEach(button => {
            button.addEventListener('click', () => {

                const filter = button.dataset.filter;
                tagButtons.forEach(btn => btn.classList.remove('recipes-list__tag--active'));
                button.classList.add('recipes-list__tag--active');

                //Filtrar targetes
                let visibleCount = 0;
                getAllCards().forEach(card => {
                    const isVisible = filter === 'all' || card.dataset.tags?.split(' ').includes(filter);
                    card.classList.toggle('card--hidden', !isVisible);
                    if (isVisible) visibleCount++;
                });


                applyGridAsymmetry();
                if (countEl) countEl.textContent = `${visibleCount} productes`;
            });
        });
    }
});