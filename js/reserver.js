//================================ Validation Form ===================================

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

//------------------------------- END ---------------------------------

// ================= Set Input Reservation Date ===============

const setDateInputReservation = () => {
  var today = new Date().toISOString().split("T")[0];
  var nextWeekDate = new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];
  document.getElementById("datefield").setAttribute("min", today);
  document.getElementById("datefield").setAttribute("max", nextWeekDate);
  var today2 = new Date();
  let monthSet = today2.getMonth() + 1;
  console.log(monthSet);
  if (monthSet < 9) {
    var settoday =
      today2.getFullYear() + "-" + "0" + monthSet + "-" + today2.getDate();
    console.log(settoday);
  } else {
    var settoday =
      today2.getFullYear() + "-" + monthSet + "-" + today2.getDate();
  }

  document.getElementById("datefield").value = settoday;
};

setDateInputReservation();

//  ------------------------ END --------------------------

// ======================== Get Reserved Date ==============

const dataToday = [
  {
    id: 1,
    userId: 1,
    date: "2021-07-07",
    hour: "18",
    status: 0,
  },

  {
    id: 2,
    userId: 1,
    date: "2021-07-12",
    hour: "19",
    status: 1,
  },

  {
    id: 3,
    userId: 1,
    date: "2021-07-12",
    hour: "13",
    status: 1,
  },
  {
    id: 4,
    userId: 1,
    date: "2021-07-12",
    hour: "14",
    status: 0,
  },
];

dataToday.forEach((reservation) => {
  document.querySelectorAll(".btnTimeReserve").forEach((btn) => {
    let btnTime = btn.getAttribute("time");
    if (btnTime == reservation.hour) {
      if (reservation.status == 0) {
        btn.classList.add("bg-warning");
      } else {
        btn.classList.add("bg-danger");
        btn.setAttribute("disabled", "");
      }
    }
  });
});

let hour;
let date = document.getElementById("datefield").value;

document.querySelectorAll(".btnTimeReserve").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.getAttribute("time"));
    hour = btn.getAttribute("time");
  });
});

// read date
document.getElementById("datefield").addEventListener("change", () => {
  date = document.getElementById("datefield").value;
  console.log(date);
  hour = null;
});

let prenom;
let nom;
let tele;
// read date
document.getElementById("formReserver").addEventListener("submit", (e) => {
  e.preventDefault();
  // if (date !== null && hour !== null) {

  prenom = document.getElementById("prenom").value;
  nom = document.getElementById("nom").value;
  tele = document.getElementById("tele").value;

  //add product
  $.ajax({
    url: "Prototype-Code-Source/crud/api/addProduct.php",
    type: "POST",
    data: {
      Date: date,
      Hours: hour,
      Firstname: prenom,
      Lastname: nom,
      Phone: tele,
    },
    success: (data, status, xhr) => {
      console.log(data);
      console.log(status);
      console.log(xhr);

      hour = null;
      document.getElementById("datefield").value = "";
      document.getElementById("prenom").value = "";
      document.getElementById("nom").value = "";
      document.getElementById("tele").value = "";

      document.getElementById("formReserver").classList.remove("was-validated");

      // ducument
      //   .querySelector(".btnTimeReserve")
      //   .addEventListener("click", () => {
      //     this.classList.add("pendding");
      //   });
    },
  });
});

// -------------------------- End ---------------------
