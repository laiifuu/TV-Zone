import { rerenderList } from '../renderlist.js';

const addReservationURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUJtIKt0WlDGnehZIL7s/reservations';

const addNewReservation = (id, userName, dateStart, dateEnd) => {
  fetch(addReservationURL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: userName,
      date_start: dateStart,
      date_end: dateEnd,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res)
    .then(() => rerenderList(id))
    .catch((err) => console.log('Network Error: ', err));
};

export default addNewReservation;
