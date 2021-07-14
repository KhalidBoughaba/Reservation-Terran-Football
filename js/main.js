//================== Form Sign Up ==============================


// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//     'use strict';
//     window.addEventListener('load', function () {
//         // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         var forms = document.getElementsByClassName('needs-validation');
//         // Loop over them and prevent submission
//         var validation = Array.prototype.filter.call(forms, function (form) {
//             form.addEventListener('submit', function (event) {
//                 if (form.checkValidity() === false) {
//                     event.preventDefault();
//                     event.stopPropagation();
//                 }
//                 form.classList.add('was-validated');

//             }, false);
//         });
//     }, false);
// })();

//                 document.querySelector(".submit-signup").addEventListener('submit', (e) => {
//                     e.preventDefault();

//                     if (!document.querySelector(".submit-signup").classList.contains('was-validated')) {
//                         return;
//                     }

//                     let prenom = document.querySelector(".prenom").value,
//                         nom = document.querySelector(".nom").value,
//                         password = document.querySelector(".pass").value,
//                         phone = document.querySelector(".tele").value;

//                     console.log(prenom, nom, password, phone)

//                     $.ajax({
//                         url: 'php/connect.php',
//                         type: 'POST',
//                         data: {
//                             prenom: prenom,
//                             nom: nom,
//                             password: password,
//                             phone: phone
//                         },
//                         success: (data) => {
//                             console.log(data)
//                             document.querySelector('.close').click()
//                             $('#registre').get(0).reset()
//                             $('#registre').removeClass('was-validated')
//                         }

//                     })

//                 })

// document.getElementById('btnOpen').onclick = () => {
//     $('#registre').removeClass('was-validated')
// }



//---------------------- END -----------------------------------