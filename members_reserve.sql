-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2021 at 12:02 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `members_reserve`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(11) NOT NULL,
  `Firstname` varchar(50) NOT NULL,
  `Lastname` varchar(50) NOT NULL,
  `Phone` bigint(10) NOT NULL,
  `Date` varchar(255) NOT NULL,
  `Hours` int(2) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `Firstname`, `Lastname`, `Phone`, `Date`, `Hours`, `status`) VALUES
(6, 'Abdellah', 'Mourig', 212630334008, '2021-07-19', 10, 0),
(7, 'hghg', 'hghg', 87878778, '2021-07-19', 11, 1),
(8, 'Abdellah', 'Mourig', 212630334008, '2021-07-22', 11, 1),
(9, 'khalid', 'boughaba', 741852661, '2021-07-29', 13, 1),
(10, 'omar', 'ajbar', 147852369, '2021-07-29', 22, 1),
(11, 'omar', 'ajbar', 741852661, '2021-07-23', 19, 1),
(12, 'khalid', 'boughaba', 741852661, '2021-07-28', 15, 1),
(13, 'omar', 'ajbar', 741852661, '2021-07-28', 0, 0),
(14, 'abdellah', 'morig', 65421885, '2021-07-28', 18, 0),
(15, 'ismail', 'elmiri', 67854935, '2021-07-28', 19, 1),
(16, 'omar', 'elyatim', 68957412, '2021-07-28', 12, 2),
(17, 'yassin', 'bouchloch', 642183528, '2021-07-28', 14, 2),
(18, 'khalid', 'boughaba', 685432584, '2021-07-28', 21, 1),
(19, 'abderahman', 'moghit', 68542182, '2021-07-28', 17, 1),
(20, 'omar', 'boughaba', 741852661, '2021-07-23', 14, 0),
(21, 'ismail', 'ajbar', 741852661, '2021-07-23', 20, 0),
(22, '', '', 0, '2021-07-27', 14, 0);

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `id` int(11) NOT NULL,
  `Firstname` varchar(50) NOT NULL,
  `Lastname` varchar(50) NOT NULL,
  `Phone` int(10) NOT NULL,
  `Hours` varchar(11) NOT NULL,
  `Date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`id`, `Firstname`, `Lastname`, `Phone`, `Hours`, `Date`) VALUES
(1, 'khalid', 'boughaba', 141785234, '18', '01-01-2021'),
(2, 'abdellah', 'morig', 321655894, '17', '02-02-2021'),
(3, 'omar', 'ajbar', 741852661, '17', '2021-07-19'),
(4, 'khalid', 'boughaba', 741852661, '8', '2021-07-20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
