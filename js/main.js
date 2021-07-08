//================== Form Sign Up ==============================


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');

            }, false);
        });
    }, false);
})();

                document.querySelector(".submit-signup").addEventListener('submit', (e) => {
                    e.preventDefault();

                    if (!document.querySelector(".submit-signup").classList.contains('was-validated')) {
                        return;
                    }

                    let prenom = document.querySelector(".prenom").value,
                        nom = document.querySelector(".nom").value,
                        password = document.querySelector(".pass").value,
                        phone = document.querySelector(".tele").value;

                    console.log(prenom, nom, password, phone)

                    $.ajax({
                        url: 'php/connect.php',
                        type: 'POST',
                        data: {
                            prenom: prenom,
                            nom: nom,
                            password: password,
                            phone: phone
                        },
                        success: (data) => {
                            console.log(data)
                            document.querySelector('.close').click()
                            $('#registre').get(0).reset()
                            $('#registre').removeClass('was-validated')
                        }

                    })

                })

document.getElementById('btnOpen').onclick = () => {
    $('#registre').removeClass('was-validated')
}



//---------------------- END -----------------------------------

// ================= Set Input Reservation Date ===============
/*
const setDateInputReservation = () => {
    var today = new Date().toISOString().split('T')[0];
    var nextWeekDate = new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    document.getElementById("datefield").setAttribute('min', today);
    document.getElementById("datefield").setAttribute('max', nextWeekDate)
}

setDateInputReservation()

//  ------------------------ END --------------------------


// ======================== Get Reserved Date ==============

const dataToday = [
    {
        "id" : 1,
        "userId" : 1,
        "date" : "2021-07-07",
        "hour" : "18",
        "status" : 0
    },

    {
        "id" : 2,
        "userId" : 1,
        "date" : "2021-07-12",
        "hour" : "19",
        "status" : 1
    },

    {
        "id" : 3,
        "userId" : 1,
        "date" : "2021-07-12",
        "hour" : "13",
        "status" : 1
    },
    {
        "id" : 4,
        "userId" : 1,
        "date" : "2021-07-12",
        "hour" : "14",
        "status" : 0
    }

]

dataToday.forEach(reservation => {
    document.querySelectorAll('.btnTimeReserve').forEach(btn => {
        let btnTime = btn.getAttribute('time');
        if (btnTime == reservation.hour) {
            if (reservation.status == 0) {
                btn.classList.add('bg-warning')
            } else {
                btn.classList.add('bg-danger')
                btn.setAttribute('disabled','')
            }
        }
    })
})


document.querySelectorAll('.btnTimeReserve').forEach(btn => {

    btn.addEventListener('click', () => {
        console.log(btn.getAttribute('time'))
    })
})

// document.getElementById('datefield').addEventListener('change', () => {
//     let date = document.getElementById('datefield').value
//     console.log(date)
// })
 */

// -------------------------- End ---------------------