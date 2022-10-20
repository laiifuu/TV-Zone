import { getCommentsData } from './commentsApi.js';

export const renderComments = (id, comments) => {
  getCommentsData(id)
    .then((response) => response.json())
    .then((data) => {
      comments.innerHTML = '';
      data.map((comment) => {
        const newComment = document.createElement('li');
        newComment.innerHTML = `<span class="commment-date">${comment.creation_date}</span><span class="user-name">${comment.username}:</span> <span
            class="comment-text">${comment.comment}</span>`;
        comments.appendChild(newComment);
      });
    })
    .catch((error) => error);
};

const renderPopup = (obj) => {
  const popupCommentWindow = document.createElement('div');
  popupCommentWindow.classList.add('popup-comment');
  popupCommentWindow.innerHTML = `<div class="popup-container">
  <div class="close-button">&times;</div>
  <div class='show'><img class="image-popup" src=${obj.image.medium} 
  alt='Show Image' class='img'>
  <div class='show-details'><p class='img-label'>${obj.name}</p> 
<ul class='details-grid'><li class='genres-title'>Genres
 <hr class='border' />
</li>${obj.genres
    .map((genre) => `<li class='genre-item'>${genre}</li>`)
    .join('')}</ul></div></div>
<div class='comments'>
<form id=${obj.id} class="comments-form" action="submit">
<label for="name">
 <input type="text" id="name" placeholder="Your Name" class="name-input" required></label>
 <textarea class="form-textarea" id="textarea" placeholder="Your Insights" maxlength="120" required></textarea>
<button type="submit" onsubmit='' class="comment-button" id="btn-submit">Comment</button>
</form>  
<div class='comments-list'> <p class='comments-list-title'> Comments <hr /> </p>
<ul class='comments-ul'></ul>
</div>
</div>
</div>`;
  const closeBtn = popupCommentWindow.querySelector('.close-button');
  closeBtn.addEventListener('click', () => {
    popupCommentWindow.remove();
  });

  return popupCommentWindow;
};
export default renderPopup;
