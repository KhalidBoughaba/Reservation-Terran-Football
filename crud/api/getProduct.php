<?php
require_once '../manager/productsManager.php';

        $productsManager = null;
        $getProductsManager = new productsManager();    
        $getproducts = $getProductsManager->getList($_POST['date'],$_POST['status']);
        print_r(json_encode($getproducts));
?>