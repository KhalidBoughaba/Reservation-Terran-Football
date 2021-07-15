<?php
require_once '../manager/productsManager.php';

$product = new Product();
$product->setFirst($_POST["Firstname"]);
$product->setLast($_POST["Lastname"]);
$product->setPhone($_POST["Phone"]);
$product->setHours($_POST["Hours"]);
$product->setDate($_POST["Date"]);

$addProductManager = null;
$addProductManager =  new productsManager(); 
$addProductQuery = $addProductManager->add($product);

?>