<?php 
require_once 'src/security/jwt_handler.php';

class UsersController extends JwtController{

	public function index() {
		echo 'index users';
	}

	public function signin()
	{
				if($_SERVER['REQUEST_METHOD'] == 'POST')
				{
					ini_set('display_errors', 1);
					ini_set('display_startup_errors', 1);
					error_reporting(E_ALL);
					require_once('src/models/authentication.php');
					require_once('src/config/Header.php');
						$auth =  new Authentication();
						$email = $_POST['email'];
						$password = $_POST['password'];
						$result = $auth->signin($email, $password);
						if(!empty($result)){
							echo Authentication::message('Logedin!', $result['id'] ,false);
						}else {
							echo Authentication::message('invalide email or password', null, null, true);
						}
				}
	}

	public function signup() {
		ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);
		require_once('src/models/authentication.php');
		require_once('src/config/Header.php');
		if($_SERVER['REQUEST_METHOD'] == 'POST')
		{
			// $email = json_decode(file_get_contents("php://input"));
			$full_name = $_POST['full_name'];
			$email = $_POST['email'];
			$password = $_POST['password'];
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

	public function deleteUser(){
		require_once('src/models/authentication.php');
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
