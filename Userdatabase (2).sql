-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 25, 2020 at 01:59 AM
-- Server version: 5.7.29-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Userdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `Comment`
--

CREATE TABLE `Comment` (
  `Comment_ID` int(10) NOT NULL,
  `Comment_Title` mediumtext NOT NULL,
  `Comment` longtext NOT NULL,
  `User_ID` int(100) NOT NULL,
  `Movie_ID` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Comment`
--

INSERT INTO `Comment` (`Comment_ID`, `Comment_Title`, `Comment`, `User_ID`, `Movie_ID`) VALUES
(21, 'Title', 'Comment', 1, 62),
(22, 'Hello', 'MArshall744', 1, 63),
(23, 'hello', 'people', 7777, 111),
(24, 'hello', 'people', 7777, 111),
(25, 'hello', 'people', 1, 111),
(26, 'hello', 'people', 1, 62),
(27, 'hello', 'aaaaaa', 1, 62),
(28, 'aaaaaa', 'aaaaa', 1, 62),
(29, 'aaa', 'aaa', 1, 63),
(30, 'aaa', 'aaaa', 1, 62),
(31, '', '', 1, 62),
(32, '', '', 1, 62),
(33, '', '', 1, 62),
(34, 'hello', 'people', 1, 1),
(35, 'hello', 'people', 1, 1),
(36, 'hello', 'people', 1, 1),
(37, '', '', 1, 63),
(38, 'zzzzz', 'zzzzzz', 1, 63),
(39, 'aaa', 'aaa', 1, 62),
(40, '  ', '  ', 1, 62),
(41, 'hello', 'people', 1, 1),
(42, 'hello', 'people', 1, 1),
(43, '', '', 1, 62),
(44, 'sxsxsxx', 'sxsxsxsx', 1, 62),
(45, 'hello', 'people', 1, 1),
(46, 'hello', 'people', 1, 1),
(47, 'GREAT SHOW', 'LOVE BABY YODA', 13, 65);

-- --------------------------------------------------------

--
-- Table structure for table `Movie`
--

CREATE TABLE `Movie` (
  `Movie_ID` int(50) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `Synopsis` mediumtext NOT NULL,
  `Release_Date` date NOT NULL,
  `Genre` varchar(50) NOT NULL,
  `m_cast` varchar(50) NOT NULL,
  `MoviePic_ID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Movie`
--

INSERT INTO `Movie` (`Movie_ID`, `Title`, `Synopsis`, `Release_Date`, `Genre`, `m_cast`, `MoviePic_ID`) VALUES
(62, 'xcvxcvc', 'asdfasdf', '2020-04-18', 'sdfgsdfg', 'asdfasdf', 'spiderman.jpg'),
(63, 'Parasite', 'dsfgsdfg', '2020-04-03', 'ASDFASDF', 'asdfasdf', 'parasite.jpg'),
(64, 'Joker', 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.', '2020-04-05', 'Thriller', 'Joaquin Phoenix', 'joker.jpg'),
(65, 'Mandalorian', 'Persona', '2020-04-30', 'Sci-FI', 'Baby Yoda', 'mandalorian.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `Rating`
--

CREATE TABLE `Rating` (
  `Rating_ID` int(10) NOT NULL,
  `Rating` enum('1','2','3','4','5') NOT NULL,
  `User_ID` int(10) NOT NULL,
  `Movie_ID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Rating`
--

INSERT INTO `Rating` (`Rating_ID`, `Rating`, `User_ID`, `Movie_ID`) VALUES
(1, '2', 1, 62),
(2, '1', 1, 1),
(3, '4', 1, 1),
(4, '4', 1, 1),
(5, '4', 1, 1),
(6, '3', 1, 62),
(7, '1', 1, 1),
(8, '1', 1, 62),
(9, '4', 1, 62),
(10, '5', 1, 62);

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `ID` int(100) NOT NULL,
  `First_Name` varchar(100) NOT NULL,
  `Last_Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `IsAdmin` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`ID`, `First_Name`, `Last_Name`, `Email`, `Password`, `IsAdmin`) VALUES
(5, '1234', '1234', '112341234', '1234', 0),
(13, 'Jesse ', 'White', 'White744@live.marshall.edu', '390070730', 0),
(14, '', '', '', '', 0),
(15, 'Jesse', 'White', 'White@email', '12345', 0),
(16, '', '', '', '', 0),
(17, 'ss', 'ss', 'ss', 'ss', 0),
(18, '', '', '', '', 0),
(19, '', '', '', '', 0),
(20, '', '', '', '', 0),
(21, '', '', '', '', 0),
(22, '', '', '', '', 0),
(23, '', '', '', '', 0),
(24, 'xxx', 'xx', 'xx', 'xx', 0),
(25, 'safs', 'asdfasd', 'fasdfasdf', 'asdfasdf', 0),
(26, '', '', '', '', 0),
(27, 'Jessse', 'White', '123', 'sssss', 0),
(28, '', '', '', '', 0),
(29, '', '', '', '', 0),
(30, 'xzc', 'zxcxc', 'zxcxc', 'sdfsdf', 0),
(31, '', '', '', '', 0),
(32, 'JESS', 'SSSS', 'SSSS', '', 0),
(33, '', '', '', '', 0),
(34, 'HELLO', 'eeeee', 'eeeee', 'eeeee', 0),
(35, '', '', '', '', 0),
(36, 'aaaaa', 'aaaa', 'aaa', 'aaaa', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`Comment_ID`);

--
-- Indexes for table `Movie`
--
ALTER TABLE `Movie`
  ADD PRIMARY KEY (`Movie_ID`);

--
-- Indexes for table `Rating`
--
ALTER TABLE `Rating`
  ADD PRIMARY KEY (`Rating_ID`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Comment`
--
ALTER TABLE `Comment`
  MODIFY `Comment_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
--
-- AUTO_INCREMENT for table `Movie`
--
ALTER TABLE `Movie`
  MODIFY `Movie_ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
--
-- AUTO_INCREMENT for table `Rating`
--
ALTER TABLE `Rating`
  MODIFY `Rating_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
