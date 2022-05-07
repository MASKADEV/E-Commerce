<?php 

class Authentication {
    public function  __construct () {
    }

    public function signup($id, $name, $email, $password) {
        require_once('connection.php');
        $db = new Database(); 
        if(empty($db->selectOne('users','email',$email))){
        $result = $db->insert('users', ['id', 'full_name', 'email', 'password'], [$id, $name, $email, $password]);
        return ($result);
        }else {
            return false;
        }
    }

    public function signin($id) {
        require_once('connection.php');
        $db = new Database();
        $result = $db->checkUserExist($id);
        return $result['id'];
    }

    public static function message($content, $toekn , $user_id, $status) {
	    return json_encode(array(
            'message' => $content, 
            'user_id' => $user_id,
            'token' => $toekn,
            'error' => $status
            ));
	}
}