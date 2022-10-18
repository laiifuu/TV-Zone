const url = "https://api.tvmaze.com/shows";
const showsSection = document.querySelector('.shows-section');

const getShowsData = async (url) => {
  const result = await fetch(url);
  return result;
};

function createShowCard(obj){
    const div = document.createElement('div');
    div.classList.add('show-card');
    div.innerHTML = `<div class="showCard">
    <div class="img-placeholder">
    <img src="${obj.image.medium}" alt="${obj.name} poster">
    </div>
    <div class="interactions-section">
      <div>
        <button>Comments</button>
        <button>Reservations</button>
        <button><i class="fa-regular fa-heart"></i></button>
      </div>
    </div>
  </div>`;
  
  return div;
}

const displayShows = (shows) => {
    shows.forEach(show => {
        const div = createShowCard(show);
        showsSection.append(div);
    });
}

getShowsData(url)
.then(response => response.json())
.then(json => displayShows(json));

