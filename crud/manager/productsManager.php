<?php
require_once('../model/product.php');

class productsManager {

	public function getList($date,$status){
		$dbh = new PDO("mysql:host=localhost;dbname=members_reserve","root","");
		$stack = array();
		$req = "SELECT * FROM member WHERE `Date` = '$date' AND `status` = '$status'";
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$item = new Product();
			$item->setId($row["id"]);
			$item->setFirst($row["Firstname"]);
			$item->setLast($row["Lastname"]);
			$item->setPhone($row["Phone"]);
			$item->setHours($row["Hours"]);
			$item->setDate($row["Date"]);
			$item->setstatus($row["status"]);
			array_push($stack, $item);
		}
		return $stack;

	}

	// Get Just Hours Reserved
	public function getReserved($date){
		$dbh = new PDO("mysql:host=localhost;dbname=members_reserve","root","");
		$stack = array();
		$req = "SELECT * FROM member WHERE `Date` = '$date'";
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$item = new Product();
			$item->setHours($row["Hours"]);
			$item->setDate($row["Date"]);
			$item->setstatus($row["status"]);
			array_push($stack, $item);
		}
		return $stack;

	}


	public function getNumPending($date){
		$dbh = new PDO("mysql:host=localhost;dbname=members_reserve","root","");
		$req = "SELECT count(*) FROM member WHERE `Date` = '$date' AND `status` = '0'";
		$result = $dbh->query($req)->fetchColumn();
		return $result;
	}
	public function getNumAccepted($date){
		$dbh = new PDO("mysql:host=localhost;dbname=members_reserve","root","");
		$req = "SELECT count(*) FROM member WHERE `Date` = '$date' AND `status` = '1'";
		$result = $dbh->query($req)->fetchColumn();
		return $result;
	}
	public function getNumRefused($date){
		$dbh = new PDO("mysql:host=localhost;dbname=members_reserve","root","");
		$req = "SELECT count(*) FROM member WHERE `Date` = '$date' AND `status` = '2'";
		$result = $dbh->query($req)->fetchColumn();
		return $result;
	}
//Add Product
		public function add($product){
			$dbh = new PDO("mysql:host=localhost;dbname=members_reserve","root","");
			$req = "INSERT INTO `member`(`id`,`Firstname`, `Lastname`,`Phone`,`Hours`,`Date`) VALUES (:id,:Firstname,:Lastname,:Phone,:Hours,:Date)";

			$updateProductQuery = $dbh ->prepare($req);
			$updateProductQuery -> bindParam(":id",$product->getId(),PDO::PARAM_STR);	
			$updateProductQuery -> bindParam(":Firstname",$product->getName(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Lastname",$product->getLast(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Phone",$product->getPhone(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Hours",$product->getHours(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":Date",$product->getDate(),PDO::PARAM_STR);
			$updateProductQuery->execute();
        }
		// delete product

		public function delete($id){
			$dbh = new PDO("mysql:host=localhost;dbname=members_reserve","root","");

			$req = "DELETE FROM member WHERE id = $id";
			$deleteProduct = $dbh->prepare($req);
            $deleteProduct->execute();
        }

		public function updateStatus($product){
			
			$id = $product->getId();
			$dbh = new PDO("mysql:host=localhost;dbname=members_reserve","root","");
			$req = "UPDATE member SET status = :status WHERE id = $id ";
			$updateProductQuery = $dbh ->prepare($req);
			$updateProductQuery -> bindParam(":status",$product->getstatus(),PDO::PARAM_STR);
			$updateProductQuery->execute();
        }
}
?>