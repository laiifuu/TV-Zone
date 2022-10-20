import getAllReservations from './APIs/getAllReservations.js';
import count from './helperFunctions/reservationCounter.js';

const renderReservations = (list, counter) => {
  const reservationList = document.querySelector('.reservation-list-items');
  const count = document.querySelector('.counter');
  count.innerHTML = `  (${counter})`;
  const listHTML = list.map(
    (item) => `<li class='reservation-item'>
  <p class='reservation-name'>${item.username}</p>
  <div class='reservation-dates'>
    <p>from: <span>${item.date_start}</span></p>
    <p>to: <span>${item.date_end}</span></p>
  </div>
  </li>
  `,
  );

  reservationList.innerHTML = listHTML.join('');
};

const rerenderList = (id) => {
  let reservations = [];
  let iterator = 0;
  const reservationList = document.querySelector('.reservation-list-items');
  const counter = document.querySelector('.counter');
  counter.innerHTML = '';
  reservationList.innerHTML = '';
  getAllReservations(id)
    .then((res) => res.json())
    .then((data) => {
      reservations = data;
      iterator = count(data) || 0;
      renderReservations(reservations, iterator);
    });
};

export { renderReservations, rerenderList };
