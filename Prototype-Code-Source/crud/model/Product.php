<?php

class Product implements JsonSerializable {
	public function jsonSerialize()
    {
        return array(
			 'id' => $this->_id,
             'Firstname' => $this->_Firstname,
             'Lastname' => $this->_Lastname,
             'Phone' => $this->_Phone,
             'Hours' => $this->_Hours,
             'Date' => $this->_Date,
        );
    }
	private $_id;
	private $_Firstname;
	private $_Lastname;
	private $_Phone;
	private $_Hours;
	private $_Date;
	
	public function __construct() {
	
	}
	// public function __construct($data) {
	// 	$this->fill($data);
	// }
		public function getId() { return $this->_id; }
		public function getName() { return $this->_Firstname; }
		public function getLast() { return $this->_Lastname; }
		public function getPhone() { return $this->_Phone; }
		public function getHours() { return $this->_Hours; }
		public function getDate() { return $this->_Date; }


		public function setId($id){
			$this->_id = (int) $id;
		}

		public function setFirst($Firstname){	
					$this->_Firstname = $Firstname;
			
		}
		public function setLast($Lastname){
					$this->_Lastname = $Lastname;
		}

		public function setPhone($Phone){
				$this->_Phone = $Phone;
		}

		public function setHours($Hours){
					$this->_Hours = $Hours;
		}

		public function setDate($Date){
					$this->_Date = $Date;
		}

}
?>