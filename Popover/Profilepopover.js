const popover = document.querySelector('.popover');
const userProfileButton = document.querySelector('.user-profile-button')
const container = document.querySelector('.container');

userProfileButton.addEventListener('mouseover', ()=> {
    popover.style.display = "block"
})
container.addEventListener('mouseleave', ()=> {
    popover.style.display = "none"
})