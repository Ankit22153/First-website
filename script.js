 const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.addEventListener('play', () => {
                videos.forEach(v => {
                    if (v !== video) {
                        v.pause();
                    }
                });
            });
        });


         const audios = document.querySelectorAll('audio');
        audios.forEach(audio => {
            audio.addEventListener('play', () => {
                audios.forEach(a => {
                    if (a !== audio) {
                        a.pause();
                    }
                });
            });
        });