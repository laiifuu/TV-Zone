// post data to api
const inolvementUrl =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUJtIKt0WlDGnehZIL7s/comments';

export const postCommentData = async (userName, comment, id) => {
  const response = await fetch(`${inolvementUrl}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      item_id: id,
      username: userName,
      comment: comment,
    }),
  });
  return response.status;
};

// get comments data from api
export const getCommentsData = async (id) => {
  const response = await fetch(`${inolvementUrl}?item_id=${id}`);
  return response;
};
