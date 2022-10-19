import axios from 'axios';

// post data to api
const inolvementUrl =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUJtIKt0WlDGnehZIL7s/comments';

export const postCommentData = async (username, comment, id) => {
  const response = await fetch(`${inolvementUrl}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
  });
  return response.status;
};

// get comments data from api
export const getCommentsData = async (id) => {
  //   const response = await fetch(`${inolvementUrl}?item_id=${id}`);
  //   if (response.status === 400) {
  //     return [];
  //   }
  //   return response;
  const response = await axios.get(`${inolvementUrl}?item_id=${id}`, {});
  return response;

  // const response = await fetch(`${inolvementUrl}?item_id=${id}`);
  // return response;
};
