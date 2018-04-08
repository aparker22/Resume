let addEventListeners = () => {
    let downloadResume = document.querySelector('body > div > div.top > div.top-navbar > ul.top-navbar-right > li:nth-child(4)');
    downloadResume.addEventListener('click', addDownloadResumeMenu); 
}

let addDownloadResumeMenu = (e) => {
    let resumeMenu = document.querySelector('.resume-menu');
    resumeMenu.classList.add('active');
    resumeMenu.addEventListener('click', (e) => {
        resumeMenu.classList.remove('active')
    });
}

addEventListeners();