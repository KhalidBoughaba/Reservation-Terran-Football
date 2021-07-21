<?php
require_once '../manager/productsManager.php';

$product = new Product;
$product->setId($_POST["id"]);
$product->setstatus($_POST["status"]);

$updateProductManager =  new productsManager(); 
$updateProductQuery = $updateProductManager->updateStatus($product);
?>