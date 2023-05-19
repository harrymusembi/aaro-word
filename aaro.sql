-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 19, 2023 at 05:10 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aaro`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_05_18_130958_create_styles_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `styles`
--

CREATE TABLE `styles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_by` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `styles`
--

INSERT INTO `styles` (`id`, `name`, `slug`, `description`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'Table Grid', 'tableGrid', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(2, 'Plain Table 1', 'plainTable1', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(3, 'Plain Table 2', 'plainTable2', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(4, 'Plain Table 3', 'plainTable3', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(5, 'Plain Table 4', 'plainTable4', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(6, 'Plain Table 5', 'plainTable5', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(7, 'Table Grid Light', 'tableGridLight', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(8, 'Grid Table 1 Light', 'gridTable1Light', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(9, 'Grid Table 1 Light Accent 1', 'gridTable1Light_Accent1', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(10, 'Grid Table 1 Light Accent 2', 'gridTable1Light_Accent2', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(11, 'Grid Table 1 Light Accent 3', 'gridTable1Light_Accent3', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(12, 'Grid Table 1 Light Accent 4', 'gridTable1Light_Accent4', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(13, 'Grid Table 1 Light Accent 5', 'gridTable1Light_Accent5', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(14, 'Grid Table 1 Light Accent 6', 'gridTable1Light_Accent6', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(15, 'Grid Table 2 ', 'gridTable2', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(16, 'Grid Table 2 Accent 1', 'gridTable2_Accent1', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(17, 'Grid Table 2 Accent 2', 'gridTable2_Accent2', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(18, 'Grid Table 2 Accent 3', 'gridTable2_Accent3', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(19, 'Grid Table 2 Accent 4', 'gridTable2_Accent4', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(20, 'Grid Table 2 Accent 5', 'gridTable2_Accent5', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(21, 'Grid Table 2 Accent 6', 'gridTable2_Accent6', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(22, 'Grid Table 3 ', 'gridTable3', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(23, 'Grid Table 3 Accent 1', 'gridTable3_Accent1', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(24, 'Grid Table 3 Accent 2', 'gridTable3_Accent2', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(25, 'Grid Table 3 Accent 3', 'gridTable3_Accent3', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(26, 'Grid Table 3 Accent 4', 'gridTable3_Accent4', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(27, 'Grid Table 3 Accent 5', 'gridTable3_Accent5', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(28, 'Grid Table 3 Accent 6', 'gridTable3_Accent6', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(29, 'Grid Table 4 ', 'gridTable4', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(30, 'Grid Table 4 Accent 1', 'gridTable4_Accent1', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(31, 'Grid Table 4 Accent 2', 'gridTable4_Accent2', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(32, 'Grid Table 4 Accent 3', 'gridTable4_Accent3', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(33, 'Grid Table 4 Accent 4', 'gridTable4_Accent4', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(34, 'Grid Table 4 Accent 5', 'gridTable4_Accent5', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(35, 'Grid Table 4 Accent 6', 'gridTable4_Accent6', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(36, 'Grid Table 5 Dark', 'gridTable5Dark', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(37, 'Grid Table 5 Dark Accent 1', 'gridTable5Dark_Accent1', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(38, 'Grid Table 5 Dark Accent 2', 'gridTable5Dark_Accent2', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(39, 'Grid Table 5 Dark Accent 3', 'gridTable5Dark_Accent3', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(40, 'Grid Table 5 Dark Accent 4', 'gridTable5Dark_Accent4', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(41, 'Grid Table 5 Dark Accent 5', 'gridTable5Dark_Accent5', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(42, 'Grid Table 5 Dark Accent 6', 'gridTable5Dark_Accent6', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(43, 'Grid Table 6 Colorful', 'gridTable6Colorful', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(44, 'Grid Table 6 Colorful Accent 1', 'gridTable6Colorful_Accent1', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(45, 'Grid Table 6 Colorful Accent 2', 'gridTable6Colorful_Accent2', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(46, 'Grid Table 6 Colorful Accent 3', 'gridTable6Colorful_Accent3', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(47, 'Grid Table 6 Colorful Accent 4', 'gridTable6Colorful_Accent4', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(48, 'Grid Table 6 Colorful Accent 5', 'gridTable6Colorful_Accent5', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(49, 'Grid Table 6 Colorful Accent 6', 'gridTable6Colorful_Accent6', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(50, 'Grid Table 7 Colorful', 'gridTable7Colorful', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(51, 'Grid Table 7 Colorful Accent 1', 'gridTable7Colorful_Accent1', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(52, 'Grid Table 7 Colorful Accent 2', 'gridTable7Colorful_Accent2', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(53, 'Grid Table 7 Colorful Accent 3', 'gridTable7Colorful_Accent3', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(54, 'Grid Table 7 Colorful Accent 4', 'gridTable7Colorful_Accent4', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(55, 'Grid Table 7 Colorful Accent 5', 'gridTable7Colorful_Accent5', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01'),
(56, 'Grid Table 7 Colorful Accent 6', 'gridTable7Colorful_Accent6', NULL, NULL, '2023-05-18 14:01:40', '2023-05-18 22:59:01');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Melvina Ondricka', 'doyle.abagail@example.net', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'yWaLCRWMM9', '2023-05-08 06:50:00', '2023-05-08 06:50:00'),
(2, 'Prof. Berry Bradtke Sr.', 'gilbert80@example.com', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'yoyVHcwtSD', '2023-05-08 06:50:00', '2023-05-08 06:50:00'),
(3, 'Ms. Elenora Thompson DDS', 'gussie31@example.net', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'GsWSgYFC9d', '2023-05-08 06:50:00', '2023-05-08 06:50:00'),
(4, 'Garland Huels', 'marks.julie@example.com', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'amlTr5iIhh', '2023-05-08 06:50:00', '2023-05-08 06:50:00'),
(5, 'Miss Daniela Dibbert IV', 'bartoletti.cloyd@example.com', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'gL57q1jvWy', '2023-05-08 06:50:00', '2023-05-08 06:50:00'),
(6, 'Timothy Thiel', 'jaskolski.maximillian@example.net', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'nPxxkzCXG7', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(7, 'Mrs. Daisha Bergstrom', 'jklein@example.net', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'DipBzV2Ti3', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(8, 'Armando Stiedemann', 'walter.ebony@example.org', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'yBKvBM9W8h', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(9, 'Piper Thompson', 'jimmie.koss@example.org', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', '3pOcDoWEbf', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(10, 'Dr. Zakary O\'Keefe', 'qbednar@example.net', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'lei4waoxuy', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(11, 'Prof. Eveline Blanda', 'xkoepp@example.net', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'tfCDzeNQ2U', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(12, 'Darian Hodkiewicz', 'block.adrianna@example.org', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'O2cDbNX1JI', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(13, 'Mozell Streich', 'denis.koepp@example.com', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'sgZF2DLd48', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(14, 'Prof. Jewell Smith', 'yasmin.herman@example.net', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'bkdkze0UEX', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(15, 'Chesley Satterfield', 'electa05@example.com', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'NMDV2UCWEv', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(16, 'Federico Abernathy', 'hrippin@example.org', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'GDOopwl02N', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(17, 'Dr. Rocky Reichert Jr.', 'kstracke@example.com', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'H94EMrPW0i', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(18, 'Justus Klein', 'ladarius60@example.net', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'H6vThYif0r', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(19, 'Warren Reinger', 'reichmann@example.org', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', '08Leuy2wS4', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(20, 'Daron Buckridge', 'dejon86@example.org', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'CVK3qdss11', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(21, 'Lloyd Mraz', 'white.aurelio@example.net', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'utdSmBJEV9', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(22, 'Prof. Kurtis Nicolas DVM', 'keshaun80@example.com', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'oXjVTzZNkE', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(23, 'Dr. Jacques Feil', 'vorn@example.org', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'vNTdDIVXsO', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(24, 'Ollie Parker Jr.', 'kberge@example.org', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'cb5xcWRtPX', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(25, 'Ethyl Sauer', 'ghilpert@example.net', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'M1pfs4eGVk', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(26, 'Dr. Nathen Cole Jr.', 'lela.abernathy@example.org', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'lzbR1EHTVw', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(27, 'Gisselle Herman', 'nstehr@example.org', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'BljrnYLsTD', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(28, 'Mr. Vern Jenkins', 'darian.ferry@example.com', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'X8ex57DuJ2', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(29, 'Braxton Gerlach III', 'amara.blick@example.com', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'B3MUCnaQOu', '2023-05-08 06:50:01', '2023-05-08 06:50:01'),
(30, 'Lonny Fritsch Jr.', 'hoppe.liliana@example.com', '2023-05-08 06:50:00', '$2a$12$TQa2qA7vi1.hPAA7S.soOOSzC8pO6bUTPvdXwEFpCrrPzE0i2lp9u', 'MGGItgdqv9', '2023-05-08 06:50:01', '2023-05-08 06:50:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `styles`
--
ALTER TABLE `styles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `styles`
--
ALTER TABLE `styles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
