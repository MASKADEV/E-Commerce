<?php 

class AdminController {
    public function index () {
        echo 'admin role';
    }

    //Gestion Categories
    public function addCategories(){
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        require_once('src/config/Header.php');
        require_once('src/models/admin/gestionCategories.php');
        $gp = new GestionCategories();
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            $title = $_POST['title'];
            $description = $_POST['description'];
            if(!empty($title) && !empty($description))
            {
                $gp->addCategories($title, $description);
                echo AdminController::message('categories has been Added!', false);
            }else {
                echo AdminController::message('please fill all field', true);
            }
        }else {
            echo AdminController::message('invalide request', true);
        }
    }

    public function editCategories(){
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        require_once('src/config/Header.php');
        require_once('src/models/admin/gestionCategories.php');
        $gp = new GestionCategories();
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            $title = $_POST['title'];
            $description = $_POST['description'];
            $id = $_POST['id'];
            if(!empty($title) && !empty($description) && !empty($id))
            {
                $result = $gp->editCategories($id, $title, $description);
                echo AdminController::message('user categories has been updated', false);
            }else {
                echo AdminController::message('please fill all field', true);
            }
        }else {
            echo AdminController::message('invalide request', true);
        }
    }

    public function deleteCategories(){
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        require_once('src/config/Header.php');
        require_once('src/models/admin/gestionCategories.php');
        $gp = new GestionCategories();
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
                $id = $_POST['id'];
                $deleted = $gp->deleteCategories($id);
                if($deleted){
                    AdminController::message('user has been deleted', false);
                }
        }else {
            echo AdminController::message('invalide request', true);
        }
    }

    public function fetchCategories(){
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        require_once('src/config/Header.php');
        require_once('src/models/admin/gestionCategories.php');
        $gp = new GestionCategories();
        if($_SERVER['REQUEST_METHOD'] == 'GET'){
                $result = $gp->fetchCategories('categories');
                echo json_encode($result);
        }else {
            echo AdminController::message('invalide request', true);
        }
    }

    //Gestion Products
    public function addProducts(){}
    public function editProducts(){}
    public function deleteProducts(){}
    public function fetchProducts(){}


    public static function message($content, $status) {
	    return json_encode(array(
            'message' => $content, 
            'error' => $status
            ));
	}
}