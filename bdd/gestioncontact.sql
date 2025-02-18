-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 18 fév. 2025 à 10:00
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestioncontact`
--

-- --------------------------------------------------------

--
-- Structure de la table `add_fonction_to_users`
--

DROP TABLE IF EXISTS `add_fonction_to_users`;
CREATE TABLE IF NOT EXISTS `add_fonction_to_users` (
  `fonction` varchar(255) DEFAULT 'user'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `adonis_schema`
--

DROP TABLE IF EXISTS `adonis_schema`;
CREATE TABLE IF NOT EXISTS `adonis_schema` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `batch` int NOT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, 'database/migrations/1739192312799_create_users_table', 1, '2025-02-10 23:46:37'),
(2, 'database/migrations/1739192312806_create_access_tokens_table', 2, '2025-02-10 23:47:48'),
(3, 'database/migrations/1739195676153_create_contacts_table', 2, '2025-02-10 23:47:48'),
(4, 'database/migrations/1739266466910_create_add_fonction_to_users_table', 3, '2025-02-11 14:21:35'),
(5, 'database/migrations/1739283515815_create_add_useremail_to_contacts_table', 4, '2025-02-11 14:26:23');

-- --------------------------------------------------------

--
-- Structure de la table `adonis_schema_versions`
--

DROP TABLE IF EXISTS `adonis_schema_versions`;
CREATE TABLE IF NOT EXISTS `adonis_schema_versions` (
  `version` int UNSIGNED NOT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `adonis_schema_versions`
--

INSERT INTO `adonis_schema_versions` (`version`) VALUES
(2);

-- --------------------------------------------------------

--
-- Structure de la table `auth_access_tokens`
--

DROP TABLE IF EXISTS `auth_access_tokens`;
CREATE TABLE IF NOT EXISTS `auth_access_tokens` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_id` int UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `hash` varchar(255) NOT NULL,
  `abilities` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `auth_access_tokens_tokenable_id_foreign` (`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `auth_access_tokens`
--

INSERT INTO `auth_access_tokens` (`id`, `tokenable_id`, `type`, `name`, `hash`, `abilities`, `created_at`, `updated_at`, `last_used_at`, `expires_at`) VALUES
(10, 10, 'auth_token', NULL, '714fb8a23cbf862f9bd987f693d3bb3134eb77632a8940cc83f05ef7790cf71e', '[\"*\"]', '2025-02-11 08:58:50', '2025-02-11 08:58:50', NULL, NULL),
(11, 10, 'auth_token', NULL, '858403c6d678a6b7d57fdfa74f5a29a1b0b17b105b2049e4da97557338c2a50b', '[\"*\"]', '2025-02-11 09:03:35', '2025-02-11 09:03:35', NULL, NULL),
(18, 18, 'auth_token', NULL, '2bb4e64aed5b9dc44c0789c80fde14f9126331fb8428501213430a4c110eaef2', '[\"*\"]', '2025-02-11 16:20:44', '2025-02-11 14:48:36', '2025-02-11 15:20:45', NULL),
(19, 18, 'auth_token', NULL, '8176c138b2c57f436e5de8be849d10a99a040e0d2f641cead9237f7fe506daba', '[\"*\"]', '2025-02-11 16:01:16', '2025-02-11 15:00:40', '2025-02-11 15:01:16', NULL),
(20, 18, 'auth_token', NULL, 'c5e945164edfc4e45ead9ef52bc777fcc2644537a39ade3d724fe694608b7ca1', '[\"*\"]', '2025-02-11 15:24:35', '2025-02-11 15:24:35', NULL, NULL),
(21, 18, 'auth_token', NULL, '9e531f29236f09d981efa059de8a549af334d35e8dc5e42d618a5cc39db6a696', '[\"*\"]', '2025-02-11 15:31:51', '2025-02-11 15:31:51', NULL, NULL),
(22, 23, 'auth_token', NULL, 'e2283d08e8aead6bf3362525bb53dd2120a79cad4d0497e836827743bdb8b227', '[\"*\"]', '2025-02-11 15:33:04', '2025-02-11 15:33:04', NULL, NULL),
(23, 18, 'auth_token', NULL, 'c75dcaf19fddae30c703e275dabab51c997b2ea5a856496cbb618599ea83aebf', '[\"*\"]', '2025-02-13 12:03:53', '2025-02-13 12:03:53', NULL, NULL),
(24, 18, 'auth_token', NULL, '553c7f8cfc4fd860e4dc7afbf0f8c4626f578abf5aad38272855a75cec0ec762', '[\"*\"]', '2025-02-15 14:27:01', '2025-02-15 14:27:01', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `numero` double DEFAULT NULL,
  `anniv` date DEFAULT NULL,
  `notes` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_email` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `lastname`, `email`, `numero`, `anniv`, `notes`, `created_at`, `updated_at`, `user_email`) VALUES
(2, 'gigi', 'fff', 'gigi', 243444444, '2024-09-11', 'fff', '2025-02-11 01:13:05', '2025-02-11 01:13:05', 0),
(3, 'guerchom', 'guerchom', 'gigi@gmail.com', 243444444, '2024-09-11', 'fff', '2025-02-11 01:35:20', '2025-02-11 01:35:20', 0),
(6, 'glody', 'suaka', 'glody@gmail.com', 89855455, '2025-02-06', 'gdhujsjsssk', '2025-02-11 14:42:17', '2025-02-11 14:42:17', 0),
(7, 'botsindeya', 'miryam', 'm.botshindeya@gmail.com', 243899198962, '2024-12-12', 'enregistré', '2025-02-11 15:22:22', '2025-02-11 15:22:22', 0);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fonction` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `fonction`, `created_at`, `updated_at`) VALUES
(5, 'iloveGigi@gmail.com', 'Gigi kubaluka', '', '', '2025-02-11 04:20:32', '2025-02-11 03:20:32'),
(7, 'gigikuuss@gmail.com', 'Gigi mauvais gaminnn', '', '', '2025-02-11 04:20:14', '2025-02-11 03:20:14'),
(8, 'gigifuckingg@gmail.com', 'Gigi double G mafoko', '$scrypt$n=16384,r=8,p=1$LCe4RL4TXckQzl5aN0lqhg$KBRGxG0LFPWjpW/mcl97aDwTAU3Ncfr3Vyi6GBhZ5f73eoseGP5iEZGwLLDkpaV2GA94Cp4uMPFpqAEja3q4kA', '', '2025-02-11 03:03:49', '2025-02-11 03:03:49'),
(10, 'gigi Guerchom', 'gigidixneuf@gmail.com', '$scrypt$n=16384,r=8,p=1$cdx3sGkXC8CjC8Ub8kSJJg$m3GcuFyC/8F+OQyNYUirDadUOYHI5g8O8A8hKaJraTxsKDL5vso+OlJJ3hEEshky5jjfsFKVNnvj7/+Rw7+kCg', 'administrateur', '2025-02-11 08:57:58', '2025-02-11 08:57:58'),
(12, 'stanislas', 'stanislas@gmail.com', 'stani@2001', 'utilisateur', '2025-02-11 14:40:28', NULL),
(18, 'racine', 'racine@gmail.com', '$scrypt$n=16384,r=8,p=1$OluwwXq/++s+t9kz7Ng4Dw$Re87plhOtRxotO+r7wwnuNmkcHZG8N5ZG1pfZ7iN2tTe4vqqFTO16mtiffssD2g8IzaNebNnYMmMNAT4DXXIUA', 'administrateur', '2025-02-11 14:48:17', '2025-02-11 14:48:17'),
(19, 'admin2', 'azyyyy@gmail.com', '', 'utilisateur', '2025-02-11 15:58:43', '2025-02-11 14:58:43'),
(22, 'glody', 'glody@gmail.com', '$scrypt$n=16384,r=8,p=1$TSEQ//xWW8YADCCp2KECcA$TPULyEHGAl836nQJb88mLLPlV0/2wBmjtUTsZcEm76erS7Q9PBnSMP5jIJxMBAFtNR1OcKKSyxiTdRnihduajQ', 'utilisateur', '2025-02-11 15:28:16', '2025-02-11 15:28:16'),
(23, 'fanny', 'fanny@gmail.com', '$scrypt$n=16384,r=8,p=1$6cQaO3+CyRu1PEBRBK4J8g$r/1RWt2rRI1TllsFn/yDm4mSVlcvK+Jj6J3+RHVUqHJ2uV59HMEazQWfXxXBedMXoI1xOF7HWrMSV4xPdGR1bw', 'utilisateur', '2025-02-11 15:29:38', '2025-02-11 15:29:38');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `auth_access_tokens`
--
ALTER TABLE `auth_access_tokens`
  ADD CONSTRAINT `auth_access_tokens_tokenable_id_foreign` FOREIGN KEY (`tokenable_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
