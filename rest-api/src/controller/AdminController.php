<?php 

class AdminController {
    public function index () {
        echo 'admin role';
    }

    //Gestion Categories
        //Add Categories
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
        //Edit Categories
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
        //Delete Categories
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
                    AdminController::message('Categories has been deleted', false);
                }
        }else {
            echo AdminController::message('invalide request', true);
        }
    }
        //Fetch Categories
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
        //Add Products
    public function addProducts(){
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        require_once('src/config/Header.php');
        require_once('src/models/admin/gestionProducts.php');
        $gp = new GestionProducts();
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            $title = $_POST['title'];
            $description = $_POST['description'];
            $image_url = $_POST['image_url'];
            $mark = $_POST['mark'];
            $stock = $_POST['stock'];
            $price = $_POST['price'];
            if(!empty($title) && !empty($description) && !empty($image_url) && !empty($mark) && !empty($stock) && !empty($price))
            {
                $gp->addProducts($title, $description, $image_url, $mark, $stock, $price);
                echo AdminController::message('products has been Added!', false);
            }else {
                echo AdminController::message('please fill all field', true);
            }
        }else {
            echo AdminController::message('invalide request', true);
        }
    }
        //Edit Products
    public function editProducts(){
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        require_once('src/config/Header.php');
        require_once('src/models/admin/gestionProducts.php');
        $gp = new GestionProducts();
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            $title = $_POST['title'];
            $description = $_POST['description'];
            $image_url = $_POST['image_url'];
            $mark = $_POST['mark'];
            $stock = $_POST['stock'];
            $price = $_POST['price'];
            if(!empty($title) && !empty($description) && !empty($image_url) && !empty($mark) && !empty($stock) && !empty($price))
            {
                $gp->editProducts($title, $description, $image_url, $mark, $stock, $price);
                echo AdminController::message('products has been Added!', false);
            }else {
                echo AdminController::message('please fill all field', true);
            }
        }else {
            echo AdminController::message('invalide request', true);
        }
    }
        //Delete Products
    public function deleteProducts(){
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        require_once('src/config/Header.php');
        require_once('src/models/admin/gestionProducts.php');
        $gp = new GestionProducts();
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
                $id = $_POST['id'];
                $deleted = $gp->deleteProducts($id);
                if($deleted){
                    AdminController::message('Products has been deleted', false);
                }
        }else {
            echo AdminController::message('invalide request', true);
        }
    }
        //Fetch Products
    public function fetchProducts(){
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        require_once('src/config/Header.php');
        require_once('src/models/admin/gestionProducts.php');
        $gp = new GestionProducts();
        if($_SERVER['REQUEST_METHOD'] == 'GET'){
                $result = $gp->fetchProducts('products');
                echo json_encode($result);
        }else {
            echo AdminController::message('invalide request', true);
        }
    }

    public static function message($content, $status) {
	    return json_encode(array(
            'message' => $content, 
            'error' => $status
            ));
	}
}