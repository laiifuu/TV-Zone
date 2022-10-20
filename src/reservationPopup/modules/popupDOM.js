const generatePopupDOM = (element, obj) => {
  element.classList.add('popup');
  element.innerHTML = `
  <div class='popup-container'>
  <img src=${obj.image.original} alt='Show Image' class='bg-img'>
    <i class='close-icon fa-regular fa-circle-xmark'></i>
    <div class='show'>
    <img src=${obj.image.medium} alt='Show Image' class='img'>
    <div class='show-details'>
      <p class='img-label'>${obj.name}</p>
      <ul class='details-grid'>
          <li class='details-section'>Genres<hr class='border'/></li>
          ${obj.genres
    .map((genre) => `<li class='genre-item'>${genre}</li>`)
    .join('')}
            <li class='details-section'>Rating:   <span>${
  obj.rating.average
}</span><hr class='border'/></li>
            <li class='details-section'>Summary:   <hr class='border'/><span class='summary'>${
  obj.summary
}</span></li>
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
        <p class='reservation-list-title'>Reservation List<span class='counter'></span><hr /></p>
        <ul class='reservation-list-items' ></ul>
      </div>
    </div>
  </div>`;
};

export default generatePopupDOM;
