<?php 

class GestionProducts {

    public function addProducts($title, $description, $image_url ,$mark, $stock, $price){
        require_once('src/models/connection.php');
        $db = new Database();
        $str = "INSERT INTO `products` (`title`, `description`, `image_url` ,`mark`, `stock`, `price`) VALUES(:title, :description, :image_url, :mark, :stock, :price)";
        $query = $db->connection()->prepare($str);
        $query->execute(['title'=>$title, 'description'=>$description, 'image_url'=>$image_url ,'mark'=>$mark, 'stock'=>$stock, 'price'=>$price]);
    }

    public function editProducts($title, $description, $image_url ,$mark, $stock, $price){
        require_once('src/models/connection.php');
        $db = new Database();
        $str = "UPDATE `products` SET `title`=?,`description`=?, `image_url`=? ,`stock`=?, `mark`=?, `price`=? WHERE $id";
        $query = $db->connection()->prepare($str);
        $query->execute([$title, $description, $image_url, $mark, $stock, $price]);
        return $db->selectAll('products');
    }

    public function deleteProducts($id){
        require_once('src/models/connection.php');
        $db = new Database();
        $query=$db->connection()->prepare("DELETE FROM `categories` WHERE id=?");
		$query->execute([$id]);
        return true;
    }
    
    public function fetchProducts(){
        require_once('src/models/connection.php');
        $db = new Database();
        return $db->selectAll('products');
    }
    
}