import { getAllReservations } from './fetchData.js';
import count from '../counterFunctions/reservationCounter.js';

const renderReservations = (list, counter) => {
  const reservationList = document.querySelector('.reservation-list');
  const count = document.querySelector('.counter');
  count.innerHTML = `  (${counter})`;
  const listHTML = list.map(
    (item) => `<li class='reservation-item'>
  <span class='user-name'>${item.username}</span>: 
  <span class='reservation-dates'>
    from <span class="date">${item.date_start}</span>
    to <span class="date">${item.date_end}</span>
  </span>
  </li>
  `,
  );

  reservationList.innerHTML = listHTML.join('');
};

const rerenderList = (id, url) => {
  let reservations = [];
  let iterator = 0;
  const reservationList = document.querySelector('.reservation-list');
  const counter = document.querySelector('.counter');
  counter.innerHTML = '';
  reservationList.innerHTML = '';
  getAllReservations(id, url)
    .then((res) => res.json())
    .then((data) => {
      reservations = data;
      iterator = count(data) || 0;
      renderReservations(reservations, iterator);
    });
};

export { renderReservations, rerenderList };
