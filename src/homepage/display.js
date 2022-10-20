import renderPopup, { renderComments } from '../commentsPopup/modules/displayPopup.js';
import { postCommentData } from '../commentsPopup/modules/commentsApi.js';

const tvApiUrl = 'https://api.tvmaze.com/shows';
const involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUJtIKt0WlDGnehZIL7s/likes';

const showsDiv = document.querySelector('.shows');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const pageNum = document.querySelector('.page-number');
const body = document.querySelector('body');
let showsArray = [];

const getShowsData = async (url) => {
  const result = await fetch(url);
  return result;
};

const likeShow = async (id, likesNumber, likesBtn) => {
  await fetch(involvementApiUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    likesNumber.innerHTML = parseInt(likesNumber.innerHTML, 10) + 1;
    const i = likesBtn.querySelector('i');
    i.classList.remove('fa-regular');
    i.classList.add('fa-solid');
  });
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
<div class="like-section">
<button class="like-btn"><i class="fa-regular fa-heart" ></i></button>
<span class="likes-number">0</span>
</div>
</div>
`;

  const likesNumber = div.querySelector('.likes-number');
  if ('likes' in obj) {
    likesNumber.innerHTML = obj.likes;
  }

  const likeBtn = div.querySelector('.like-btn');
  likeBtn.addEventListener('click', () => {
    likeShow(obj.id, likesNumber, likeBtn);
  });

  const commentsBtn = div.querySelector('.comments');
  commentsBtn.addEventListener('click', () => {
    const popup = renderPopup(obj);
    body.append(popup);
    const comments = document.querySelector('.comments-ul');
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
  shows.slice(pageNumber * 10 - 10, pageNumber * 10).forEach((show) => {
    const div = createShowCard(show);
    showsDiv.append(div);
  });
};

function loadNext(pageNumber, shows) {
  const nextPage = pageNumber + 1;
  if (nextPage < 25) {
    pageNum.innerHTML = nextPage;
    showsDiv.innerHTML = '';
    displayShows(shows, nextPage);
  }
}

function loadPrevious(pageNumber, shows) {
  const previousPage = pageNumber - 1;
  if (previousPage > 0) {
    pageNum.innerHTML = previous;
    showsDiv.innerHTML = '';
    displayShows(shows, previousPage);
  }
}
previous.addEventListener('click', () => {
  loadPrevious(parseInt(pageNum.innerHTML, 10), showsArray);
});
next.addEventListener('click', () => {
  loadNext(parseInt(pageNum.innerHTML, 10), showsArray);
});

getShowsData(tvApiUrl)
  .then((response1) => response1.json())
  .then((shows) => {
    showsArray = shows;
    getShowsData(involvementApiUrl)
      .then((response) => response.json())
      .then((likes) => {
        likes.forEach((item, i) => {
          showsArray[i].likes = item.likes;
        });
        displayShows(showsArray, 1);
      });
  });
