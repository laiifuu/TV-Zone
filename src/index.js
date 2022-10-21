import "./style.css";
import { displayShows, loadNext,loadPrevious,getShowsData} from "./utilities/homePageUtilities.js";

const tvApiUrl = "https://api.tvmaze.com/shows";
const involvementApiUrl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUJtIKt0WlDGnehZIL7s/likes";

const showsDiv = document.querySelector(".shows");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const pageNum = document.querySelector(".page-number");
const body = document.querySelector("body");
const showsHeader = document.querySelector(".shows-header");

let showsArray = [];

previous.addEventListener("click", () => {
  loadPrevious(parseInt(pageNum.innerHTML, 10), showsArray, showsHeader, pageNum, showsDiv);
});
next.addEventListener("click", () => {
  console.log(showsDiv);
  loadNext(parseInt(pageNum.innerHTML, 10), showsArray, showsHeader, pageNum, showsDiv);
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
        displayShows(showsArray, 1, showsHeader, showsDiv, involvementApiUrl, body);
      });
  });
