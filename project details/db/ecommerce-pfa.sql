-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220528.cc1733a80d
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 29, 2022 at 06:23 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce-pfa`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` varchar(150) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `description`, `created_at`) VALUES
(3, 't-shirts 2022', 't-shirt for you', '2022-05-11 08:54:11');

-- --------------------------------------------------------

--
-- Table structure for table `categories_archive`
--

CREATE TABLE `categories_archive` (
  `id` int(11) NOT NULL,
  `title` varchar(60) NOT NULL,
  `description` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories_archive`
--

INSERT INTO `categories_archive` (`id`, `title`, `description`) VALUES
(1, 'shorts', 'shorts for you'),
(1, 'shorts', 'shorts for you'),
(1, 'shorts', 'shorts for you'),
(1, 'shorts', 'shorts for you'),
(2, 't-shirts 2022', 't-shirt for you');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(150) NOT NULL,
  `mark` varchar(50) NOT NULL,
  `image_url` varchar(200) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `sale` double DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products_archive`
--

CREATE TABLE `products_archive` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(150) NOT NULL,
  `mark` varchar(40) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(70) NOT NULL,
  `address` varchar(100) NOT NULL DEFAULT 'none',
  `email` varchar(80) NOT NULL,
  `password` varchar(30) NOT NULL,
  `role` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `address`, `email`, `password`, `role`, `created_at`) VALUES
(15, 'maska', 'none', 'maska@maska.com', 'maskamaska', 0, '2022-05-23 08:43:08'),
(16, 'hola', 'none', 'maska04@maska.com', 'maskamaska', 0, '2022-05-27 14:33:33');

-- --------------------------------------------------------

--
-- Table structure for table `user_archive`
--

CREATE TABLE `user_archive` (
  `id` int(11) NOT NULL,
  `full_name` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_archive`
--

INSERT INTO `user_archive` (`id`, `full_name`, `email`, `password`, `created_at`) VALUES
(9, 'maksa', 'maska@gmail.coma', 'maskamaska', '2022-05-09 22:09:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_archive`
--
ALTER TABLE `user_archive`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



