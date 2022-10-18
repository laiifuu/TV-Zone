import "./reservationPopupStyles.css";

const showsSection = document.querySelector(".shows-section");

const reservationPopup = (obj) => {
  const Popup = document.createElement("div");
  Popup.classList.add("popup");
  Popup.innerHTML = `<div class="popup-container">
  <i class="close-icon" onclick="closePopup()">X</i>
  <img src="https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg" alt="" class="img">
  <p class="img-label">Movie Name</p>
  <div class="show-details">
      <ul class="details-grid">
          <li>detail 1</li>
          <li>detail 2</li>
          <li>detail 3</li>
          <li>detail 4</li>
      </ul>
  </div>
  <div class="reservation-list">
  </div>
  <div class="reservation-form">
      <input type="text" placeholder="your name">
      <input type="text" placeholder="start date">
      <input type="text" placeholder="end date">
      <button class="reserve">Reserve</button>
  </div>
</div>`;

  return Popup;
};

window.openPopup = (obj) => {
  showsSection.append(reservationPopup(obj));
};

window.closePopup = () => {
  const popup = document.querySelector(".popup");
  showsSection.removeChild(popup);
};
