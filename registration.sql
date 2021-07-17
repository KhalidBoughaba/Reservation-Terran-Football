-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 08, 2021 at 02:28 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `signup`
--

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `phone` bigint(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `prenom`, `nom`, `password`, `phone`) VALUES
(1, 'ismail', 'elMiri', 'uyuy', 7676),
(2, 'ismail', 'elMiri', 'hh', 123456789),
(3, 'ghghg', '6565', '565', 656),
(4, 'ismail', 'Boughaba', 'hghghg', 76767),
(5, 'hghg', 'jgjg', 'tftrtr', 0),
(6, 'Khalid', 'Boughaba', 'hghg', 6565),
(7, 'jjhjh', '767', '7676', 7676),
(8, 'ismail', 'Boughaba', 'nn', 0),
(9, 'Khalid', '23456', 'jjhjh', 7676),
(10, 'ghghg', 'trtr', 'hghg', 6565),
(11, 'ghghg', 'trtr', 'hghg', 6565),
(12, 'hghg', '7676', '767', 7667676),
(13, 'ismail', '23456', 'jhjh', 909),
(14, 'hghg', 'y676', '7676', 767),
(15, 'Khalid', 'Boughaba', 'ddd', 0),
(16, 'ismail', '', '', 0),
(17, 'Khalid', 'Boughaba', 'hghgg', 0),
(18, 'Khalid', 'jhjh', 'fdfdfd5', 55454),
(19, 'Khalid', 'hhghg', 'rdrdr', 5454),
(20, 'yghghg', 'fdfd5', '4343', 34343),
(21, 'gfgf', 'rrere', '3232', 343),
(22, 'jhj', 'hjhjh', 'hjh', 0),
(23, 'hghg', 'trtr', '4343', 4454),
(24, 'Khalid', 'Boughaba', '677575778', 123456789),
(25, '', '', '', 0),
(26, 'ghghg', '23456', 'SSSSSSSSSSSSSSS', 6565),
(27, 'ismail', 'elMiri', '456867898900°', 897868654);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
