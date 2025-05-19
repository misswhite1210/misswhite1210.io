// script.js
window.onload = function() {
  const box = document.getElementById('movable-box');

  function moveBoxRandomly() {
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;

    const maxX = window.innerWidth - boxWidth;
    const maxY = window.innerHeight - boxHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    box.style.transform = 'none';
    box.style.left = randomX + 'px';
    box.style.top = randomY + 'px';
  }

  // 初始化居中
  box.style.left = '50%';
  box.style.top = '50%';
  box.style.transform = 'translate(-50%, -50%)';

  box.addEventListener('click', moveBoxRandomly);
};
