const getReservationsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUJtIKt0WlDGnehZIL7s/reservations?item_id=';

const getAllReservations = async (id) => {
  const res = await fetch(`${getReservationsURL}${id}`);
  return res;
};

export default getAllReservations;
