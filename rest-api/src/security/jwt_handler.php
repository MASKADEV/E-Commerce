<?php

require_once 'src/vendor/autoload.php';
use \Firebase\JWT\JWT;

class JwtController
{
    private $key = 'maska';

    public function authorization($userinfo)
    {
        $iat = time();
        $exp = $iat + 60 * 60;
        $payload = $userinfo;
        $jwt = JWT::encode($payload, $this->key, 'HS512');
        return $jwt;
    }

    public function getToken()
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
        return JWT::decode($token, $this->key, array('HS512'));
    }
}