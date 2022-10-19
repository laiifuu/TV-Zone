import { showsArray } from '../../dummyData';

const commentBtns = document.querySelectorAll('.btn-comment');
const closeModalBtn = document.querySelectorAll('[data-close-button]');
const commentOverlay = document.getElementById('comment-overlay');

console.log(commentOverlay);

export const renderPopup = (id) => {
  const arr = showsArray.filter((obj) => obj.id === id);
  console.log(arr);
  const popupCommentWindow = document.createElement('div');
  popupCommentWindow.classList.add('popup-comment');
  popupCommentWindow.innerHTML = `<div class="popup-header">
  <div onclick='closeModal()'  class="close-button">&times;</div>
  <div class="img-comment"><img src=${arr[0].image.medium} alt=""></div>
 </div>
 <div class="popup-body">
  <div class="popup-title">${arr[0].name}</div>
  <div class="show-info">
    <ul class="genre-comment">
    <li></li>
    </ul>
    <p>Ratings: <span></span></p>
  </div>
</div>`;

  return popupCommentWindow;
};
