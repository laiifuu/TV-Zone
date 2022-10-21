import commentsCount from '../counterFunctions/commentsCounter.js';
import { getCommentsData } from './fetchData.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUJtIKt0WlDGnehZIL7s/comments';

export const renderComments = (id, comments) => {
  const commentTitle = document.querySelector('.comments-title');

  getCommentsData(id, url)
    .then((response) => response.json())
    .then((data) => {
      commentTitle.innerHTML = `Comments (${commentsCount(data) || 0})`;
      comments.innerHTML = '';
      data.forEach((comment) => {
        const newComment = document.createElement('li');
        newComment.innerHTML = `<span class="commment-date">(${comment.creation_date}) </span><span class="user-name">${comment.username}:</span> <span
            class="comment-text">${comment.comment}</span>`;
        comments.appendChild(newComment);
      });
    })
    .catch((error) => error);
};

export const renderPopup = (obj) => {
  const container = document.createElement('div');
  container.classList.add('popup-container');

  const popupCommentWindow = document.createElement('div');
  popupCommentWindow.classList.add('popup');
  popupCommentWindow.innerHTML = `
    <button class="close-btn"><i class="fa-solid fa-xmark"></i></button>
    <section class="show-summary">
      <div class="shows-poster">
        <img src="${obj.image.medium}" alt="show poster">
      </div>
      <div class="show-info">
        <h2  class="show-title">${obj.name}</h2>
        <ul class="genres">${obj.genres
    .map((genre) => `<li class='genre-item'>${genre}</li>`)
    .join('')}</ul>
        <div class="rating">Rating: <span class="rating">${obj.rating.average}</span></div>
        ${obj.summary}
      </div>
    </section>
    <section class="add-comment-section">
      <h2>Add comment: </h2>
      <form class="popup-form" action="#">
        <input type="text" class="name-input">
        <textarea name="" id="" class="comment-input" rows="3"></textarea>
        <button type="submit">Add comment</button>
      </form>
    </section>
    <section class="comments-section">
      <h2 class="comments-title">Comments: </h2>
      <ul class="comments-list"></ul>
    </section>
  
  `;
  const closeBtn = popupCommentWindow.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    container.remove();
  });
  container.append(popupCommentWindow);
  return container;
};
