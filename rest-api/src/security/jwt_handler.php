<?php

require_once 'src/vendor/autoload.php';
use \Firebase\JWT\JWT;

class JwtController
{
    private $key = 'maska_token';

    public function authorization()
    {
        $iat = time();
        $exp = $iat + 60 * 60;
        $payload = array(
            "iat" => $iat,
            'exp' => $exp,
        );
        $jwt = JWT::encode($payload, 'maska', 'HS512');
        return $jwt;
    }

    public function gettoken()
    {
        $headers = apache_request_headers();
        if (isset($headers['Authorization'])) {
            return str_replace('Bearer ', '', $headers['Authorization']);
        } else {
            return false;
        }
    }

    public function verification($token)
    {
        return JWT::decode($token, 'maska', array('HS512'));
    }
}