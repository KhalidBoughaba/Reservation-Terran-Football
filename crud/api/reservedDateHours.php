<?php

require_once('../manager/productsManager.php');
// if (!isset($_POST['date'])) return;
$getReservationManager = new productsManager();
$getReservedDates = $getReservationManager->getReserved($_POST['date']);
print_r(json_encode($getReservedDates));

?>