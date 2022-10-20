const listener = (btn, event, action) => {
  btn.addEventListener(event, () => {
    action();
  });
};

export default listener;