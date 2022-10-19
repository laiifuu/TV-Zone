import './commentPopupStyles.css';
import renderPopup from './modules/displayPopup.js';

const mainSection = document.querySelector('.shows-section');
const body = document.querySelector('body');

window.openModal = (id) => {
  mainSection.appendChild(renderPopup(id));
  body.style.overflow = 'hidden';
};

window.closeModal = () => {
  const popupWindow = document.querySelector('.popup-comment');
  mainSection.removeChild(popupWindow);
  body.style.overflow = 'visible';
};
