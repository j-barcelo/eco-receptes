document.querySelectorAll('.video-facade').forEach(facade => {
    const activate = () => {
        const videoId = facade.dataset.videoId;
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&si=joESw7gfgfjGSZos`;
        iframe.width = '790';
        iframe.height = '444';
        iframe.title = 'YouTube video player';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        iframe.classList.add('video-facade');
        facade.replaceWith(iframe);
    };

    facade.addEventListener('click', activate);
    facade.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') activate();
    });
});