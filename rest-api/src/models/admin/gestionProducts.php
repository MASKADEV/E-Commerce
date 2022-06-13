<?php 

class GestionProducts {

    public function addProducts($title, $description, $image_url ,$categories, $stock, $price){
        require_once('src/models/connection.php');
        $db = new Database();
        $str = "INSERT INTO `products` (`title`, `description`, `image_url` ,`categories_id`, `stock`, `price`) VALUES(:title, :description, :image_url, :categories, :stock, :price)";
        $query = $db->connection()->prepare($str);
        $query->execute(['title'=>$title, 'description'=>$description, 'image_url'=>$image_url ,'categories'=> $categories, 'stock'=>$stock, 'price'=>$price]);
    }

    public function editProducts($id, $title, $description, $image_url ,$mark, $stock, $price){
        require_once('src/models/connection.php');
        $db = new Database();
        $str = "UPDATE `products` SET `title`=?,`description`=?, `image_url`=? ,`stock`=?, `mark`=?, `price`=? WHERE id=?";
        $query = $db->connection()->prepare($str);
        $query->execute([$title, $description, $image_url, $mark, $stock, $price, $id]);
        return $db->selectAll('products');
    }

    public function deleteProducts($id){
        require_once('src/models/connection.php');
        $db = new Database();
        $query=$db->connection()->prepare("DELETE FROM `products` WHERE id=?");
		$query->execute([$id]);
        return true;
    }
    
    public function fetchProducts(){
        require_once('src/models/connection.php');
        $db = new Database();
        return $db->fetchAllProducts();
    }

    public function fetchSingleProduct($id){
        require_once('src/models/connection.php');
        $db = new Database();
        // echo $id;die;
        return $db->fetchSingleProduct($id);
    }
    
}