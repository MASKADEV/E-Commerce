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

    public function search() {
        ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);
		require_once('src/models/user/userOperation.php');
		require_once('src/config/Header.php');
		require_once('src/security/jwt_handler.php');
        $jwt = new JwtController();
        $token = $jwt->getToken();
        // $jwt->verification($token);
        if($_SERVER['REQUEST_METHOD'] == 'POST') {
            $data = json_decode(file_get_contents("php://input"));
            $search = $data->search;
            $useropeartion = new UserOperation();
            $result = $useropeartion->searchProducts($search);
            echo json_encode($result);
		} else {
			echo json_encode(['request' => 'invalide token please try to login again!']);
		}
    }

    public function order() {
        ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);
		require_once('src/models/user/userOperation.php');
		require_once('src/config/Header.php');
		require_once('src/security/jwt_handler.php');
        $jwt = new JwtController();
        $token = $jwt->getToken();
        $better_token = md5(uniqid(mt_rand(), true));
        if($jwt->verification($token)){
            $result = $jwt->verification($token);
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                $data = json_decode(file_get_contents("php://input"));
                $quantity = $data->quantity;
                $order_id = $data->order_id;
                $product_id = $data->product_id;
                $user_id = $result->id;
                $useropeartion = new UserOperation();
                $result = $useropeartion->order($product_id, $order_id, $quantity, $user_id);
                echo json_encode($result);
            
            }
		} else {
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