document.querySelector(".datesAdm").value =
  new Date().getFullYear() +
  "-" +
  (new Date().getMonth() + 1 < 10
    ? "0" + (new Date().getMonth() + 1)
    : new Date().getMonth() + 1) +
  "-" +
  new Date().getDate();
