let addEventListeners = () => {
    let downloadResume = document.querySelector('body > div > div.top > div.top-navbar > ul.top-navbar-right > li:nth-child(4)');
    downloadResume.addEventListener('click', addDownloadResumeMenu); 

    let form = document.querySelector('body > div > div.contact > div.contact-form > form')
    form.addEventListener('submit', sendEmail);
}

let addDownloadResumeMenu = (e) => {
    let resumeMenu = document.querySelector('.resume-menu');
    resumeMenu.classList.add('active');
    resumeMenu.addEventListener('click', (e) => {
        resumeMenu.classList.remove('active')
    });
}

let sendEmail = (e) => {
    e.preventDefault();
    let form = document.querySelector('body > div > div.contact > div.contact-form > form')
    let email = {email: form.email.value, subject: form.subject.value, message: form.message.value};
    console.log('Message Sent');
    form.reset();
    fetch('/email', {
        method: 'POST', 
        body: JSON.stringify(email),
      })
}

addEventListeners();