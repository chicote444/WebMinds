-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: programas
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `semana`
--
CREATE DATABASE programas;
USE programas;
DROP TABLE IF EXISTS `semana`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semana` (
  `materia` varchar(30) DEFAULT NULL,
  `assunto1` varchar(30) DEFAULT NULL,
  `assunto2` varchar(30) DEFAULT NULL,
  `assunto3` varchar(30) DEFAULT NULL,
  `dia` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`dia`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semana`
--

LOCK TABLES `semana` WRITE;
/*!40000 ALTER TABLE `semana` DISABLE KEYS */;
INSERT INTO `semana` VALUES ('Matemática','Fatorial','Geometria','Mediana',1),('Geografia','Relevo','Geopolítica','Placas tectônicas',2),('Português','Literatura','Gramática','Artigos',3),('Inglês','gramática','Verbo To Be','Should/Must',4);
/*!40000 ALTER TABLE `semana` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `semana2`
--

DROP TABLE IF EXISTS `semana2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semana2` (
  `materia` varchar(30) DEFAULT NULL,
  `assunto1` varchar(30) DEFAULT NULL,
  `assunto2` varchar(30) DEFAULT NULL,
  `assunto3` varchar(30) DEFAULT NULL,
  `dia` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`dia`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semana2`
--

LOCK TABLES `semana2` WRITE;
/*!40000 ALTER TABLE `semana2` DISABLE KEYS */;
INSERT INTO `semana2` VALUES ('Filosofia','Sócrates','Sofismo','Schopenaumer',1),('Biologia','Ecologia','Genética','Evolução',2),('Física','Mecânica','Eletricidade','Óptica',3),('Sociologia','Formas de Governo','Maquiavel','Desigualdades',4);
/*!40000 ALTER TABLE `semana2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `semana3`
--

DROP TABLE IF EXISTS `semana3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semana3` (
  `materia` varchar(30) DEFAULT NULL,
  `assunto1` varchar(30) DEFAULT NULL,
  `assunto2` varchar(30) DEFAULT NULL,
  `assunto3` varchar(30) DEFAULT NULL,
  `dia` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`dia`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semana3`
--

LOCK TABLES `semana3` WRITE;
/*!40000 ALTER TABLE `semana3` DISABLE KEYS */;
INSERT INTO `semana3` VALUES ('História','Revolução Industrial','História do Brasil','Iluminismo',1),('Química','Reações','Orgânica','Inorgânica',2),('Informática Básica','Html','Git','Visual Studio',3),('Espanhol','Gramática','Artigos','Interpretação Textual',4);
/*!40000 ALTER TABLE `semana3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `idade` int NOT NULL,
  `semana_id` int DEFAULT NULL,
  `semana2_id` int DEFAULT NULL,
  `semana3_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_semana_id` (`semana_id`),
  KEY `fk2_semana_id` (`semana2_id`),
  KEY `fk3_semana_id` (`semana3_id`),
  CONSTRAINT `fk2_semana_id` FOREIGN KEY (`semana2_id`) REFERENCES `semana2` (`dia`),
  CONSTRAINT `fk3_semana_id` FOREIGN KEY (`semana3_id`) REFERENCES `semana3` (`dia`),
  CONSTRAINT `fk_semana_id` FOREIGN KEY (`semana_id`) REFERENCES `semana` (`dia`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'chico',20,NULL,NULL,NULL),(2,'chico',20,NULL,NULL,NULL),(3,'cleber',5,NULL,NULL,NULL),(4,'juliana',19,NULL,NULL,NULL),(5,'juliana',19,NULL,NULL,NULL),(6,'juliana',19,NULL,NULL,NULL),(7,'juliana',19,NULL,NULL,NULL),(8,'jaca',2,NULL,NULL,NULL),(9,'jaca',2,NULL,NULL,NULL),(10,'jaca',2,NULL,NULL,NULL),(11,'jaca',2,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'programas'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-01 12:57:35
