import { countDisplayedShows, countShows } from '../counterFunctions/showsCounter.js';

const div = document.createElement('div');
div.innerHTML += `
<div class="show-card" id="1"></div>
<div class="show-card" id="2"></div>
<div class="show-card" id="3"></div>
<div class="show-card" id="4"></div>
<div class="show-card" id="5"></div>
<div class="show-card" id="6"></div>
<div class="show-card" id="7"></div>
<div class="show-card" id="8"></div>
<div class="show-card" id="9"></div>
<div class="show-card" id="10"></div>
`;

document.body.append(div);

describe('Testing countShows function', () => {
  test('The list of shows displayed should be from 1 to 3:', () => {
    expect(countShows(['show1', 'show2', 'show3', 'show4', 'show5'])).toBe(5);
  });

  test('The list of shows should have 0 items', () => {
    expect(countShows([])).toBe(0);
  });
});

describe('Testing countDisplayedShows function', () => {
  test('The div holding the shows should have 10 items', () => {
    expect(countDisplayedShows(div).count).toBe(10);
  });
});