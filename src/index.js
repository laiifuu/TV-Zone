import './style.css';
import {
  displayShows, loadNext, loadPrevious,
} from './utilities/homePageUtilities.js';
import './utilities/burgerMenu.js';
import { getShowsData } from './utilities/fetchData.js';

const tvApiUrl = 'https://api.tvmaze.com/shows';
const involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUJtIKt0WlDGnehZIL7s/likes';

const showsDiv = document.querySelector('.shows');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const pageNum = document.querySelector('.page-number');
const body = document.querySelector('body');
const showsHeader = document.querySelector('.shows-header');

let showsArray = [];

previous.addEventListener('click', () => {
  loadPrevious(
    parseInt(pageNum.innerHTML, 10),
    showsArray, showsHeader, pageNum, showsDiv, body, involvementApiUrl,
  );
});
next.addEventListener('click', () => {
  loadNext(
    parseInt(pageNum.innerHTML, 10),
    showsArray, showsHeader, pageNum, showsDiv, body, involvementApiUrl,
  );
});

getShowsData(tvApiUrl)
  .then((response1) => response1.json())
  .then((shows) => {
    showsArray = shows;
    getShowsData(involvementApiUrl)
      .then((response) => response.json())
      .then((likes) => {
        likes.forEach((like) => {
          showsArray.forEach((show) => {
            if (show.id === like.item_id) show.likes = like.likes;
          });
        });
        displayShows(showsArray, 1, showsHeader, showsDiv, involvementApiUrl, body);
      });
  });
