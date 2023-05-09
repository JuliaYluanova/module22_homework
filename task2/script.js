const iconBtn = document.getElementById('icon-btn');
const icon = iconBtn.querySelector('i');

iconBtn.addEventListener('click', () => {
  if (icon.classList.contains('bi-heart-fill')) {
    icon.classList.remove('bi-heart-fill');
    icon.classList.add('bi-suit-heart');
  } else {
    icon.classList.remove('bi-suit-heart');
    icon.classList.add('bi-heart-fill');
  }
});
