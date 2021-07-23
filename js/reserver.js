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


const AfficheReservedHours = ()=>{
  $.ajax({
    url : 'crud/api/reservedDateHours.php',
    method : 'POST',
    data : {
      date : document.getElementById('datefield').value
    },
    datatype : 'JSON',
    success: (data)=>{
      console.log(data)
      data = JSON.parse(data)

      if (!data.length) {
        document.querySelectorAll(".btnTimeReserve").forEach((btn) => {
          // let btnTime = btn.getAttribute("time");
          
            if (btn.classList.contains("bg-warning")) {
              btn.classList.remove("bg-warning")
            }
            if (btn.classList.contains("bg-danger")) {
              btn.classList.remove("bg-danger");
              btn.removeAttribute("disabled");
            }
          
        })
        return;
      }


      document.querySelectorAll(".btnTimeReserve").forEach((btn) => {
        // let btnTime = btn.getAttribute("time");
        
          if (btn.classList.contains("bg-warning")) {
            btn.classList.remove("bg-warning")
          }
          if (btn.classList.contains("bg-danger")) {
            btn.classList.remove("bg-danger");
            btn.removeAttribute("disabled");
          }
        
      })


      data.forEach((reservation) => {
        console.log(reservation["Hours"])
        console.log(reservation["status"])
  
        document.querySelectorAll(".btnTimeReserve").forEach((btn) => {
          let btnTime = btn.getAttribute("time");

          if (btnTime == reservation["Hours"]) {

            if (reservation["status"] == 0) {
              btn.classList.add("bg-warning");
            }
            if (reservation["status"] == 1){
              btn.classList.add("bg-danger");
              btn.setAttribute("disabled", "");
            }
          }
        });
      });
    }
  })
}


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
  AfficheReservedHours()
};

setDateInputReservation();

//  ------------------------ END --------------------------

// ======================== Get Reserved Date ==============






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
  hour = null;
  console.log(date);
  AfficheReservedHours()

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
    url: "crud/api/addProduct.php",
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

//================= Display Price the Day and the night =================

let buttons = document.querySelectorAll(".btnTimeReserve");
//let heurs = buttons.getAttribute("time");  



for(var i = 0; i<buttons.length; i++){

    buttons[i].onclick = function(){

        if(this.getAttribute("time") < "20"){
            document.getElementById("prix").innerHTML="Le prix pour équipe: 35 DH";
        }else{
            document.getElementById("prix").innerHTML="Le prix pour équipe: 70 DH";

        }
  
    }
}
//---------------------------- END ------------------------------------
