const shareContainer = document.querySelector('.share_container');
const btnShare = document.querySelector('.image_share');

btnShare.addEventListener('click', () => {
  btnShare.classList.toggle('active');
  shareContainer.classList.toggle('active');
});

