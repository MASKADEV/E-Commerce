<?php 
require_once 'src/security/jwt_handler.php';

class UsersController extends JwtController{

	public function __construct()
	{
	}

	public function index() {
		echo 'index users';
	}

	public function signin()
	{
				if($_SERVER['REQUEST_METHOD'] == 'POST')
				{
					require_once('src/models/authentication.php');
					require_once('src/config/Header.php');
						$auth =  new Authentication();
						$user_id = json_decode(file_get_contents("php://input"));
						$result = $auth->signin($user_id->user_id);
						if($result){
							require_once('src/security/jwt_handler.php');
							$jwt = new JwtController();
							$token = $jwt->authorization();
							echo Authentication::message('Logedin!', $token, $result ,false);
						}else {
							echo Authentication::message('User not exist please try to sign up first', null, null, true);
						}
				}
	}

	public function signup() {

		if($_SERVER['REQUEST_METHOD'] == 'POST')
		{
			require_once('src/models/authentication.php');
			require_once('src/config/Header.php');
			$email = json_decode(file_get_contents("php://input"));
			$full_name = json_decode(file_get_contents("php://input"));
			$password = json_decode(file_get_contents("php://input"));
			$password_confirmation = json_decode(file_get_contents("php://input"));
			if(!empty($email) && !empty($full_name) && !empty($password)){
				
				if($password->password == $password_confirmation->password_confirmation) {
					$auth =  new Authentication();
					$id = uniqid('gfg');

					$result = $auth->signup($id, $full_name->full_name, $email->email, $password->password);
					if($result) {
						$jwt = new JwtController();
						$token = $jwt->authorization();
						echo Authentication::message('User has been Added!', $token, $id ,false);
					}else {
						echo Authentication::message('User Already exist', null, null, false);
					}
				}else {
					echo Authentication::message('password not the same', null, null, false);
				}

			}else {
				echo Authentication::message('Empty InputField!', null, null, true);
			}

		}else {
			echo Authentication::message('Internal server issue please contact the support Team',null, null, true);
		}
	}
}
