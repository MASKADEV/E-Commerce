<?php 

class UserController {
    public function index () {
        echo 'User Controller';
    }

    public function updateInfo() {
        ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);
		require_once('src/models/user/userOperation.php');
		require_once('src/config/Header.php');
		require_once('src/security/jwt_handler.php');
		$jwt = new JwtController();
		$token = $jwt->getToken();
		if($jwt->verification($token)){
            $data = json_decode(file_get_contents("php://input"));
			$id = $jwt->verification($token)->id;
            $full_name = $data->full_name;
			$email = $data->email;
			$address = $data->address;
            $useropeartion = new UserOperation();
            $useropeartion->updateUserInfo($id, $full_name, $email, $address);
			$newToken = $jwt->authorization(['id'=>$id, 'full_name'=>$full_name,
                 'email'=>$email, 'address'=>$address]);
            // print_r($newToken);
            echo UserController::message($newToken,'200');
		}else {
			echo json_encode(['request' => 'invalide token please try to login again!']);
		}
    }

    public static function message($content, $status) {
	    return json_encode(array(
            'status' => $status, 
            'body' => $content
            ));
	}
 }