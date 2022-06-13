export default function initApp() {
  const buttonEl = document.querySelector('.cookie-consent__button');
  const coockieBlockEl = document.querySelector('.cookie-consent');
  const storage = window.localStorage;

  const isHide = storage.getItem('isHide');
  
  if (isHide) {
    coockieBlockEl.classList.add('hide');
    return;
  }

  buttonEl.addEventListener('click', (event) => {
    event.preventDefault();
    coockieBlockEl.classList.add('hide');
    storage.setItem('isHide', true);
  });
};