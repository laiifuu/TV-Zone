import '../reservationPopupStyles.css';
import generatePopupDOM from './popupDOM.js';
import listener from './helperFunctions/listener.js';
import addNewReservation from './APIs/addNewReservation.js';
import getAllReservations from './APIs/getAllReservations.js';
import { renderReservations } from './renderlist.js';

let counter = 0;
let reservations = [];

const reservationPopup = (obj) => {
  const Popup = document.createElement('div');
  generatePopupDOM(Popup, obj);
  const closeBtn = Popup.querySelector('.close-icon');
  const reserve = Popup.querySelector('.reserve');
  const userName = Popup.querySelector('.name-input');
  const dateStart = Popup.querySelector('.startdate-input');
  const dateEnd = Popup.querySelector('.enddate-input');

  getAllReservations(obj.id)
    .then((res) => res.json())
    .then((data) => {
      reservations = data;
      counter = data.length || 0;
      renderReservations(reservations, counter);
    });

  listener(closeBtn, 'click', () => Popup.remove());
  listener(reserve, 'click', () => {
    addNewReservation(obj.id, userName.value, dateStart.value, dateEnd.value);
  });

  return Popup;
};
export default reservationPopup;
