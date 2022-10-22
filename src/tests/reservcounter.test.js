import count from "../counterFunctions/reservationCounter.js";

const reservations = [];

const createObj = (id, username, dateStart, dateEnd) => ({
  id,
  username,
  dateStart,
  dateEnd,
});

const add = (obj) => {
  reservations.push(obj);
};

describe("Testing reservationsCounter function", () => {
  test("The list of shows should have 0 items", () => {
    expect(count(reservations)).toBe(0);
  });

  test("The list of shows should have 1 items", () => {
    add(createObj(1, "kareem", "15-12-2022", "16-12-2022"));
    add(createObj(1, "kareem", "15-12-2022", "16-12-2022"));
    add(createObj(2, "kareem", "15-12-2022", "16-12-2022"));
    add(createObj(3, "kareem", "15-12-2022", "16-12-2022"));
    add(createObj(4, "kareem", "15-12-2022", "16-12-2022"));
    expect(count(reservations)).toBe(5);
  });
});
