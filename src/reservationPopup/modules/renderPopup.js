const reservationPopup = (obj) => {
  const Popup = document.createElement('div');
  Popup.classList.add('popup');
  Popup.innerHTML = `<div class='popup-container'>
    <i class='close-icon fa-regular fa-circle-xmark'  onClick='closePopup()'></i>
    <div class='show'>
    <img src=${obj.image.medium} alt='Show Image' class='img'>
    <div class='show-details'>
      <p class='img-label'>${obj.name}</p>
      <ul class='details-grid'>
          <li class='genres-title'>Genres<hr class='border'/></li>
          ${obj.genres.map((genre) => `<li class='genre-item'>${genre}</li>`).join('')}
      </ul>
    </div>
    </div>
    <div class='reservation'>
      <div class='reservation-form'>
          <input type='text' placeholder='your name' class='name-input'>
          <input type='date' placeholder='start date' class='startdate-input'>
          <input type='date' placeholder='end date' class='enddate-input'>
          <button class='reserve'>Reserve</button>
      </div>
      <div class='reservation-list'>
        <p class='reservation-list-title'>Reservation List<hr /></p>
      </div>
    </div>
  </div>`;

  return Popup;
};

module.exports = { reservationPopup };