import { getCommentsData } from './commentsApi.js';

const renderPopup = (obj) => {
  // const comments = getCommentsData(obj.id);
  // console.log(comments);
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
  const commentButton = popupCommentWindow.querySelector('.comment-button');
  const comments = popupCommentWindow.querySelector('.comments-ul');
  getCommentsData(obj.id)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.map((comment) => {
        comments.innerHTML = '';
        data.forEach((comment) => {
          const newComment = document.createElement('li');
          newComment.innerHTML = `<span class="date">${comment.creation_date}</span><span class="name">${comment.username}:</span> <span
            class="comment-text">${comment.comment}</span>`;
          comments.appendChild(newComment);
        });
      });
    });

  return popupCommentWindow;
};
export default renderPopup;

// ${
//   comments.length >= 1
//     ? comments
//         .map(
//           (comment) =>
//             `<p>${comment.creation_date} ${comment.username} : ${comment.comment}   </p>`,
//         )
//         .join('')
//     : '<p> No Comments Available</p>'
// }
