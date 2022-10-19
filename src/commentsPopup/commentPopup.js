import './commentPopupStyles.css';
import { renderPopup } from './modules/displayPopup.js';

const mainSection = document.querySelector('.shows-section');

window.openModal = (id) => {
  mainSection.appendChild(renderPopup(id));
};

window.closeModal = () => {
  const popupWindow = document.querySelector('.popup-comment');
  mainSection.removeChild(popupWindow);
};
