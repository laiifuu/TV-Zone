import generatePopupDOM from './popupDOM.js';
import listener from './listener.js';
import { addNewReservation } from './postData.js';
import { getAllReservations } from './fetchData.js';
import { renderReservations } from './renderlist.js';
import count from '../counterFunctions/reservationCounter.js';

let counter = 0;
let reservations = [];
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUJtIKt0WlDGnehZIL7s/reservations';
const getReservationsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUJtIKt0WlDGnehZIL7s/reservations?item_id=';

const reservationPopup = (obj) => {
  const Popup = document.createElement('div');
  generatePopupDOM(Popup, obj);
  const container = document.createElement('div');
  container.classList.add('popup-container');
  container.append(Popup);
  const closeBtn = Popup.querySelector('.close-btn');
  const reserve = Popup.querySelector('.reserve');
  const userName = Popup.querySelector('.name-input');
  const dateStart = Popup.querySelector('.startdate-input');
  const dateEnd = Popup.querySelector('.enddate-input');

  getAllReservations(obj.id, getReservationsURL)
    .then((res) => res.json())
    .then((data) => {
      reservations = data;
      counter = count(data) || 0;
      renderReservations(reservations, counter);
    }).catch((error) => error);

  listener(closeBtn, 'click', () => container.remove());
  listener(reserve, 'click', () => {
    addNewReservation(obj.id, userName.value, dateStart.value, dateEnd.value, url);
  });

  return container;
};
export default reservationPopup;
