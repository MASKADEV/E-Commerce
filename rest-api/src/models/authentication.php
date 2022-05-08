<?php 

class Authentication {


    public function signup($full_name, $email, $password) {
        require_once('connection.php');
        $db = new Database();
        $query = $db->connection()->prepare("INSERT INTO `users`(`full_name`, `email`, `password`) VALUES (:full_name, :email, :password)");
        $result = $query->execute([':full_name' => $full_name, ':email' => $email, ':password' => $password]);
        if($result)
        {
            return Authentication::message('user has been added!', 0, false);
        }else {
            return Authentication::message('user has not been added!', null, true);
        }
        
    }

    public function signin($id) {
        require_once('connection.php');
        $db = new Database();
        $result = $db->checkUserExist($id);
        return $result['id'];
    }

    public static function message($content, $user_id, $status) {
	    return json_encode(array(
            'message' => $content, 
            'user_id' => $user_id,
            'error' => $status
            ));
	}
}