<?php

class UserOperation {

    public function updateUserInfo($id, $full_name, $email, $address) {
        require_once('src/models/connection.php');
        $db = new Database();
        $str = 'UPDATE `users` SET full_name=?, email=?, address=? WHERE id=?';
        $query = $db->connection()->prepare($str);
        $query->execute([$full_name, $email, $address, $id]);
    }

    public function searchProducts($search) {
        require_once('src/models/connection.php');
        $db = new Database();
        // echo $search . ' asdasd';die;
        $str = 'SELECT * FROM `products` WHERE `title` LIKE ? ';
        $query = $db->connection()->prepare($str);
        $query->execute(["%".$search."%"]);
        $result = $query->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function order($product_id, $order_id, $quantity, $user_id) {
        require_once('src/models/connection.php');
        // echo $product_id . ' ' . $order_id . ' ' . $quantity . ' ' . ' ' . $user_id;die;
        $db = new Database();
        $str = 'INSERT INTO `Orders` (`order_id`, `quantity`, `product_id`, `user_id`) VALUES (?, ?, ?, ?)';
        $query = $db->connection()->prepare($str);
        $query->execute([$order_id, $quantity, $product_id, $user_id]);
        // $query->execute([]);
        $result = $query->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

}