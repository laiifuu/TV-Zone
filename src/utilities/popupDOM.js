const generatePopupDOM = (element, obj) => {
  element.classList.add('popup');
  element.innerHTML = `
  <button class="close-btn"><i class="fa-solid fa-xmark"></i></button>
    <section class="show-summary">
      <div class="shows-poster">
        <img src="${obj.image.medium}" alt="show poster">
      </div>
      <div class="show-info">
        <h2  class="show-title">${obj.name}</h2>
        <ul class="genres">${obj.genres
    .map((genre) => `<li class='genre-item'>${genre}</li>`)
    .join('')}</ul>
        <div class="rating">Rating: <span class="rating">${obj.rating.average}</span></div>
        ${obj.summary}
      </div>
    </section>
    <section class="add-reservation">
      <h2>Add reservation: </h2>
      <form class="popup-form" action="#">
      <input type='text' placeholder='your name' class='name-input'>
      <input type='date' placeholder='start date' class='startdate-input'>
      <input type='date' placeholder='end date' class='enddate-input'>
      <button class='reserve'>Reserve</button>
      </form>
    </section>
    <section class="reservations-section">
      <h2 class="comments-title">Reservations: <span class='counter'></span></h2>
      <ul class="reservation-list"></ul>
    </section>

  `;
};

export default generatePopupDOM;
