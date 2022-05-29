<?php 

class Authentication {

    public function signup($full_name, $email, $password) {
        require_once('src/models/connection.php');
        $db = new Database();
        $userExist = $db->connection()->prepare("SELECT `email` FROM `users` WHERE email=?");
        $userExist->execute([$email]);
        $result = $userExist->fetch(PDO::FETCH_ASSOC);
        if(empty($result))
        {
            $query = $db->connection()->prepare("INSERT INTO `users`(`full_name`, `email`, `password`) VALUES (:full_name, :email, :password)");
            $result = $query->execute([':full_name' => $full_name, ':email' => $email, ':password' => $password]);
            if(!empty($result))
            {
                return json_encode(['status'=>'200', 'message'=>'success']);
            }else {
                return json_encode(['status'=>'200', 'message'=>'user not added']);
            }
        }else {
            return json_encode(['status'=>'200', 'message'=>'user already exist try to login please']);
        }
        
    }

    public function signin($email, $password) {
        require_once('src/models/connection.php');
        $db = new Database();
        $result = $db->connection()->prepare("SELECT * FROM `users` WHERE email=? AND password=?");
        $result->execute([$email, $password]); 
        return $result->fetch(PDO::FETCH_ASSOC);
    }

    public function deleteUser($user_id){
        require_once('src/models/connection.php');
        $db = new Database();
        $result = $db->fetchUseerDetails($user_id);
        $full_name = $result['full_name'];
        $email = $result['email'];
        $password = $result['password'];
        $query = $db->connection()->prepare("INSERT INTO `user_archive` (`id`, `full_name`, `email`, `password`) VALUES(:id, :full_name, :email, :password)");
        $query->execute([
            ':id' => $user_id,
            ':full_name' => $full_name,
            ':email' => $email,
            ':password' => $password
        ]);
        $result = $db->delete(`users`, $user_id);
        return Authentication::message('user has been deleted', null, false);
    }

    public static function message($content, $user_id, $status) {
	    return json_encode(array(
            'status' => $content, 
            'body' => $user_id,
            'error' => $status
            ));
	}
}