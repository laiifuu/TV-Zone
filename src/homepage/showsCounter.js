export function countDisplayedShows(showsDiv) {
  const arr = Array.from(showsDiv.querySelectorAll('.show-card'));
  return {
    count: arr.length,
    firstId: parseInt(arr[0].id, 10),
    lastId: parseInt(arr[9].id, 10),
  };
}

export function countShows(arr) {
  return arr.length;
}