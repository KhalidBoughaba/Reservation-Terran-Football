<?php

require_once('../manager/productsManager.php');
$getProductManager = new productsManager();
$getProducts = $getProductManager->getNumAccepted($_POST['date']);
print_r($getProducts);

?>