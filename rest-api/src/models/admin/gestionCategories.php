<?php

class GestionCategories{
    public function addCategories($title, $description){
        require_once('src/models/connection.php');
        $db = new Database();
        $str = "INSERT INTO `categories` (`title`, `description`) VALUES(:title, :description)";
        $query = $db->connection()->prepare($str);
        $query->execute(['title'=>$title, 'description'=>$description]);
    }

    public function editCategories($id, $title, $description){
        require_once('src/models/connection.php');
        $db = new Database();
        $str = "UPDATE `categories` SET `title`=?,`description`=? WHERE $id";
        $query = $db->connection()->prepare($str);
        $query->execute([$title, $description]);
        return $db->selectAll('categories');
    }

    public function deleteCategories($id){
        require_once('src/models/connection.php');
        $db = new Database();
        $str = "SELECT * FROM `categories` WHERE $id";
        $query = $db->connection()->prepare($str);
        $query->execute();
        $result = $query->fetch(PDO::FETCH_ASSOC);
        $title = $result['title'];
        $description = $result['description'];
        $query = $db->connection()->prepare("INSERT INTO `categories_archive` (`id`, `title`, `description`) VALUES(:id, :title, :description)");
        $query->execute([
            ':id' => $id,
            ':title' => $title,
            ':description' => $description,
        ]);
        $query=$db->connection()->prepare("DELETE FROM `categories` WHERE id=?");
		$query->execute([$id]);
        return true;
    }

    public function fetchCategories(){
        require_once('src/models/connection.php');
        $db = new Database();
        return $db->selectAll('categories');
    }
    
}