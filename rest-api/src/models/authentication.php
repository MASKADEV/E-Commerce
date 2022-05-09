<?php 

class Authentication {

    public function signup($full_name, $email, $password) {
        require_once('connection.php');
        $db = new Database();
        $userExist = $db->connection()->prepare("SELECT `email` FROM `users` WHERE email=?")->execute([$email]);
        if(empty($userExist))
        {
            $query = $db->connection()->prepare("INSERT INTO `users`(`full_name`, `email`, `password`) VALUES (:full_name, :email, :password)");
            $result = $query->execute([':full_name' => $full_name, ':email' => $email, ':password' => $password]);
            if($result)
            {
                return Authentication::message('user has been added!', 0, false);
            }else {
                return Authentication::message('user has not been added!', null, true);
            }
        }else {
            return Authentication::message('usr already exist', null, false);
        }
        
    }

    public function signin($email, $password) {
        require_once('connection.php');
        $db = new Database();
        $result = $db->connection()->prepare("SELECT * FROM `users` WHERE email=? AND password=?");
        $result->execute([$email, $password]); 
        return $result->fetch(PDO::FETCH_ASSOC);
    }

    public static function message($content, $user_id, $status) {
	    return json_encode(array(
            'message' => $content, 
            'user_id' => $user_id,
            'error' => $status
            ));
	}
}