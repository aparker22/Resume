let addEventListeners = () => {
    let downloadResume = document.querySelector('body > div > div.top > div.top-navbar > ul.top-navbar-right > li:nth-child(4)');
    downloadResume.addEventListener('click', addDownloadResumeMenu); 

    let form = document.querySelector('body > div > div.contact > div.contact-form > form')
    form.addEventListener('submit', sendEmail);

    let mobileMenu = document.querySelector('body > div > div.top > div.top-navbar-mobile > ul > li:nth-child(1)');
    mobileMenu.addEventListener('click', openMobileMenu);
}


let openMobileMenu = (e) => {
    e.preventDefault();
    let mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
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
    console.log(`${window.location}/email`)
    form.reset();
    fetch(`${window.location}/email`, {
        method: 'POST', 
        body: JSON.stringify(email),
      })
}

addEventListeners();