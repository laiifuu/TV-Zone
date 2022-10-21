export const getShowsData = async (url) => {
  const result = await fetch(url);
  return result;
};

export const getCommentsData = async (id, url) => {
  const response = await fetch(`${url}?item_id=${id}`);
  return response;
};

export const getAllReservations = async (id, url) => {
  const res = await fetch(`${url}${id}`);
  return res;
};
