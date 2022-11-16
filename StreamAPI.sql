DROP DATABASE IF EXISTS stream;
CREATE DATABASE  IF NOT EXISTS `stream`;
USE `stream`;
-- MySQL dump 10.13  Distrib 5.7.26, for osx10.10 (x86_64)
--
-- Host: localhost    Database: stream
-- ------------------------------------------------------
-- Server version	5.7.26

--
-- Table structure for table `collections`
--

DROP TABLE IF EXISTS `collections`;
CREATE TABLE `collections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `song_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `collections`
--

LOCK TABLES `collections` WRITE;
INSERT INTO `collections` VALUES 
(1, 'pop', 1),
(2, 'r&b', 2);

UNLOCK TABLES;


--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
CREATE TABLE `artists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `genre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
INSERT INTO `artists` VALUES 
(1, 'Steve Lacy', 'r&b'),
(2, 'Sam Smith', 'pop'),
(3, 'Harry Styles', 'pop'),
(4, 'Post Malone', 'pop'),
(5, 'Nicky Youre', 'pop');



UNLOCK TABLES;


--
-- Table structure for table `tracks`
--

DROP TABLE IF EXISTS `songs`;
CREATE TABLE `songs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `artist_id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `runtime` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=190 DEFAULT CHARSET=utf8;


--
-- Dumping data for table `tracks`
--

LOCK TABLES `songs` WRITE;
INSERT INTO `songs` VALUES 
(1, 'Bad Habit', 1, 2022, 4000),
(2, 'Unholy', 2, 2022, 2000),
(3, 'As It Was', 3, 2022, 3000),
(4, 'I Like You', 4, 2022, 3000),
(5, 'Sunroof', 5, 2022, 3000);

UNLOCK TABLES;
-- Dump completed on 2021-01-21 12:48:15
