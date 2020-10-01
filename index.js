
const shareButton = document.querySelector('.share_button');
const shareOptions = document.querySelector('.share_options');

shareButton.addEventListener('click', () => {
    shareOptions.classList.toggle('share_options--visible');
    shareButton.classList.toggle('share_button--active');
})