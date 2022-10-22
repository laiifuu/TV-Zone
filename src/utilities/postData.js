import { rerenderList } from './renderlist.js';

export const addNewReservation = (id, userName, dateStart, dateEnd, url) => {
  fetch(url, {
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
    .then(() => rerenderList(id, `${url}?item_id=`))
    .catch((err) =>  err);
};

export const likeShow = async (url, id, likesNumber, likesBtn, showsArray, name) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    showsArray.forEach((show) => {
      if (show.name === name) {
        show.likes += 1;
      }
    });
    likesNumber.innerHTML = parseInt(likesNumber.innerHTML, 10) + 1;
    const i = likesBtn.querySelector('i');
    i.classList.remove('fa-regular');
    i.classList.add('fa-solid');
  });
};

export const postCommentData = async (userName, comment, id, url) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      item_id: id,
      username: userName,
      comment,
    }),
  });
  return response.status;
};
