<?php

class UserOperation {
    public function updateUserInfo($id, $full_name, $email, $address) {
        require_once('src/models/connection.php');
        $db = new Database();
        $str = 'UPDATE `users` SET full_name=?, email=?, address=? WHERE id=?';
        $query = $db->connection()->prepare($str);
        $query->execute([$full_name, $email, $address, $id]);
    }
}