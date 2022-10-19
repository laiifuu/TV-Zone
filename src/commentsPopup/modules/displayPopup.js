import showsArray from '../../dummyData.js';

const renderPopup = (id) => {
  const arr = showsArray.filter((obj) => obj.id === id);
  const popupCommentWindow = document.createElement('div');
  popupCommentWindow.classList.add('popup-comment');
  popupCommentWindow.innerHTML = `<div class="popup-container">
  <div onclick='closeModal()'  class="close-button">&times;</div>
  <div class='show'><img class="image-popup" src=${arr[0].image.medium} 
  alt='Show Image' class='img'>
  <div class='show-details'><p class='img-label'>${arr[0].name}</p> 
<ul class='details-grid'><li class='genres-title'>Genres
 <hr class='border' />
</li>${arr[0].genres
    .map((genre) => `<li class='genre-item'>${genre}</li>`)
    .join('')}</ul></div></div>
<div class='comments'>
<div class='comments-form'><input type='text' placeholder='Your name' class='name-input' required>
<textarea class="form-textarea" id="textarea" placeholder="Your Insights" maxlength="200" required></textarea>
<button class='comment-button'>Comment</button>
</div> <div class='comments-list'> <p class='comments-list-title'>Comments <hr /> </p></div>
</div>
</div>`;

  return popupCommentWindow;
};

export default renderPopup;
