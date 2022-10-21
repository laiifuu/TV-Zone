export const likeShow = async (url, id, likesNumber, likesBtn, showsArray) => {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      showsArray[id].likes += 1;
      likesNumber.innerHTML = parseInt(likesNumber.innerHTML, 10) + 1;
      const i = likesBtn.querySelector("i");
      i.classList.remove("fa-regular");
      i.classList.add("fa-solid");
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
  