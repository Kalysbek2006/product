let btn = document.querySelector('.three');
let body = document.querySelector ('.black')
btn.addEventListener('click', () => {
    if (body.classList === 'white') {
       body.classList.replace('white', 'dark')

    }else {
        body.classList.replace('dark', 'white')
    }

})
