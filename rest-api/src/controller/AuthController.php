<?php 

class AuthController{

	public function index() {
		echo 'Auth Controller';
	}

	// Signin Methods
	public function signin()
	{
		if($_SERVER['REQUEST_METHOD'] == 'POST')
		{
			ini_set('display_errors', 1);
			ini_set('display_startup_errors', 1);
			error_reporting(E_ALL);
			require_once('src/models/auth/authentication.php');
			require_once('src/config/Header.php');
			require_once('src/security/jwt_handler.php');
				$auth =  new Authentication();
				$jwt = new JwtController();
				$token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoibWFza2EiLCJyb2xlIjoiYWRtaW4ifQ.X5B-xJVAS7zIO9A-WhmCNvV09rSJVc95Azrzq4N-uRK5hu_3Tg5vhJn0oagwc98j2y16bM7_kdwGiWYCysYVeg';
				echo json_encode($jwt->verification($token));
				// echo 'maska';
				die;
				$data = json_decode(file_get_contents("php://input"));
				$email = $data->email;
				$password = $data->password;
				$result = $auth->signin($email, $password);
				// print_r($result['password'] . " " .$password);
				// die;
				if(!empty($result)){
					unset($result['password']);
					echo Authentication::message('200', $result ,false);
				}else {
					echo Authentication::message('invalide email or password', null, null, true);
				}
		}
	}

	// Sign up Methods
	public function signup() {
		ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);
		require_once('src/models/auth/authentication.php');
		require_once('src/config/Header.php');
		if($_SERVER['REQUEST_METHOD'] == 'POST')
		{
			$data = json_decode(file_get_contents("php://input"));
			$full_name = $data->full_name;
			$email = $data->email;
			$password = $data->password;
			
			if(!empty($email) && !empty($full_name) && !empty($password)){
					$auth =  new Authentication();
					$result = $auth->signup($full_name, $email, $password);
					echo $result;
			}else {
				echo Authentication::message('Empty InputField!', null, null, true);
			}

		}else {
			echo Authentication::message('Internal server issue please contact the support Team',null ,true);
		}
	}

	//Delete User Methods
	public function deleteUser(){
		require_once('src/models/auth/authentication.php');
		require_once('src/config/Header.php');
		if($_SERVER['REQUEST_METHOD'] == 'POST'){
			ini_set('display_errors', 1);
			ini_set('display_startup_errors', 1);
			error_reporting(E_ALL);
			$user_id = $_POST['user_id'];
			if(!empty($user_id)){
				$auth = new Authentication();
				echo $auth->deleteUser($user_id);
			}else{
				echo Authentication::message('invalide request please contact support', null, true);
			}
		}
	}
}
