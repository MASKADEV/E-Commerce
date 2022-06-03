<?php

require_once 'src/vendor/autoload.php';
use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

class JwtController
{
    private $key = 'maska';

    public function authorization($userinfo)
    {
        $iat = time();
        $exp = $iat + 60 * 60;
        $jwt = JWT::encode($userinfo, $this->key, 'HS512');
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
        return JWT::decode($token, new key ($this->key,'HS512'));
    }
}