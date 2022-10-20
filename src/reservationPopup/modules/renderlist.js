import getAllReservations from './APIs/getAllReservations.js';

const renderReservations = (list) => {
  const reservationList = document.querySelector('.reservation-list-items');
  const listHTML = list.map(
    (item) => ` <li class='reservation-item'>
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
  const reservationList = document.querySelector('.reservation-list-items');
  reservationList.innerHTML = '';
  getAllReservations(id)
    .then((res) => res.json())
    .then((data) => {
      reservations = data;
      // counter = data.length;
      renderReservations(reservations);
    });
};

export { renderReservations, rerenderList };
