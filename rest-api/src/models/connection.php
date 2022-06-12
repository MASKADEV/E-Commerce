<?php 

class Database
{
	private $servername = "localhost";
	private $username = "root";
	private $password = "";
	private $database="ecommerce-pfa";
	private $conn;
	
	public function __construct()
	{
		//Connection for local Methods
		try {
			$this->conn = new PDO("mysql:host=$this->servername;dbname=$this->database", $this->username, $this->password);
		} catch(PDOException $e) 
		{
			echo "Connection failed: " . $e->getMessage();
		}
	}



	//Commun Function
	public function connection(){
		try {
			$conn = new PDO("mysql:host=$this->servername;dbname=$this->database", $this->username, $this->password);
			return $conn;
		} catch(PDOException $e) 
		{
			echo "Connection failed: " . $e->getMessage();
		}
	}

	public function selectAll($table)
	{
		$query=$this->conn->prepare("SELECT * FROM `$table`");
		$query->execute();
		$result = $query->fetchAll(PDO::FETCH_ASSOC);
		return $result;
	}

	public function fetchAllProducts(){
		// return ['title' => 'maska' ]; die;
		$str = 'SELECT products.*, categories.title AS c_title FROM `products` INNER JOIN categories ON categories.id = products.categories_id';
		$query = $this->conn->prepare($str);
		$query->execute();
		$result = $query->fetchAll(PDO::FETCH_ASSOC);
		return $result;
	}

	public function delete($id)
	{
		$query=$this->conn->prepare("DELETE FROM users WHERE id=?");
		return $query->execute([$id]);
	}

	public function fetchUseerDetails($id) {
		$str = "SELECT * FROM `users` WHERE id=?";
		$query=$this->conn->prepare($str);
		$query->execute(
			[$id]
		);
		return $query->fetch(PDO::FETCH_ASSOC);
	}

	public static function message($content, $status) {
	    return json_encode(array('message' => $content, 'error' => $status));
	}
}
