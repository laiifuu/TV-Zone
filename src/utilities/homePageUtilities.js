import { renderPopup, renderComments } from './commentsPopUpUtilities.js';
import { postCommentData, likeShow } from './postData.js';
import reservationPopup from './renderPopup.js';
import { countShows, countDisplayedShows } from '../counterFunctions/showsCounter.js';

const url1 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUJtIKt0WlDGnehZIL7s/comments';

export const createShowCard = (obj, body, likesURL, showsArray) => {
  const div = document.createElement('div');
  div.classList.add('show-card');
  div.setAttribute('id', obj.id);
  div.innerHTML = `
        <div class='img-placeholder'>
        <img src='${obj.image.original}' alt='${obj.name} poster'>
        </div>
        <div class='interactions-section'>
          <div class='info-btns'>
            <button class='reservation-btn'>Reservations</button>
            <button class='comments'>Comments</button>
          </div>
          <div class='like-section'>
          <button class='like-btn'><i class='fa-regular fa-heart' ></i></button>  
          <span class='likes-number'>0</span>
          </div>
        </div>
      `;

  const likesNumber = div.querySelector('.likes-number');
  if (obj.likes !== undefined) {
    likesNumber.innerHTML = obj.likes;
  }
  const reservationBtn = div.querySelector('.reservation-btn');
  reservationBtn.addEventListener('click', () => {
    const popupReservation = reservationPopup(obj);
    body.append(popupReservation);
  });

  const likeBtn = div.querySelector('.like-btn');
  likeBtn.addEventListener('click', () => {
    likeShow(likesURL, obj.id, likesNumber, likeBtn, showsArray, obj.name);
  });

  const commentsBtn = div.querySelector('.comments');
  commentsBtn.addEventListener('click', () => {
    const popup = renderPopup(obj);
    body.append(popup);
    const comments = document.querySelector('.comments-list');
    renderComments(obj.id, comments);
    const form = document.querySelector('.popup-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const userName = document.querySelector('.name-input').value;
      const textArea = document.querySelector('.comment-input').value;
      await postCommentData(userName, textArea, obj.id, url1);
      renderComments(obj.id, comments);
      form.reset();
    });
  });
  return div;
}

export const displayShows = (
  shows,
  pageNumber,
  heading,
  showsDiv,
  likesURL,
  body,
) => {
  shows.slice(pageNumber * 10 - 10, pageNumber * 10).forEach((show) => {
    const div = createShowCard(show, body, likesURL, shows);
    showsDiv.append(div);
  });
  const displayedShowsObj = countDisplayedShows(showsDiv);
  const showsCount = countShows(shows);
  heading.innerHTML = `Shows: (${displayedShowsObj.firstId}, ${displayedShowsObj.lastId}) of ${showsCount}`;
};

export const loadNext = (
  pageNumber,
  shows,
  showsHeader,
  pageNum,
  showsDiv,
  body,
  likesApiURL,
) => {
  const nextPage = pageNumber + 1;
  if (nextPage < 25) {
    pageNum.innerHTML = nextPage;
    showsDiv.innerHTML = '';
    displayShows(shows, nextPage, showsHeader, showsDiv, likesApiURL, body);
  }
}

export const loadPrevious = (
  pageNumber,
  shows,
  showsHeader,
  pageNum,
  showsDiv,
  body,
  url,
) => {
  const previousPage = pageNumber - 1;
  if (previousPage > 0) {
    pageNum.innerHTML = previousPage;
    showsDiv.innerHTML = '';
    displayShows(shows, previousPage, showsHeader, showsDiv, url, body);
  }
}
