import renderPopup, {
  renderComments,
} from '../commentsPopup/modules/displayPopup.js';
import {
  getCommentsData,
  postCommentData,
} from '../commentsPopup/modules/commentsApi.js';

const url = 'https://api.tvmaze.com/shows';
const showsDiv = document.querySelector('.shows');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const pageNum = document.querySelector('.page-number');
const body = document.querySelector('body');

const getShowsData = async (url) => {
  const result = await fetch(url);
  return result;
};

function createShowCard(obj) {
  const div = document.createElement('div');
  div.classList.add('show-card');
  div.innerHTML = `
    <div class="img-placeholder">
    <img src="${obj.image.original}" alt="${obj.name} poster">
    </div>
    <div class="interactions-section">
      <div class="info-btns">
        <button>Reservations</button>
        <button class="comments">Comments</button>
      </div>
        <button class="like-btn"><i class="fa-regular fa-heart" ></i></button>
    </div>
  `;
  const commentsBtn = div.querySelector('.comments');
  commentsBtn.addEventListener('click', () => {
    const popup = renderPopup(obj);
    // getCommentsData(obj.id);
    body.append(popup);
    const comments = document.querySelector('.comments-ul');
    console.log(comments);
    renderComments(obj.id, comments);
    const form = document.querySelector('.comments-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const userName = document.querySelector('.name-input').value;
      const textArea = document.querySelector('.form-textarea').value;
      await postCommentData(userName, textArea, obj.id);
      renderComments(obj.id, comments);
      form.reset();
    });
  });
  return div;
}
const displayShows = (shows, pageNumber) => {
  shows.splice(pageNumber * 10 - 10, 10).forEach((show) => {
    const div = createShowCard(show);
    showsDiv.append(div);
  });
};
function loadNext(pageNumber) {
  if (pageNumber + 1 < 25) {
    pageNum.innerHTML = pageNumber + 1;
    showsDiv.innerHTML = '';
    getShowsData(url)
      .then((response) => response.json())
      .then((json) => displayShows(json, pageNumber + 1));
  }
}
function loadPrevious(pageNumber) {
  if (pageNumber - 1 > 0) {
    pageNum.innerHTML = pageNumber - 1;
    showsDiv.innerHTML = '';
    getShowsData(url)
      .then((response) => response.json())
      .then((json) => displayShows(json, pageNumber - 1));
  }
}
previous.addEventListener('click', () => {
  loadPrevious(parseInt(pageNum.innerHTML, 10));
});
next.addEventListener('click', () => {
  loadNext(parseInt(pageNum.innerHTML, 10));
});
getShowsData(url)
  .then((response) => response.json())
  .then((json) => displayShows(json, 1));
