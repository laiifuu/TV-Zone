import './style.css';
import './dummyData.js';
import './commentsPopup/commentPopup.js';
import './homepage/display.js';

const btun = document.querySelector('.check-btn');
console.log(btun);
btun.addEventListener('click', async () => {
  const res = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kUJtIKt0WlDGnehZIL7s/comments?item_id=1`,
  );
  return res;
});
