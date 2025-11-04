(() => {
  const colourButtons = document.querySelectorAll(".colourButton");
  const colourChange = (ev) => {
    const colourPicked = ev.target.classList[0] + "Back";
    document.body.className = colourPicked === "resetBack" ? "" : colourPicked;
  };

  colourButtons.forEach((btn) => {
    btn.addEventListener("click", colourChange);
  });
})();
