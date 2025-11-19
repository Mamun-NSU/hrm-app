-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 19, 2025 at 12:20 PM
-- Server version: 8.0.43-0ubuntu0.24.04.2
-- PHP Version: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hrm_backend_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance_records`
--

CREATE TABLE `attendance_records` (
  `id` bigint UNSIGNED NOT NULL,
  `employee_id` bigint UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `check_in_time` time DEFAULT NULL,
  `check_out_time` time DEFAULT NULL,
  `status` enum('Present','Absent','Late','Leave') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Present',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attendance_records`
--

INSERT INTO `attendance_records` (`id`, `employee_id`, `date`, `check_in_time`, `check_out_time`, `status`, `created_at`, `updated_at`) VALUES
(1, 4, '2025-11-13', '07:24:07', '09:40:26', 'Present', '2025-11-13 01:24:07', '2025-11-13 03:40:26'),
(2, 2, '2025-11-13', '07:50:34', '10:12:15', 'Present', '2025-11-13 01:50:34', '2025-11-13 04:12:15'),
(3, 5, '2025-11-13', '09:14:01', '09:41:09', 'Present', '2025-11-13 03:14:01', '2025-11-13 03:41:09'),
(4, 6, '2025-11-13', '09:22:18', '10:09:36', 'Present', '2025-11-13 03:22:18', '2025-11-13 04:09:36'),
(5, 3, '2025-11-13', '09:31:06', '09:41:49', 'Present', '2025-11-13 03:31:06', '2025-11-13 03:41:49'),
(6, 7, '2025-11-13', '11:32:45', '11:32:45', 'Present', '2025-11-13 05:32:45', '2025-11-13 05:32:45'),
(7, 4, '2025-11-15', '03:13:38', '18:22:25', 'Present', '2025-11-14 21:13:38', '2025-11-15 12:22:25'),
(8, 5, '2025-11-15', '03:13:49', '18:46:54', 'Present', '2025-11-14 21:13:49', '2025-11-15 12:46:54'),
(9, 7, '2025-11-15', '03:16:19', '17:14:40', 'Present', '2025-11-14 21:16:19', '2025-11-15 11:14:40'),
(10, 2, '2025-11-15', '03:56:03', '03:56:03', 'Present', '2025-11-14 21:56:03', '2025-11-14 21:56:03'),
(11, 8, '2025-11-15', '05:04:44', '18:12:25', 'Present', '2025-11-14 23:04:44', '2025-11-15 12:12:25'),
(13, 10, '2025-11-15', '05:22:13', '17:30:03', 'Present', '2025-11-14 23:22:13', '2025-11-15 11:30:03'),
(14, 9, '2025-11-15', '05:24:36', '16:49:25', 'Present', '2025-11-14 23:24:36', '2025-11-15 10:49:25'),
(15, 1, '2025-11-15', '14:43:43', '18:46:39', 'Present', '2025-11-15 08:43:43', '2025-11-15 12:46:39'),
(16, 6, '2025-11-15', '17:10:23', '17:11:07', 'Present', '2025-11-15 11:10:23', '2025-11-15 11:11:07'),
(18, 4, '2025-11-16', '09:22:32', '11:31:43', 'Present', '2025-11-16 03:22:32', '2025-11-16 05:31:43'),
(19, 8, '2025-11-16', '09:23:37', '09:40:41', 'Present', '2025-11-16 03:23:37', '2025-11-16 03:40:41'),
(20, 1, '2025-11-16', '09:27:50', '18:07:17', 'Present', '2025-11-16 03:27:50', '2025-11-16 12:07:17'),
(21, 3, '2025-11-16', '09:33:32', '11:42:15', 'Present', '2025-11-16 03:33:32', '2025-11-16 05:42:15'),
(22, 2, '2025-11-16', '09:35:13', '17:58:14', 'Present', '2025-11-16 03:35:13', '2025-11-16 11:58:14'),
(23, 9, '2025-11-16', '09:36:28', '13:14:10', 'Present', '2025-11-16 03:36:28', '2025-11-16 07:14:10'),
(24, 10, '2025-11-16', '09:36:54', '17:59:44', 'Present', '2025-11-16 03:36:54', '2025-11-16 11:59:44'),
(25, 5, '2025-11-16', '09:37:48', '11:25:12', 'Present', '2025-11-16 03:37:48', '2025-11-16 05:25:12'),
(26, 6, '2025-11-16', '09:38:20', '09:38:27', 'Present', '2025-11-16 03:38:20', '2025-11-16 03:38:27'),
(27, 7, '2025-11-16', '09:40:52', '09:41:03', 'Present', '2025-11-16 03:40:52', '2025-11-16 03:41:03'),
(28, 13, '2025-11-16', '13:56:10', '13:58:50', 'Present', '2025-11-16 07:56:10', '2025-11-16 07:58:50'),
(29, 11, '2025-11-16', '13:59:00', '13:59:51', 'Present', '2025-11-16 07:59:00', '2025-11-16 07:59:51'),
(31, 1, '2025-11-17', '09:33:07', '18:08:10', 'Present', '2025-11-17 03:33:07', '2025-11-17 12:08:10'),
(32, 5, '2025-11-17', '10:12:08', '11:20:14', 'Present', '2025-11-17 04:12:08', '2025-11-17 05:20:14'),
(33, 2, '2025-11-17', '11:06:07', '18:13:31', 'Present', '2025-11-17 05:06:07', '2025-11-17 12:13:31'),
(34, 3, '2025-11-17', '11:06:36', '11:06:50', 'Present', '2025-11-17 05:06:36', '2025-11-17 05:06:50'),
(35, 4, '2025-11-17', '11:07:00', '17:42:26', 'Present', '2025-11-17 05:07:00', '2025-11-17 11:42:26'),
(36, 8, '2025-11-17', '11:08:36', '11:08:41', 'Present', '2025-11-17 05:08:36', '2025-11-17 05:08:41'),
(37, 7, '2025-11-17', '11:08:51', '11:08:56', 'Present', '2025-11-17 05:08:51', '2025-11-17 05:08:56'),
(38, 9, '2025-11-17', '11:09:04', '11:09:10', 'Present', '2025-11-17 05:09:04', '2025-11-17 05:09:10'),
(39, 10, '2025-11-17', '11:09:19', '11:09:39', 'Present', '2025-11-17 05:09:19', '2025-11-17 05:09:39'),
(40, 11, '2025-11-17', '11:09:47', '11:10:24', 'Present', '2025-11-17 05:09:47', '2025-11-17 05:10:24'),
(41, 12, '2025-11-17', '11:10:34', '11:10:38', 'Present', '2025-11-17 05:10:34', '2025-11-17 05:10:38'),
(42, 13, '2025-11-17', '11:10:47', '11:10:56', 'Present', '2025-11-17 05:10:47', '2025-11-17 05:10:56'),
(43, 6, '2025-11-17', '11:11:47', '12:22:02', 'Present', '2025-11-17 05:11:47', '2025-11-17 06:22:02'),
(45, 1, '2025-11-18', '09:23:58', '17:31:52', 'Present', '2025-11-18 03:23:58', '2025-11-18 11:31:52'),
(46, 4, '2025-11-18', '10:41:45', '11:31:25', 'Present', '2025-11-18 04:41:45', '2025-11-18 05:31:25'),
(47, 2, '2025-11-18', '12:19:38', '18:38:22', 'Present', '2025-11-18 06:19:38', '2025-11-18 12:38:22'),
(48, 1, '2025-11-19', NULL, '16:56:06', 'Present', '2025-11-19 03:18:52', '2025-11-19 10:56:06'),
(49, 2, '2025-11-19', '09:30:05', '16:18:25', 'Present', '2025-11-19 03:30:05', '2025-11-19 10:18:25'),
(50, 5, '2025-11-19', '15:42:36', '16:00:10', 'Present', '2025-11-19 09:42:36', '2025-11-19 10:00:10'),
(51, 9, '2025-11-19', '16:27:35', '16:30:27', 'Present', '2025-11-19 10:27:35', '2025-11-19 10:30:27'),
(52, 10, '2025-11-19', '16:35:16', '16:41:13', 'Present', '2025-11-19 10:35:16', '2025-11-19 10:41:13');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Human Resources', '2025-11-12 04:55:16', '2025-11-12 22:08:27'),
(2, 'Finance', '2025-11-12 04:55:53', '2025-11-12 04:55:53'),
(3, 'Marketing', '2025-11-12 04:56:29', '2025-11-12 04:56:29'),
(4, 'IT', '2025-11-12 04:56:42', '2025-11-12 04:56:42'),
(5, 'Sales', '2025-11-12 04:56:54', '2025-11-12 04:56:54'),
(6, 'Customer Support', '2025-11-12 04:57:07', '2025-11-12 04:57:07');

-- --------------------------------------------------------

--
-- Table structure for table `designations`
--

CREATE TABLE `designations` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `designations`
--

INSERT INTO `designations` (`id`, `title`, `created_at`, `updated_at`) VALUES
(1, 'Manager', '2025-11-12 04:59:10', '2025-11-12 04:59:10'),
(2, 'Senior Developer', '2025-11-12 04:59:26', '2025-11-12 04:59:26'),
(3, 'Junior Developer', '2025-11-12 04:59:48', '2025-11-12 04:59:48'),
(4, 'HR Executive', '2025-11-12 05:00:10', '2025-11-12 05:00:10'),
(5, 'Accountant test', '2025-11-12 05:00:29', '2025-11-12 22:10:12'),
(6, 'Sales Representative', '2025-11-12 05:00:43', '2025-11-12 05:00:43');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `department_id` bigint UNSIGNED DEFAULT NULL,
  `designation_id` bigint UNSIGNED DEFAULT NULL,
  `employee_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` enum('Male','Female','Other') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `join_date` date DEFAULT NULL,
  `employment_status` enum('Active','Probation','Resigned') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Active',
  `salary_base` decimal(10,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `user_id`, `department_id`, `designation_id`, `employee_code`, `phone`, `gender`, `date_of_birth`, `join_date`, `employment_status`, `salary_base`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 3, 'EMP001', '01712345678', 'Male', '1995-06-15', '2024-02-01', 'Active', 25000.00, '2025-11-12 05:05:39', '2025-11-12 05:05:39'),
(2, 2, 2, 2, 'EMP002', '01710000002', 'Other', '1996-08-22', '2024-03-10', 'Probation', 20000.00, '2025-11-12 05:18:30', '2025-11-19 09:38:09'),
(3, 3, 1, 3, 'EMP003', '01710000003', 'Male', '1994-12-05', '2024-01-20', 'Active', 22000.00, '2025-11-12 05:18:49', '2025-11-12 05:18:49'),
(4, 4, 3, 1, 'EMP004', '01710000004', 'Female', '1997-03-30', '2024-04-15', 'Active', 24000.00, '2025-11-12 05:19:09', '2025-11-12 05:19:09'),
(5, 5, 2, 2, 'EMP005', '01710000005', 'Male', '1995-11-18', '2024-05-01', 'Probation', 21000.00, '2025-11-12 05:19:26', '2025-11-12 05:19:26'),
(6, 6, 2, 2, 'EMP006', '01710000005', 'Male', '1995-11-18', '2024-05-01', 'Probation', 29000.00, '2025-11-12 05:20:38', '2025-11-12 05:20:38'),
(7, 8, 4, 3, 'EMP008', '01710000008', 'Male', '2001-03-12', '2020-02-23', 'Active', 25000.00, '2025-11-13 05:31:44', '2025-11-13 05:31:44'),
(8, 7, 3, 6, 'EMP007', '01710000007', 'Female', '1998-01-03', '2021-01-01', 'Active', 23000.00, '2025-11-14 23:03:57', '2025-11-14 23:03:57'),
(9, 9, 3, 4, 'EMP009', '01710000009', 'Female', '2001-07-02', '2019-05-12', 'Active', 27000.00, '2025-11-14 23:15:26', '2025-11-14 23:15:26'),
(10, 10, 4, 3, 'EMP0010', '01710000010', 'Female', '2009-03-07', '2020-01-01', 'Active', 21000.00, '2025-11-14 23:21:47', '2025-11-14 23:21:47'),
(11, 11, 4, 3, 'EMP011', '01710000011', 'Male', '1992-02-03', '2020-01-01', 'Probation', 24000.00, '2025-11-16 07:33:00', '2025-11-16 07:33:00'),
(12, 12, 5, 6, 'EMP012', '01710000012', 'Female', '1995-04-06', '2019-09-03', 'Active', 21000.00, '2025-11-16 07:34:47', '2025-11-16 07:34:47'),
(13, 13, 5, 6, 'EMP013', '01710000013', 'Male', '1981-09-04', '2023-12-02', 'Active', 26000.00, '2025-11-16 07:55:35', '2025-11-16 07:55:35');

-- --------------------------------------------------------

--
-- Table structure for table `employee_trainings`
--

CREATE TABLE `employee_trainings` (
  `id` bigint UNSIGNED NOT NULL,
  `employee_id` bigint UNSIGNED NOT NULL,
  `training_id` bigint UNSIGNED NOT NULL,
  `status` enum('pending','completed','in_progress') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employee_trainings`
--

INSERT INTO `employee_trainings` (`id`, `employee_id`, `training_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 6, 'in_progress', '2025-11-19 05:54:04', '2025-11-19 05:54:34'),
(2, 6, 1, 'pending', '2025-11-19 05:54:14', '2025-11-19 05:54:14'),
(3, 6, 4, 'completed', '2025-11-19 05:54:52', '2025-11-19 05:54:52'),
(4, 2, 1, 'completed', '2025-11-19 05:55:19', '2025-11-19 05:55:19'),
(5, 10, 4, 'in_progress', '2025-11-19 05:55:43', '2025-11-19 05:55:43'),
(6, 6, 4, 'in_progress', '2025-11-19 11:01:25', '2025-11-19 11:01:25');

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
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_applications`
--

CREATE TABLE `job_applications` (
  `id` bigint UNSIGNED NOT NULL,
  `recruitment_id` bigint UNSIGNED NOT NULL,
  `applicant_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicant_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicant_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `resume_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `employee_id` bigint UNSIGNED DEFAULT NULL,
  `status` enum('pending','reviewed','shortlisted','rejected','hired') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `applied_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_applications`
--

INSERT INTO `job_applications` (`id`, `recruitment_id`, `applicant_name`, `applicant_email`, `applicant_phone`, `resume_link`, `user_id`, `employee_id`, `status`, `applied_at`, `created_at`, `updated_at`) VALUES
(1, 5, 'Mamun Test 2', 'mamun2@example.com', '01710000002', 'https://drive.google.com/file/d/1aBcD12345EfGhIJK/view?usp=sharing', 2, 2, 'pending', '2025-11-18 12:37:27', '2025-11-18 12:37:27', '2025-11-18 12:37:27'),
(2, 1, 'Mamun', 'mamunno@gmail.com', '0000000000', 'https://drive.google.com/file/d/1aBcD12345EfGhIJK/view?usp=sharing', NULL, NULL, 'pending', '2025-11-18 13:04:43', '2025-11-18 13:04:43', '2025-11-18 13:04:43'),
(3, 7, 'Mamun Test 2', 'mamun2@example.com', '01710000002', 'https://drive.google.com/file/d/1aBcD12345EfGhIJK/view?usp=sharing', 2, 2, 'reviewed', '2025-11-19 04:19:08', '2025-11-19 04:19:08', '2025-11-19 05:40:01'),
(4, 3, 'Public User 2', 'public2@gmail.com', '0000000000', 'https://drive.google.com/file/d/1aBcD12345EfGhIJK/view?usp=sharing', NULL, NULL, 'pending', '2025-11-19 04:20:21', '2025-11-19 04:20:21', '2025-11-19 04:20:21'),
(5, 5, 'Public 3', 'public3@gmail.com', '0000000000', 'https://drive.google.com/file/d/1aBcD12345EfGhIJK/view?usp=sharing', NULL, NULL, 'pending', '2025-11-19 04:26:07', '2025-11-19 04:26:07', '2025-11-19 04:26:07'),
(6, 2, 'Test User 6666', 'mamun255@example.com', '0000000000', 'https://drive.google.com/file/d/1aBcD12345EfGhIJK/view?usp=sharing', NULL, NULL, 'pending', '2025-11-19 10:58:57', '2025-11-19 10:58:57', '2025-11-19 10:58:57');

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `leave_requests`
--

CREATE TABLE `leave_requests` (
  `id` bigint UNSIGNED NOT NULL,
  `employee_id` bigint UNSIGNED NOT NULL,
  `leave_type_id` bigint UNSIGNED NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `reason` text COLLATE utf8mb4_unicode_ci,
  `status` enum('Pending','Approved','Rejected') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Pending',
  `approved_by` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `leave_requests`
--

INSERT INTO `leave_requests` (`id`, `employee_id`, `leave_type_id`, `from_date`, `to_date`, `reason`, `status`, `approved_by`, `created_at`, `updated_at`) VALUES
(1, 2, 1, '2025-11-17', '2025-11-20', 'Sick', 'Rejected', 1, '2025-11-16 06:56:51', '2025-11-19 10:59:53'),
(2, 9, 2, '2025-12-01', '2025-12-25', 'Medical', 'Approved', 1, '2025-11-16 06:58:45', '2025-11-19 10:59:47'),
(3, 13, 2, '2025-11-21', '2025-11-26', 'Very sick', 'Approved', 1, '2025-11-16 07:57:00', '2025-11-16 08:01:07'),
(4, 11, 3, '2025-12-07', '2025-12-12', 'Need', 'Rejected', 1, '2025-11-16 07:59:39', '2025-11-16 08:00:32'),
(5, 4, 2, '2025-12-01', '2025-12-10', 'Very very sick.', 'Pending', NULL, '2025-11-17 05:13:54', '2025-11-17 05:13:54'),
(6, 2, 2, '2025-11-25', '2025-11-30', 'Medical Leave', 'Pending', NULL, '2025-11-19 08:13:12', '2025-11-19 08:13:12');

-- --------------------------------------------------------

--
-- Table structure for table `leave_types`
--

CREATE TABLE `leave_types` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `days_per_year` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `leave_types`
--

INSERT INTO `leave_types` (`id`, `name`, `description`, `days_per_year`, `created_at`, `updated_at`) VALUES
(1, 'Casual', 'Casual leave', 10, '2025-11-16 04:34:57', '2025-11-16 04:34:57'),
(2, 'Medical', 'Medical leave', 15, '2025-11-16 04:34:57', '2025-11-16 04:34:57'),
(3, 'Annual', 'Annual leave', 20, '2025-11-16 04:34:57', '2025-11-16 04:34:57');

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
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_11_11_085459_create_personal_access_tokens_table', 1),
(5, '2025_11_12_033651_create_roles_table', 1),
(6, '2025_11_12_034204_add_role_id_to_users_table', 1),
(7, '2025_11_12_083000_create_departments_table', 1),
(8, '2025_11_12_083010_create_designations_table', 1),
(9, '2025_11_12_084839_create_employees_table', 1),
(11, '2025_11_13_054416_create_attendance_records_table', 2),
(12, '2025_11_12_103848_create_departments_table', 1),
(13, '2025_11_12_104209_create_designations_table', 1),
(14, '2025_11_13_111437_drop_name_email_from_employees_table', 3),
(15, '2025_11_15_054312_add_description_to_roles_table', 4),
(16, '2025_11_16_100400_create_leave_types_table', 5),
(17, '2025_11_16_100431_create_leave_requests_table', 5),
(18, '2025_11_16_141643_create_salary_structures_table', 6),
(19, '2025_11_16_141708_create_payrolls_table', 6),
(20, '2025_11_17_094158_add_allowances_and_deductions_to_salary_structures', 7),
(21, '2025_11_17_114845_create_performance_k_p_i_s_table', 8),
(22, '2025_11_17_114907_create_performance_evaluations_table', 8),
(27, '2025_11_17_163028_create_trainings_table', 9),
(28, '2025_11_17_163041_create_employee_trainings_table', 9),
(29, '2025_11_18_130734_create_recruitments_table', 9),
(30, '2025_11_18_151410_create_job_applications_table', 9);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payrolls`
--

CREATE TABLE `payrolls` (
  `id` bigint UNSIGNED NOT NULL,
  `employee_id` bigint UNSIGNED NOT NULL,
  `month_year` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gross_salary` decimal(10,2) NOT NULL,
  `net_salary` decimal(10,2) NOT NULL,
  `generated_at` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payrolls`
--

INSERT INTO `payrolls` (`id`, `employee_id`, `month_year`, `gross_salary`, `net_salary`, `generated_at`, `created_at`, `updated_at`) VALUES
(2, 9, '2025-11', 21000.00, 20000.00, '2025-11-16', '2025-11-16 10:18:50', '2025-11-16 10:18:50'),
(3, 5, '2025-11', 28600.00, 28100.00, '2025-11-17', '2025-11-17 04:11:35', '2025-11-17 04:11:35'),
(4, 4, '2025-11', 26700.00, 26450.00, '2025-11-18', '2025-11-18 04:47:22', '2025-11-18 04:47:22'),
(5, 6, '2025-11', 27100.00, 26600.00, '2025-11-18', '2025-11-18 04:51:04', '2025-11-18 04:51:04'),
(6, 13, '2025-11', 27300.00, 27050.00, '2025-11-18', '2025-11-18 05:01:52', '2025-11-18 05:01:52'),
(7, 4, '2025-10', 26700.00, 26450.00, '2025-11-18', '2025-11-18 05:02:28', '2025-11-18 05:02:28'),
(8, 2, '2025-11', 22700.00, 21500.00, '2025-11-18', '2025-11-18 06:24:21', '2025-11-18 06:24:21'),
(9, 8, '2025-01', 28050.00, 27550.00, '2025-11-19', '2025-11-19 06:37:11', '2025-11-19 06:37:11'),
(10, 2, '2025-01', 22700.00, 21500.00, '2025-11-19', '2025-11-19 06:40:04', '2025-11-19 06:40:04'),
(11, 2, '2025-12', 22700.00, 21500.00, '2025-11-19', '2025-11-19 06:40:17', '2025-11-19 06:40:17');

-- --------------------------------------------------------

--
-- Table structure for table `performance_evaluations`
--

CREATE TABLE `performance_evaluations` (
  `id` bigint UNSIGNED NOT NULL,
  `employee_id` bigint UNSIGNED NOT NULL,
  `kpi_id` bigint UNSIGNED NOT NULL,
  `score` int NOT NULL,
  `remarks` text COLLATE utf8mb4_unicode_ci,
  `evaluation_date` date NOT NULL,
  `evaluated_by` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `performance_evaluations`
--

INSERT INTO `performance_evaluations` (`id`, `employee_id`, `kpi_id`, `score`, `remarks`, `evaluation_date`, `evaluated_by`, `created_at`, `updated_at`) VALUES
(1, 11, 1, 9, 'Good!', '2025-11-17', 'Admin', '2025-11-17 09:35:12', '2025-11-17 09:56:08'),
(2, 13, 7, 8, 'Good', '2025-11-17', 'Admin', '2025-11-17 09:35:54', '2025-11-18 05:40:31'),
(3, 4, 12, 9, 'Nice', '2025-11-17', 'Admin', '2025-11-17 09:36:59', '2025-11-17 09:36:59'),
(5, 2, 12, 9, 'Very Nice.', '2025-11-18', 'Admin', '2025-11-18 06:21:56', '2025-11-18 06:21:56');

-- --------------------------------------------------------

--
-- Table structure for table `performance_kpis`
--

CREATE TABLE `performance_kpis` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `performance_kpis`
--

INSERT INTO `performance_kpis` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Sales Target Achievement', 'Measures how effectively the employee meets monthly, quarterly, or annual sales targets.', '2025-11-17 08:00:39', '2025-11-17 08:00:39'),
(2, 'Customer Satisfaction Score (CSAT)', 'Tracks feedback ratings from clients or customers, usually via surveys.', '2025-11-17 08:01:04', '2025-11-17 08:01:04'),
(3, 'Employee Attendance & Punctuality', 'Monitors presence, punctuality, and absenteeism trends.', '2025-11-17 08:01:25', '2025-11-17 08:01:25'),
(4, 'Project Completion Rate', 'Measures on-time completion of assigned projects or tasks.', '2025-11-17 08:01:46', '2025-11-17 08:01:46'),
(5, 'Quality of Work', 'Evaluates accuracy, attention to detail, and overall quality of deliverables.', '2025-11-17 08:02:05', '2025-11-17 08:02:05'),
(6, 'Training Completion', 'Tracks whether employees complete mandatory training programs on time.', '2025-11-17 08:02:31', '2025-11-17 08:02:31'),
(7, 'Cost Efficiency', 'Measures how efficiently an employee manages budget or resources.', '2025-11-17 08:03:07', '2025-11-17 08:03:07'),
(8, 'Team Collaboration', 'Evaluates communication, cooperation, and contribution to team goals.', '2025-11-17 08:03:29', '2025-11-17 08:03:29'),
(9, 'Innovation & Initiative', 'Tracks employee contributions to process improvements, new ideas, or problem-solving.', '2025-11-17 08:03:47', '2025-11-17 08:03:47'),
(10, 'Compliance & Safety', 'Measures adherence to company policies, regulations, and safety procedures.', '2025-11-17 08:04:09', '2025-11-17 08:04:09'),
(11, 'Client Retention Rate', 'Tracks the ability to retain and manage key clients/customers effectively.', '2025-11-17 08:04:28', '2025-11-17 08:04:28'),
(12, 'Task Prioritization', 'Evaluates how well an employee prioritizes tasks to meet deadlines.', '2025-11-17 08:04:48', '2025-11-17 08:04:48'),
(13, 'Leadership & Mentoring', 'Measures leadership skills, mentoring juniors, or team guidance.', '2025-11-17 08:05:15', '2025-11-17 08:05:15'),
(14, 'Response Time', 'Tracks how quickly the employee responds to tasks, queries, or tickets.', '2025-11-17 08:05:39', '2025-11-17 08:05:39'),
(15, 'Attendance in Meetings & Participation', 'Measures active engagement in team or departmental meetings.', '2025-11-17 08:06:01', '2025-11-17 08:06:01');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', '3bc02c11b4528f8f6a6da4cea786400d4a0dc529822d178d62ec0f64e29bb4c2', '[\"*\"]', '2025-11-12 06:19:27', NULL, '2025-11-12 03:57:52', '2025-11-12 06:19:27'),
(2, 'App\\Models\\User', 4, 'auth_token', 'b3031f185f8483eafb5a1d6e264c6dcab55b5e1c5f80f82a6cd2580b55d181e1', '[\"*\"]', '2025-11-13 00:21:01', NULL, '2025-11-12 06:20:07', '2025-11-13 00:21:01'),
(3, 'App\\Models\\User', 4, 'auth_token', '3103d65bf0e8209dfc30cc0e8f4171bdf0a9d0a49d13095377b990ee8334b547', '[\"*\"]', '2025-11-13 00:58:47', NULL, '2025-11-13 00:21:14', '2025-11-13 00:58:47'),
(4, 'App\\Models\\User', 4, 'auth_token', 'cf8012bad1d73766540b142922288aae102e7a4d9d87b97d46aae07a10b2a34a', '[\"*\"]', NULL, NULL, '2025-11-13 00:58:56', '2025-11-13 00:58:56'),
(5, 'App\\Models\\User', 4, 'auth_token', '46a22267a9813d7914f15f9236eba2acf909ec10cdb440dd4856ae39dea04f00', '[\"*\"]', NULL, NULL, '2025-11-13 00:59:05', '2025-11-13 00:59:05'),
(6, 'App\\Models\\User', 4, 'auth_token', '795f3f8b312507095bdc8643fa6e43a11001ad58ee52c21bc67862612fe60eba', '[\"*\"]', NULL, NULL, '2025-11-13 01:00:00', '2025-11-13 01:00:00'),
(7, 'App\\Models\\User', 4, 'auth_token', '2e4044c72ed3c5ec50c33d77a943eddf7bc6bae32cafde844e8c99455f28200e', '[\"*\"]', '2025-11-13 01:50:19', NULL, '2025-11-13 01:24:07', '2025-11-13 01:50:19'),
(8, 'App\\Models\\User', 2, 'auth_token', 'e280e5c43829bd04ff8662a157d89dc62433d5af29229bbcbc224ea501fc418b', '[\"*\"]', '2025-11-13 02:58:35', NULL, '2025-11-13 01:50:34', '2025-11-13 02:58:35'),
(9, 'App\\Models\\User', 4, 'auth_token', '1f5869d12c2b51261e062f3fb5037f1c6a992dd420c031df71d10d9c294c8cb3', '[\"*\"]', '2025-11-13 03:13:48', NULL, '2025-11-13 02:58:59', '2025-11-13 03:13:48'),
(10, 'App\\Models\\User', 4, 'auth_token', 'a3fef38c1b15d194d862d65a7018bc3dedd8f9c9eb32eea2cece692bff87a363', '[\"*\"]', '2025-11-13 02:59:54', NULL, '2025-11-13 02:59:54', '2025-11-13 02:59:54'),
(11, 'App\\Models\\User', 5, 'auth_token', '01ee721d057160a29a246878d4541789d9605d1e567fcea2dd28b2ba665f7ad9', '[\"*\"]', '2025-11-13 03:30:50', NULL, '2025-11-13 03:14:01', '2025-11-13 03:30:50'),
(12, 'App\\Models\\User', 6, 'auth_token', 'e2daa8eed44a1929505ffb1e8fc72f1ffee523ff6e127be8ef62d969374ca5e0', '[\"*\"]', '2025-11-13 03:22:20', NULL, '2025-11-13 03:22:18', '2025-11-13 03:22:20'),
(13, 'App\\Models\\User', 3, 'auth_token', 'de7fd9a7029472200310228c95f02228eec05d438ceddfa984b3b0892c0a28f5', '[\"*\"]', '2025-11-13 03:31:06', NULL, '2025-11-13 03:31:06', '2025-11-13 03:31:06'),
(14, 'App\\Models\\User', 4, 'auth_token', 'fbcb16936b220f21fb7e7f080ff72d4e145b5fcf4be46f2fc1e8d83b60e260da', '[\"*\"]', '2025-11-13 03:40:26', NULL, '2025-11-13 03:32:02', '2025-11-13 03:40:26'),
(15, 'App\\Models\\User', 5, 'auth_token', 'd08f1a5140579f3bf9c687a7de77e4ba479029b669d195b288f22e17a4894f0c', '[\"*\"]', '2025-11-13 03:41:09', NULL, '2025-11-13 03:40:42', '2025-11-13 03:41:09'),
(16, 'App\\Models\\User', 3, 'auth_token', '7fc5933ab7f673ae0b7f95f1cc1e3d6b4a91102dc64b5754c1a15d4deced90f8', '[\"*\"]', '2025-11-13 03:41:49', NULL, '2025-11-13 03:41:16', '2025-11-13 03:41:49'),
(17, 'App\\Models\\User', 5, 'auth_token', '9c02a06e38c08199dd328c1c0c66f9e95434f92859de45f0280cbebd1b35c182', '[\"*\"]', '2025-11-13 03:42:10', NULL, '2025-11-13 03:42:02', '2025-11-13 03:42:10'),
(18, 'App\\Models\\User', 4, 'auth_token', 'e1feff211bd59dc169b90117706a6f378eeb713f9eda8906ead33bfbc1929a05', '[\"*\"]', '2025-11-13 03:53:33', NULL, '2025-11-13 03:42:53', '2025-11-13 03:53:33'),
(19, 'App\\Models\\User', 5, 'auth_token', '9f65ad62f9e851d76def68fdc4ddffaeef990b8e5d21f62874f33a9322eb62bd', '[\"*\"]', '2025-11-13 03:56:51', NULL, '2025-11-13 03:55:31', '2025-11-13 03:56:51'),
(20, 'App\\Models\\User', 7, 'auth_token', '0be097d7e68850c569518e6508c2361395dcdd18dcec8c223caf6a18e4e20b10', '[\"*\"]', '2025-11-13 03:58:24', NULL, '2025-11-13 03:57:10', '2025-11-13 03:58:24'),
(21, 'App\\Models\\User', 4, 'auth_token', '76b112e6e97c09725380d3913c0da74cc194b0f1e8be50b5a5bd231dc9aeb305', '[\"*\"]', '2025-11-13 03:58:52', NULL, '2025-11-13 03:58:41', '2025-11-13 03:58:52'),
(22, 'App\\Models\\User', 5, 'auth_token', '090934284fb4d2d716f11274906f5c057f8589bccdd76c7aaff6bf275c222879', '[\"*\"]', '2025-11-13 04:00:06', NULL, '2025-11-13 03:59:34', '2025-11-13 04:00:06'),
(23, 'App\\Models\\User', 6, 'auth_token', '34b72df60c31a65dd385aacc796db738e32860785911dcff2b5bceb568f7002d', '[\"*\"]', '2025-11-13 04:00:24', NULL, '2025-11-13 04:00:20', '2025-11-13 04:00:24'),
(24, 'App\\Models\\User', 2, 'auth_token', '54ba118dafc2f2441204dd869b6dc66373e829b1f2f4ddc21b472961af925d3d', '[\"*\"]', '2025-11-13 04:00:43', NULL, '2025-11-13 04:00:43', '2025-11-13 04:00:43'),
(25, 'App\\Models\\User', 2, 'auth_token', 'b414df7d9c979307a5ecb4e2416544b3f78fd22005755110ca882cabee498195', '[\"*\"]', '2025-11-13 04:01:21', NULL, '2025-11-13 04:01:00', '2025-11-13 04:01:21'),
(26, 'App\\Models\\User', 6, 'auth_token', '7a57a69d16593e54a1b3e7a90a5a409157e8d1a661e08822da98a2373d0f23bd', '[\"*\"]', '2025-11-13 04:09:36', NULL, '2025-11-13 04:01:42', '2025-11-13 04:09:36'),
(27, 'App\\Models\\User', 8, 'auth_token', 'f6bd42471e1bd8d9eea60135b489a44853311ba49857cc0f2f24ab21099eee32', '[\"*\"]', '2025-11-13 04:10:56', NULL, '2025-11-13 04:10:56', '2025-11-13 04:10:56'),
(28, 'App\\Models\\User', 8, 'auth_token', '02ecdbd478669f000e3f5afcd14ebafb9873018d0d2b46260f4d8b4d09e13d39', '[\"*\"]', '2025-11-13 04:11:03', NULL, '2025-11-13 04:11:03', '2025-11-13 04:11:03'),
(29, 'App\\Models\\User', 8, 'auth_token', 'c05032850f33e00b6cb095a49249ac8869203f2628b0f43a177529b486fd6d86', '[\"*\"]', '2025-11-13 04:12:49', NULL, '2025-11-13 04:11:38', '2025-11-13 04:12:49'),
(30, 'App\\Models\\User', 8, 'auth_token', 'a3953bcfbd8312dbe0cb67e1e256ba5ed62410f923fb36d18e3f5ef020d34255', '[\"*\"]', '2025-11-13 04:12:03', NULL, '2025-11-13 04:12:03', '2025-11-13 04:12:03'),
(31, 'App\\Models\\User', 2, 'auth_token', 'b7ed4c3f58d6e05c661f7fef2586f0db8d13dd7bbdb8138be5136b85ad4409dd', '[\"*\"]', '2025-11-13 05:32:33', NULL, '2025-11-13 04:12:15', '2025-11-13 05:32:33'),
(32, 'App\\Models\\User', 4, 'auth_token', '316dd1e8a2a69254b164543dcd75297669af739cb85ce83b20f17232b06cdb9c', '[\"*\"]', '2025-11-14 21:13:38', NULL, '2025-11-13 04:17:33', '2025-11-14 21:13:38'),
(33, 'App\\Models\\User', 8, 'auth_token', '5a565ac8374db169768161338f99f977a141bd5ad1994f42b3b0602f8aae67f7', '[\"*\"]', '2025-11-13 05:32:54', NULL, '2025-11-13 05:32:45', '2025-11-13 05:32:54'),
(34, 'App\\Models\\User', 4, 'auth_token', '2d9eeaf20141b073ce56789e870d7867d317116f1bff19accff3d10adeafa86b', '[\"*\"]', '2025-11-13 05:34:05', NULL, '2025-11-13 05:33:53', '2025-11-13 05:34:05'),
(35, 'App\\Models\\User', 5, 'auth_token', 'abe7096a6c2f064ee9e0e536cf63d8a0cc06135ab08262398c74bced3c549128', '[\"*\"]', '2025-11-14 21:15:28', NULL, '2025-11-14 21:13:49', '2025-11-14 21:15:28'),
(36, 'App\\Models\\User', 7, 'auth_token', 'aee4b32bf85d1a0e1e6e456cc5bf40cd43a8ab27190574757c9d6ccc0269b5d9', '[\"*\"]', '2025-11-14 21:15:43', NULL, '2025-11-14 21:15:43', '2025-11-14 21:15:43'),
(37, 'App\\Models\\User', 8, 'auth_token', '7135ade8eeaf475332a61aa889dde2fc57754234be27fa4ee170cc664caac7a9', '[\"*\"]', '2025-11-14 21:55:51', NULL, '2025-11-14 21:16:19', '2025-11-14 21:55:51'),
(38, 'App\\Models\\User', 2, 'auth_token', '6e2bb5a6816ae2c76d406f8ae398a144b096a5c4f15fb77c10b14a114415b87c', '[\"*\"]', '2025-11-14 22:08:45', NULL, '2025-11-14 21:56:03', '2025-11-14 22:08:45'),
(39, 'App\\Models\\User', 4, 'auth_token', 'a1454e0bc45e9180c2e6a082fc1e0569df7e4571d5650dd3e2c0fcd8a08f0df6', '[\"*\"]', '2025-11-14 22:17:14', NULL, '2025-11-14 21:58:06', '2025-11-14 22:17:14'),
(40, 'App\\Models\\User', 8, 'auth_token', '7f6eb69c52cd82735916f7c1a6379db3cf94a39a59fbcad54e711473acbc2133', '[\"*\"]', '2025-11-14 23:04:25', NULL, '2025-11-14 22:08:58', '2025-11-14 23:04:25'),
(41, 'App\\Models\\User', 7, 'auth_token', 'df9d0a281ac4461a2bfc5d55d94039a541e7f7d782557e5f11883d20a3075ef9', '[\"*\"]', '2025-11-14 23:12:48', NULL, '2025-11-14 23:04:44', '2025-11-14 23:12:48'),
(42, 'App\\Models\\User', 9, 'auth_token', 'ffc8b49a5695ba28d55c88cd83d24ab4ff600a885f81688d74c488dc90e679db', '[\"*\"]', '2025-11-14 23:15:48', NULL, '2025-11-14 23:13:40', '2025-11-14 23:15:48'),
(43, 'App\\Models\\User', 9, 'auth_token', '0fd8fe40119da557d9944258d4ecccc62f0402f284f87c413e78e42400604cd5', '[\"*\"]', '2025-11-14 23:16:36', NULL, '2025-11-14 23:16:01', '2025-11-14 23:16:36'),
(44, 'App\\Models\\User', 9, 'auth_token', '347d1a9ebf8ea0be82778e29de0daac2142c1deab30c1ac204d8e060fc397f0b', '[\"*\"]', '2025-11-14 23:17:07', NULL, '2025-11-14 23:16:49', '2025-11-14 23:17:07'),
(45, 'App\\Models\\User', 4, 'auth_token', '8916ba5071922684d2e15c5f1e999edd71c692768c67ef532c15e07f722a927c', '[\"*\"]', '2025-11-14 23:17:40', NULL, '2025-11-14 23:17:14', '2025-11-14 23:17:40'),
(46, 'App\\Models\\User', 7, 'auth_token', 'b4ae0fa70b9205597550648cdf9f6804e0e11b6fc6c8578be4dcf5c8686a0d95', '[\"*\"]', '2025-11-14 23:18:49', NULL, '2025-11-14 23:17:57', '2025-11-14 23:18:49'),
(47, 'App\\Models\\User', 4, 'auth_token', '69202c1cf50c43506ae66966a6a8be6e9a9cfea07c4fc6e67a036701d71564ae', '[\"*\"]', '2025-11-14 23:21:58', NULL, '2025-11-14 23:20:28', '2025-11-14 23:21:58'),
(48, 'App\\Models\\User', 10, 'auth_token', '1f714fc23425f63027a4a12b272114e7883d9918222f291e835440839795d022', '[\"*\"]', '2025-11-14 23:24:14', NULL, '2025-11-14 23:22:13', '2025-11-14 23:24:14'),
(49, 'App\\Models\\User', 9, 'auth_token', '212a265b15417ec24531313ae1e42868efbe5b2f45810f1e3b918c89ff2bea03', '[\"*\"]', '2025-11-15 02:34:44', NULL, '2025-11-14 23:24:36', '2025-11-15 02:34:44'),
(50, 'App\\Models\\User', 4, 'auth_token', '22f6fe48bc646fa71b7206ed473145c653dee0a20d886bbd70bf12c2f692be84', '[\"*\"]', '2025-11-15 08:43:33', NULL, '2025-11-15 02:34:56', '2025-11-15 08:43:33'),
(51, 'App\\Models\\User', 1, 'auth_token', 'f0866aedcd5c0ed1b2838776992422ba8d027beb800379dae8932538d0f9b475', '[\"*\"]', '2025-11-15 10:00:57', NULL, '2025-11-15 08:43:43', '2025-11-15 10:00:57'),
(52, 'App\\Models\\User', 7, 'auth_token', '68dd99f6168c2f93ad544c121e4547349bf9b173712f8fbb3795b5c423107088', '[\"*\"]', '2025-11-15 10:44:34', NULL, '2025-11-15 10:01:10', '2025-11-15 10:44:34'),
(53, 'App\\Models\\User', 10, 'auth_token', 'da3009e590826d4ff1acca442f99a1ed7f9c1ca1de5c6c60ec70748cc6ad19c7', '[\"*\"]', '2025-11-15 10:45:56', NULL, '2025-11-15 10:44:48', '2025-11-15 10:45:56'),
(54, 'App\\Models\\User', 5, 'auth_token', 'cdfe813737e8de92b9fb509a1ce73305821c5eb899ba30dbdbb22b7bdf1e9c9c', '[\"*\"]', '2025-11-15 10:46:56', NULL, '2025-11-15 10:46:04', '2025-11-15 10:46:56'),
(55, 'App\\Models\\User', 9, 'auth_token', '17f5f9d17be598476e727e84c132947474dd250dd46e608fa5a92c1bc55a93ad', '[\"*\"]', '2025-11-15 10:49:25', NULL, '2025-11-15 10:48:10', '2025-11-15 10:49:25'),
(56, 'App\\Models\\User', 7, 'auth_token', '99e493f474893e32b12f2e260ae1ba614a18e758f5c61c21fab30688f4bb30be', '[\"*\"]', '2025-11-15 11:06:19', NULL, '2025-11-15 10:49:40', '2025-11-15 11:06:19'),
(57, 'App\\Models\\User', 1, 'auth_token', 'dee7c2e34af3e3c449b8a3b292e24c138d7ff3ea19dcec6b108148021de114fb', '[\"*\"]', '2025-11-15 11:06:55', NULL, '2025-11-15 11:06:28', '2025-11-15 11:06:55'),
(58, 'App\\Models\\User', 7, 'auth_token', '25c4de9d32a9d33de4de7916fc949db21d87ddba697e25e3ade0e2387adef6ae', '[\"*\"]', '2025-11-15 11:08:21', NULL, '2025-11-15 11:07:10', '2025-11-15 11:08:21'),
(59, 'App\\Models\\User', 1, 'auth_token', '508e2c730b6e95c6913da137c84fc4e8f50e51754054c4c558095969d62b8d57', '[\"*\"]', '2025-11-15 11:09:31', NULL, '2025-11-15 11:08:32', '2025-11-15 11:09:31'),
(60, 'App\\Models\\User', 5, 'auth_token', 'bd609783eb445556eb7f791858b362f4f77c199fe8a1f4cea01212d68fe879c5', '[\"*\"]', '2025-11-15 11:10:07', NULL, '2025-11-15 11:09:41', '2025-11-15 11:10:07'),
(61, 'App\\Models\\User', 6, 'auth_token', 'a91733df5452d0af448d1d0c8b3fcf28669b337f75c57c993f174d9480756863', '[\"*\"]', '2025-11-15 11:11:07', NULL, '2025-11-15 11:10:23', '2025-11-15 11:11:07'),
(62, 'App\\Models\\User', 8, 'auth_token', '985957f9dbde90772feefb0ab694600e781f092e87556876594e26585e338e67', '[\"*\"]', '2025-11-15 11:14:40', NULL, '2025-11-15 11:12:04', '2025-11-15 11:14:40'),
(63, 'App\\Models\\User', 5, 'auth_token', '115311e3cbf4d89881013f17e60b9c77c8a4da1125cf46e022b9bd70b7bcc48a', '[\"*\"]', '2025-11-15 11:26:59', NULL, '2025-11-15 11:14:47', '2025-11-15 11:26:59'),
(64, 'App\\Models\\User', 7, 'auth_token', '0ccba7ed020214f909d93e7976f28a5e48ab7d420308d0727640ca3211a53f9c', '[\"*\"]', '2025-11-15 11:27:22', NULL, '2025-11-15 11:27:08', '2025-11-15 11:27:22'),
(65, 'App\\Models\\User', 1, 'auth_token', '0244b5a8774e54545a9243bb5781b73dc8c2e95b451bdff8d1dcfefc86857436', '[\"*\"]', '2025-11-15 11:29:41', NULL, '2025-11-15 11:27:31', '2025-11-15 11:29:41'),
(66, 'App\\Models\\User', 10, 'auth_token', 'cae6383c650f5b314425e5c3b25d2a1cbc68440162a79fbbb479410512de2eb7', '[\"*\"]', '2025-11-15 11:30:03', NULL, '2025-11-15 11:29:56', '2025-11-15 11:30:03'),
(67, 'App\\Models\\User', 1, 'auth_token', '2950bd7e28d2ef49ee4356ccbbbd96a89dbb3c10e1885202072f383f7ccc9ab7', '[\"*\"]', '2025-11-15 12:11:51', NULL, '2025-11-15 11:30:14', '2025-11-15 12:11:51'),
(68, 'App\\Models\\User', 7, 'auth_token', 'b3945dc7e660cb9617b2aa7b4378e00ecc65a480a7bd535811626d795c28521a', '[\"*\"]', '2025-11-15 12:12:25', NULL, '2025-11-15 12:12:02', '2025-11-15 12:12:25'),
(69, 'App\\Models\\User', 1, 'auth_token', 'bd2faf1fe6b319bac042ae8e2538c32a64564e07ebeab7c1f4a75e252fd4153b', '[\"*\"]', '2025-11-15 12:21:57', NULL, '2025-11-15 12:12:34', '2025-11-15 12:21:57'),
(70, 'App\\Models\\User', 4, 'auth_token', 'e7e4d12f7a9be62f6aa7b8c73cfac5c13a9d0be20540a08543b70dd1e68d885c', '[\"*\"]', '2025-11-15 12:22:25', NULL, '2025-11-15 12:22:09', '2025-11-15 12:22:25'),
(71, 'App\\Models\\User', 1, 'auth_token', '14e175e5ac26480916e2751718784960a8993ac017bd56686ec39b5e02020443', '[\"*\"]', '2025-11-15 12:30:26', NULL, '2025-11-15 12:22:32', '2025-11-15 12:30:26'),
(72, 'App\\Models\\User', 1, 'auth_token', '89972a3d419e072fd97e21db0394091bed3995dbc960fa7a9abeee11de3d40dc', '[\"*\"]', '2025-11-15 12:26:43', NULL, '2025-11-15 12:26:24', '2025-11-15 12:26:43'),
(73, 'App\\Models\\User', 1, 'auth_token', '6391cfd397e76ba52313c18a83ac2818152080f17e263d31a9a1a471e6f5ef8d', '[\"*\"]', '2025-11-15 12:31:06', NULL, '2025-11-15 12:30:52', '2025-11-15 12:31:06'),
(74, 'App\\Models\\User', 1, 'auth_token', '7c1869d6827b0d104e580b00e56122203443892cfc591606f4d9ee70917f0245', '[\"*\"]', '2025-11-15 12:39:45', NULL, '2025-11-15 12:35:56', '2025-11-15 12:39:45'),
(75, 'App\\Models\\User', 5, 'auth_token', '2f58dac7472fe0c694525133ccecc28e8fa0a4b5235af610526a8933db565af4', '[\"*\"]', '2025-11-15 12:44:20', NULL, '2025-11-15 12:39:53', '2025-11-15 12:44:20'),
(76, 'App\\Models\\User', 1, 'auth_token', 'bdd3b308155f282d2dc6e5bb8b154d271f5290f898ec373a016762e680893a7f', '[\"*\"]', '2025-11-15 12:46:39', NULL, '2025-11-15 12:44:29', '2025-11-15 12:46:39'),
(77, 'App\\Models\\User', 5, 'auth_token', '43adeb7d6e1b71aace7d7b9beb246fa70cb76ad29beb3a2eb64d2ec3a8792b6b', '[\"*\"]', '2025-11-15 12:46:54', NULL, '2025-11-15 12:46:46', '2025-11-15 12:46:54'),
(78, 'App\\Models\\User', 1, 'auth_token', '53d3d84dbf5d35635ebc1d794ccbaf79f4f1de86e6d5a8da92b80dd2e6d5ba6f', '[\"*\"]', '2025-11-16 03:22:21', NULL, '2025-11-15 12:47:03', '2025-11-16 03:22:21'),
(79, 'App\\Models\\User', 4, 'auth_token', 'ba7f9c5a85fcd67480bebf92b876d4dba872e9134fe426e91faab6e6af239098', '[\"*\"]', '2025-11-16 03:22:35', NULL, '2025-11-16 03:22:32', '2025-11-16 03:22:35'),
(80, 'App\\Models\\User', 1, 'auth_token', 'ffdb5acbdf141435ce5ba7577d7abe8f8616d39a76267cd2a249845cb885e03a', '[\"*\"]', '2025-11-16 03:23:29', NULL, '2025-11-16 03:22:50', '2025-11-16 03:23:29'),
(81, 'App\\Models\\User', 7, 'auth_token', 'c217bd335719ebdbe34a5ae409aefa3f28d7cb532de5ca80e4c8d276abe971f8', '[\"*\"]', '2025-11-16 03:23:55', NULL, '2025-11-16 03:23:37', '2025-11-16 03:23:55'),
(82, 'App\\Models\\User', 1, 'auth_token', '9c10d0d49ec80a579787961e1567ab36bf91ccdcaf4c75b4698eece5a7919d8f', '[\"*\"]', '2025-11-16 03:25:12', NULL, '2025-11-16 03:24:04', '2025-11-16 03:25:12'),
(83, 'App\\Models\\User', 4, 'auth_token', '6d207436e86223a393497dffe74ffdaa9e2eeb141e8927b66c6df066c117cb3a', '[\"*\"]', '2025-11-16 03:25:39', NULL, '2025-11-16 03:25:20', '2025-11-16 03:25:39'),
(84, 'App\\Models\\User', 1, 'auth_token', 'aa12507ec4367852289c34a0058bdc2ac0723fe5403b15ee14490a1c62ebfe92', '[\"*\"]', '2025-11-16 03:26:53', NULL, '2025-11-16 03:25:50', '2025-11-16 03:26:53'),
(85, 'App\\Models\\User', 1, 'auth_token', 'c48a67bc64fe4c5d00dcdb2c28bd673b138e230d2fbfc374b44b3f318c26a5b8', '[\"*\"]', '2025-11-16 03:29:09', NULL, '2025-11-16 03:27:50', '2025-11-16 03:29:09'),
(86, 'App\\Models\\User', 4, 'auth_token', '8b270d3461ef059e44c40a58442d3d9c91ca60ef39f13506a123da6e25a2093e', '[\"*\"]', '2025-11-16 03:30:11', NULL, '2025-11-16 03:29:17', '2025-11-16 03:30:11'),
(87, 'App\\Models\\User', 1, 'auth_token', '13df81755328f098b6ed0611c63bb0be021b17be43a52526cf76191bdcc21ac9', '[\"*\"]', '2025-11-16 03:33:19', NULL, '2025-11-16 03:30:25', '2025-11-16 03:33:19'),
(88, 'App\\Models\\User', 3, 'auth_token', '591500d585b9dffffb4f1844a38bd28d19cf4635cda577f2ec28b656d7e6dad0', '[\"*\"]', '2025-11-16 03:33:45', NULL, '2025-11-16 03:33:32', '2025-11-16 03:33:45'),
(89, 'App\\Models\\User', 1, 'auth_token', 'fe0a1eef673c218e7f970688551f11481d62c75993590ca821148fec6c704372', '[\"*\"]', '2025-11-16 03:35:06', NULL, '2025-11-16 03:33:52', '2025-11-16 03:35:06'),
(90, 'App\\Models\\User', 2, 'auth_token', '6e849d9f0182eebf7aa4c007dbe1fa9737ee277483ed19b414b54f6d2a0dd81d', '[\"*\"]', '2025-11-16 03:36:13', NULL, '2025-11-16 03:35:13', '2025-11-16 03:36:13'),
(91, 'App\\Models\\User', 9, 'auth_token', 'd93cdd83fe3df5b94d46a8b1aef77760e723a39a50a25769bd19257c102c8a1f', '[\"*\"]', '2025-11-16 03:36:43', NULL, '2025-11-16 03:36:28', '2025-11-16 03:36:43'),
(92, 'App\\Models\\User', 10, 'auth_token', '15056a1b669c6fa71573883c929bbbec1ab60e6cee8a1543af1dec3dc22f82e6', '[\"*\"]', '2025-11-16 03:37:01', NULL, '2025-11-16 03:36:54', '2025-11-16 03:37:01'),
(93, 'App\\Models\\User', 1, 'auth_token', '01dd827d5458a7dde58821618143149fe645dce187dc783a543a0c37c0445a00', '[\"*\"]', '2025-11-16 03:37:11', NULL, '2025-11-16 03:37:08', '2025-11-16 03:37:11'),
(94, 'App\\Models\\User', 5, 'auth_token', 'a74b1f99665e9bf28a174100e71e40d2817a0095c6a9fa38962eb20edd8c8e5f', '[\"*\"]', '2025-11-16 03:38:01', NULL, '2025-11-16 03:37:48', '2025-11-16 03:38:01'),
(95, 'App\\Models\\User', 6, 'auth_token', '13eb2dbe38822387cf1d580532e281e5e6d4e9cded11b4bdd02265b8664c5031', '[\"*\"]', '2025-11-16 03:38:27', NULL, '2025-11-16 03:38:20', '2025-11-16 03:38:27'),
(96, 'App\\Models\\User', 7, 'auth_token', '3c2c466ebebb2e78fa789c2fa014070d280afe06758fac372ba43e09de449625', '[\"*\"]', '2025-11-16 03:38:42', NULL, '2025-11-16 03:38:38', '2025-11-16 03:38:42'),
(97, 'App\\Models\\User', 1, 'auth_token', '834253d1c40a941a5a1707f26742be87b0e104994e7d1115ac0458e27937d6cc', '[\"*\"]', '2025-11-16 03:39:31', NULL, '2025-11-16 03:38:48', '2025-11-16 03:39:31'),
(98, 'App\\Models\\User', 7, 'auth_token', '3ce36a8a5d976b481b70f0745ae341b46b9a0a1723fc934b1b156d31e8666a1a', '[\"*\"]', '2025-11-16 03:40:41', NULL, '2025-11-16 03:39:46', '2025-11-16 03:40:41'),
(99, 'App\\Models\\User', 8, 'auth_token', 'b9d46346a7496532df0f373ef6478c828a39094ddca394b0d4c8f44a857a531e', '[\"*\"]', '2025-11-16 03:41:03', NULL, '2025-11-16 03:40:52', '2025-11-16 03:41:03'),
(100, 'App\\Models\\User', 1, 'auth_token', 'f678bef9b27c44d2731e33b4072200648277af31e20931a08698402b261f2244', '[\"*\"]', '2025-11-16 04:36:36', NULL, '2025-11-16 03:41:10', '2025-11-16 04:36:36'),
(101, 'App\\Models\\User', 2, 'auth_token', '3c19fefa07348d4ee6c18510008e095dff3ac95849d2f0bcfca5b0aaca3bdd3a', '[\"*\"]', '2025-11-16 04:36:55', NULL, '2025-11-16 04:36:44', '2025-11-16 04:36:55'),
(102, 'App\\Models\\User', 1, 'auth_token', 'bbe81339da61ffac4a90322e4765843ed1c22ee5fc356e853644def69ea910d9', '[\"*\"]', '2025-11-16 05:19:08', NULL, '2025-11-16 04:37:03', '2025-11-16 05:19:08'),
(103, 'App\\Models\\User', 5, 'auth_token', '683a8fd6f12b4c7436fdbdfb73ad910edc5baeeac3f2f3b0cb7b27fb0712e135', '[\"*\"]', '2025-11-16 05:25:12', NULL, '2025-11-16 05:19:18', '2025-11-16 05:25:12'),
(104, 'App\\Models\\User', 4, 'auth_token', '476192bbdb3874d70bc5e916f43e11da823c07c4eff204347178f8fa49a5467a', '[\"*\"]', '2025-11-16 05:31:43', NULL, '2025-11-16 05:25:25', '2025-11-16 05:31:43'),
(105, 'App\\Models\\User', 1, 'auth_token', '1b077da954558a4b85f782af96fec80ed2f3191fb8d053e2efa1827abc879643', '[\"*\"]', '2025-11-16 05:32:03', NULL, '2025-11-16 05:31:50', '2025-11-16 05:32:03'),
(106, 'App\\Models\\User', 2, 'auth_token', '62adcf4b85a9eacca185ed23ae51cca11efaaa9eb99538f56d402d81c8387331', '[\"*\"]', '2025-11-16 05:35:48', NULL, '2025-11-16 05:32:25', '2025-11-16 05:35:48'),
(107, 'App\\Models\\User', 3, 'auth_token', '952dee47314509f587530f1030084bdd7ae0b114bf73d608287d9337798d086d', '[\"*\"]', '2025-11-16 05:42:15', NULL, '2025-11-16 05:36:32', '2025-11-16 05:42:15'),
(108, 'App\\Models\\User', 2, 'auth_token', '553da416347b68c9a0e06396db6d318328e32fb18f50da7495d8ce512fe35cac', '[\"*\"]', '2025-11-16 06:17:30', NULL, '2025-11-16 05:42:28', '2025-11-16 06:17:30'),
(109, 'App\\Models\\User', 10, 'auth_token', 'f212b8265ad2d467c064ed3ac4f763fefc244b4bce9d95126445e28fad163d3a', '[\"*\"]', '2025-11-16 06:11:33', NULL, '2025-11-16 06:09:12', '2025-11-16 06:11:33'),
(110, 'App\\Models\\User', 2, 'auth_token', '0037c19a30d00a07a9802a7094e19860b6e17fae8f74eaa5fde20737ac00a275', '[\"*\"]', '2025-11-16 06:46:43', NULL, '2025-11-16 06:11:41', '2025-11-16 06:46:43'),
(111, 'App\\Models\\User', 1, 'auth_token', '55da6c4db488074601d5bc44e2d00252eaac519b67f78f7a51b38d29e85177ff', '[\"*\"]', '2025-11-16 06:19:22', NULL, '2025-11-16 06:17:39', '2025-11-16 06:19:22'),
(112, 'App\\Models\\User', 2, 'auth_token', '397dd65ab20b1b7ba14f0dfc4c5b1c082af10d7d94373fae976227202a7862f3', '[\"*\"]', '2025-11-16 06:26:33', NULL, '2025-11-16 06:19:31', '2025-11-16 06:26:33'),
(113, 'App\\Models\\User', 2, 'auth_token', '5dbc87fcd2526c51b5eb7c0723c81582aac58c5b9b24ce41c43ff34c87868ee0', '[\"*\"]', '2025-11-16 06:55:57', NULL, '2025-11-16 06:46:51', '2025-11-16 06:55:57'),
(114, 'App\\Models\\User', 2, 'auth_token', '413c2cdf4c175eec0abcc5b73a52b773cd12654e3aebfcf5f539db917e2e8b59', '[\"*\"]', '2025-11-16 06:57:34', NULL, '2025-11-16 06:56:09', '2025-11-16 06:57:34'),
(115, 'App\\Models\\User', 9, 'auth_token', 'c3096f6df180377f900af930ef9efd1664569f78aaaba2fbd793720192e5ed72', '[\"*\"]', '2025-11-16 07:14:10', NULL, '2025-11-16 06:57:59', '2025-11-16 07:14:10'),
(116, 'App\\Models\\User', 1, 'auth_token', 'acca810f9a02c4e389dfc88342c3f18d1ba36c066b5d329c6fee4d8690f4f5b6', '[\"*\"]', '2025-11-17 09:31:23', NULL, '2025-11-16 07:03:23', '2025-11-17 09:31:23'),
(117, 'App\\Models\\User', 1, 'auth_token', '933f58145e44640fe53c4d657dd39be2c2e7adb9fcb0a8e3bd309b534835c406', '[\"*\"]', '2025-11-16 07:26:58', NULL, '2025-11-16 07:14:21', '2025-11-16 07:26:58'),
(118, 'App\\Models\\User', 1, 'auth_token', '8ddb79b5592f5f7e2bafd7d23e7f584fcbcb24b6f76d622ba7529c3f4e61c16b', '[\"*\"]', '2025-11-16 07:29:05', NULL, '2025-11-16 07:27:17', '2025-11-16 07:29:05'),
(119, 'App\\Models\\User', 11, 'auth_token', 'e65ac52fd59c50cb46e1e983c7044dc2a80cfd0dcbd4e32dec720ac6f89e945f', '[\"*\"]', '2025-11-16 07:31:20', NULL, '2025-11-16 07:31:20', '2025-11-16 07:31:20'),
(120, 'App\\Models\\User', 11, 'auth_token', '54ed6ad61b9c8589c228127d8c6bac9f2d2f054717f06ab1088e09c473d94fed', '[\"*\"]', '2025-11-16 07:31:36', NULL, '2025-11-16 07:31:30', '2025-11-16 07:31:36'),
(121, 'App\\Models\\User', 1, 'auth_token', '35c24020dca008c6b8471a649ea8ddee8dfb9038dee7b13a8f7fc11bb55be1d1', '[\"*\"]', '2025-11-16 07:55:46', NULL, '2025-11-16 07:31:44', '2025-11-16 07:55:46'),
(122, 'App\\Models\\User', 13, 'auth_token', 'ccdde20c5059d038b97cfce301a69f7f2abdad53621902ff1baec4ba75132cf3', '[\"*\"]', '2025-11-16 07:57:13', NULL, '2025-11-16 07:56:10', '2025-11-16 07:57:13'),
(123, 'App\\Models\\User', 1, 'auth_token', '83699e1da2c5af3721757c9dca7bd0a252fe9717b04dad61ba260c4b06dbc4cc', '[\"*\"]', '2025-11-16 07:58:13', NULL, '2025-11-16 07:57:22', '2025-11-16 07:58:13'),
(124, 'App\\Models\\User', 13, 'auth_token', 'ff2e044b7919cf917d8ccc1f8c0c2f8d79e930101a46cc0d45b100d6e780b6b0', '[\"*\"]', '2025-11-16 07:58:50', NULL, '2025-11-16 07:58:27', '2025-11-16 07:58:50'),
(125, 'App\\Models\\User', 11, 'auth_token', 'f7a06f634fe11b36735a7b603ff7776e1cda8521858e951d5abf5cb258a53ea6', '[\"*\"]', '2025-11-16 07:59:51', NULL, '2025-11-16 07:59:00', '2025-11-16 07:59:51'),
(126, 'App\\Models\\User', 1, 'auth_token', 'dde52002a99302cae12d3a8f69b98b2cbc342726d241607b7c84aa7e26f72058', '[\"*\"]', '2025-11-16 10:18:59', NULL, '2025-11-16 07:59:57', '2025-11-16 10:18:59'),
(127, 'App\\Models\\User', 1, 'auth_token', '39457e1a7631f7119b4baf7ee4330b3c622064453e8db1017095eba17427881e', '[\"*\"]', '2025-11-16 10:06:31', NULL, '2025-11-16 10:06:12', '2025-11-16 10:06:31'),
(128, 'App\\Models\\User', 9, 'auth_token', 'acb0d61a1e48c90c8fa0796eea35a1d594db73b50a483e85c68d3302ed5facf1', '[\"*\"]', '2025-11-16 10:20:43', NULL, '2025-11-16 10:19:26', '2025-11-16 10:20:43'),
(129, 'App\\Models\\User', 1, 'auth_token', '2624e7d280ffede60fef807b57bd027071c4ddbf95e24a277a8f0e3da0e7ecf5', '[\"*\"]', '2025-11-16 10:23:29', NULL, '2025-11-16 10:21:50', '2025-11-16 10:23:29'),
(130, 'App\\Models\\User', 9, 'auth_token', 'eed6a1945ca9d338ea0dd5e101ab361249b8134d3df78e3701cac68c70a1a6dd', '[\"*\"]', '2025-11-16 10:24:53', NULL, '2025-11-16 10:23:48', '2025-11-16 10:24:53'),
(131, 'App\\Models\\User', 1, 'auth_token', 'da953dabd14f5ed727d41501cfa16fbd55d2b7ec1cef2047c75ee4e5945bd440', '[\"*\"]', '2025-11-16 10:25:22', NULL, '2025-11-16 10:25:07', '2025-11-16 10:25:22'),
(132, 'App\\Models\\User', 9, 'auth_token', 'd0852136fe32154dd5336b28fd91b43399a7fb01f0259b5f9afcb0421715552e', '[\"*\"]', '2025-11-16 10:32:08', NULL, '2025-11-16 10:25:39', '2025-11-16 10:32:08'),
(133, 'App\\Models\\User', 1, 'auth_token', '065d462d416bc353704cab8f7a4f8638b8220739790e1f857192b16396ee4df8', '[\"*\"]', '2025-11-16 10:32:44', NULL, '2025-11-16 10:32:39', '2025-11-16 10:32:44'),
(134, 'App\\Models\\User', 11, 'auth_token', '8dd45e14a1246d627549cb7a67fed6a52203c9013a206c58825e0f0b0abcbfb5', '[\"*\"]', '2025-11-16 10:33:01', NULL, '2025-11-16 10:32:56', '2025-11-16 10:33:01'),
(135, 'App\\Models\\User', 13, 'auth_token', '5fe0e8631c44d9f402d9f2313835af1dd041e33c5bfa364709efdc254d23730d', '[\"*\"]', '2025-11-16 10:33:24', NULL, '2025-11-16 10:33:16', '2025-11-16 10:33:24'),
(136, 'App\\Models\\User', 6, 'auth_token', '6231bb95e8fe7f7b5da7882855e3e8f8e64de2994de4824398938f83474a1a64', '[\"*\"]', '2025-11-16 10:57:03', NULL, '2025-11-16 10:33:57', '2025-11-16 10:57:03'),
(137, 'App\\Models\\User', 1, 'auth_token', '427d537497868986b3fc489c477f66873bf9473b6648312001bb4cf775beedcb', '[\"*\"]', '2025-11-16 11:57:39', NULL, '2025-11-16 10:57:14', '2025-11-16 11:57:39'),
(138, 'App\\Models\\User', 2, 'auth_token', 'b66e0ff067ae9fd13e625f7e8b5a457c2cbc1ab717cd1a1ab36bc3f361bb7cbc', '[\"*\"]', '2025-11-16 11:58:14', NULL, '2025-11-16 11:57:46', '2025-11-16 11:58:14'),
(139, 'App\\Models\\User', 1, 'auth_token', '46f60cc43379d75f30f84bec4f90756e0ee303a9c74871eb8252e62b2f1977d3', '[\"*\"]', '2025-11-16 11:59:20', NULL, '2025-11-16 11:58:48', '2025-11-16 11:59:20'),
(140, 'App\\Models\\User', 10, 'auth_token', '9522c52b75c34f1f3ea834c18b225109cf1c0959e32db3a42e8ac8a379e83f2d', '[\"*\"]', '2025-11-16 11:59:44', NULL, '2025-11-16 11:59:27', '2025-11-16 11:59:44'),
(141, 'App\\Models\\User', 1, 'auth_token', '0a412db5d2aab37073c00f5c27c1587aba204908fa22948effda2eeebdedc793', '[\"*\"]', '2025-11-16 12:07:17', NULL, '2025-11-16 11:59:51', '2025-11-16 12:07:17'),
(142, 'App\\Models\\User', 9, 'auth_token', 'ddd63c0ab4221024bd7439ee2bbf8aba171fe6b37b766b27a74319a3801b219c', '[\"*\"]', '2025-11-17 03:32:40', NULL, '2025-11-16 12:07:35', '2025-11-17 03:32:40'),
(143, 'App\\Models\\User', 9, 'auth_token', 'd9778c1c7bc0c52dc76f4b592ec0ccd2907de6a7bffb205150f45e4038ac5b2b', '[\"*\"]', '2025-11-17 03:33:00', NULL, '2025-11-17 03:32:47', '2025-11-17 03:33:00'),
(144, 'App\\Models\\User', 1, 'auth_token', '93963b0b2666aabff923ebade6635165ca34ffbc8b45a653644d62a3e2ec0cc4', '[\"*\"]', '2025-11-17 04:11:59', NULL, '2025-11-17 03:33:07', '2025-11-17 04:11:59'),
(145, 'App\\Models\\User', 5, 'auth_token', '8f8c19637391d87ef584d0399a7cb60f0eed0ba2441e8465ea969d8aebef8ac2', '[\"*\"]', '2025-11-17 04:34:55', NULL, '2025-11-17 04:12:08', '2025-11-17 04:34:55'),
(146, 'App\\Models\\User', 1, 'auth_token', '112a8dc7ba5ea483b270ae78810ca506c8b381a0d23f4e09e79798863b2ae63e', '[\"*\"]', '2025-11-17 04:52:59', NULL, '2025-11-17 04:35:06', '2025-11-17 04:52:59'),
(147, 'App\\Models\\User', 1, 'auth_token', '44a28507d513bb9c9a7e5171f9906d20feda16728fc668c23cc7cf202c078078', '[\"*\"]', '2025-11-17 05:00:38', NULL, '2025-11-17 04:36:08', '2025-11-17 05:00:38'),
(148, 'App\\Models\\User', 1, 'auth_token', '2569eab61dc00a1d4afdfca26dd8d725879fd99d64ed08dd83a6068dba3b1ccf', '[\"*\"]', '2025-11-17 04:53:25', NULL, '2025-11-17 04:53:12', '2025-11-17 04:53:25'),
(149, 'App\\Models\\User', 5, 'auth_token', '2c37f8d617cd96d45d6fa296b518df07cf7713dbb1cf6043dae88afedf4c4d66', '[\"*\"]', '2025-11-17 04:55:58', NULL, '2025-11-17 04:53:32', '2025-11-17 04:55:58'),
(150, 'App\\Models\\User', 9, 'auth_token', '279f805e3f0c9242d322ae663c0958650e7d6a2bf009080aa76c9d4271da1b56', '[\"*\"]', '2025-11-17 05:04:38', NULL, '2025-11-17 04:56:06', '2025-11-17 05:04:38'),
(151, 'App\\Models\\User', 1, 'auth_token', '05217d69c596ce27e64498a6a0809319fce6c423088049da1f28f2aee2b07fb2', '[\"*\"]', '2025-11-17 05:05:58', NULL, '2025-11-17 05:04:47', '2025-11-17 05:05:58'),
(152, 'App\\Models\\User', 2, 'auth_token', '921dfc76a681a40567af2c0a2317e7adaaef1ede62a0067e67b2e9e5e6f76687', '[\"*\"]', '2025-11-17 05:06:25', NULL, '2025-11-17 05:06:07', '2025-11-17 05:06:25'),
(153, 'App\\Models\\User', 3, 'auth_token', '4628a75e3db1974a55f979a1f3229ddcc306295c65be32277f45070c497fe634', '[\"*\"]', '2025-11-17 05:06:50', NULL, '2025-11-17 05:06:36', '2025-11-17 05:06:50'),
(154, 'App\\Models\\User', 4, 'auth_token', 'ba9f4e5cf2e03b818c8025a3a36892f398dd8ee475ace22c8a96691635951e0e', '[\"*\"]', '2025-11-17 05:08:08', NULL, '2025-11-17 05:07:00', '2025-11-17 05:08:08'),
(155, 'App\\Models\\User', 5, 'auth_token', '9bc9d88fcaaf29fddef33da0a78478f0bb698398895dda6d3edfbae9bb4f882b', '[\"*\"]', '2025-11-17 05:08:26', NULL, '2025-11-17 05:08:17', '2025-11-17 05:08:26'),
(156, 'App\\Models\\User', 7, 'auth_token', '18937b1547c802832116eb099f68bbf9d5648f97d5883fc90bd513ee127f4411', '[\"*\"]', '2025-11-17 05:08:41', NULL, '2025-11-17 05:08:36', '2025-11-17 05:08:41'),
(157, 'App\\Models\\User', 8, 'auth_token', 'b55347bad51b83d3e691bf14d48f881e4b0a468e87125af9e853cc0fb82059f2', '[\"*\"]', '2025-11-17 05:08:56', NULL, '2025-11-17 05:08:51', '2025-11-17 05:08:56'),
(158, 'App\\Models\\User', 9, 'auth_token', '32985664c41d1cf93eac916708650954fc1e298781c4fd9c279f506ed5318c1d', '[\"*\"]', '2025-11-17 05:09:10', NULL, '2025-11-17 05:09:04', '2025-11-17 05:09:10'),
(159, 'App\\Models\\User', 10, 'auth_token', 'f7ecc9b842d1a85294be7fd7f0a2c0fc9bfbad13a8801ca1d155782c05378f73', '[\"*\"]', '2025-11-17 05:09:39', NULL, '2025-11-17 05:09:19', '2025-11-17 05:09:39'),
(160, 'App\\Models\\User', 11, 'auth_token', 'e1b55431ff84c3d59b685955afa16374ff9fbf8239bd0fac4fb716f5b03ca806', '[\"*\"]', '2025-11-17 05:10:24', NULL, '2025-11-17 05:09:47', '2025-11-17 05:10:24'),
(161, 'App\\Models\\User', 12, 'auth_token', '98902ddada4dc60f62430d67a1f3e9e81df461f515a7b5d86cab10010cfb4b61', '[\"*\"]', '2025-11-17 05:10:38', NULL, '2025-11-17 05:10:34', '2025-11-17 05:10:38'),
(162, 'App\\Models\\User', 13, 'auth_token', '6240e43ae65e237fee69c2a13ca2a57b2ce2e41e0886e78166efcf05101ec1fe', '[\"*\"]', '2025-11-17 05:10:56', NULL, '2025-11-17 05:10:47', '2025-11-17 05:10:56'),
(163, 'App\\Models\\User', 1, 'auth_token', 'ba0a231c8cae5c4c551e1500fd9e5ca49c588bb131952aa99ca7a6da8a612b3e', '[\"*\"]', '2025-11-17 05:11:36', NULL, '2025-11-17 05:11:03', '2025-11-17 05:11:36'),
(164, 'App\\Models\\User', 6, 'auth_token', '5be9736da070f4ac8229ac1fac2e7eb3eafabf3906d8ec1023d23ae2c1246947', '[\"*\"]', '2025-11-17 05:12:58', NULL, '2025-11-17 05:11:47', '2025-11-17 05:12:58'),
(165, 'App\\Models\\User', 4, 'auth_token', 'd2f8b69940d3ed688f4042718e0704a64c5b0ca3cee6d5f1f73009fedfc55577', '[\"*\"]', '2025-11-17 05:19:01', NULL, '2025-11-17 05:13:08', '2025-11-17 05:19:01'),
(166, 'App\\Models\\User', 5, 'auth_token', '9615203d0e3fc66f0222360a5ff8927d89d11908028a6f22a64776a68b676c22', '[\"*\"]', '2025-11-17 05:20:14', NULL, '2025-11-17 05:19:28', '2025-11-17 05:20:14'),
(167, 'App\\Models\\User', 6, 'auth_token', '3feafd540f06fc206812be809c40cc331a0396bc270c9ac66c87115740599fe8', '[\"*\"]', '2025-11-17 06:22:02', NULL, '2025-11-17 05:20:38', '2025-11-17 06:22:02'),
(168, 'App\\Models\\User', 1, 'auth_token', '0df3da5c433faf0091dcf094a6c3de06f51ac5ccaa3fb67ed6eebd25c64c69bc', '[\"*\"]', '2025-11-17 09:37:36', NULL, '2025-11-17 06:22:09', '2025-11-17 09:37:36'),
(169, 'App\\Models\\User', 1, 'auth_token', '3357f2ebc5b0a36e636ba059939148781c383a2dc6ea5085e73a1d3fb6b7dd43', '[\"*\"]', '2025-11-17 09:57:49', NULL, '2025-11-17 08:17:15', '2025-11-17 09:57:49'),
(170, 'App\\Models\\User', 4, 'auth_token', '56b3632c730171c403121ad51a6330a8dfe17a8a6660d3978ff3368f48ec19bb', '[\"*\"]', '2025-11-17 09:38:34', NULL, '2025-11-17 09:37:48', '2025-11-17 09:38:34'),
(171, 'App\\Models\\User', 1, 'auth_token', '6c92b90d8701ac09594a78693e75cf118f3daf14cc6212e57403ac0261b93949', '[\"*\"]', '2025-11-17 09:47:27', NULL, '2025-11-17 09:38:41', '2025-11-17 09:47:27'),
(172, 'App\\Models\\User', 4, 'auth_token', '282b94e99ebb567a89474d09a5ff74609a1e3a73886265b4bd740cbfd00e998e', '[\"*\"]', '2025-11-17 09:54:13', NULL, '2025-11-17 09:47:41', '2025-11-17 09:54:13'),
(173, 'App\\Models\\User', 1, 'auth_token', '1aa69af46e7df205bdd8ca7c2b84d90d055c8d35cec951bd3005991aa6bf0ae3', '[\"*\"]', '2025-11-17 10:02:32', NULL, '2025-11-17 09:54:20', '2025-11-17 10:02:32'),
(174, 'App\\Models\\User', 4, 'auth_token', '74767d66f74202ac695257b36cf072c27cd262d89c7f42b4bf774b36f187eeb9', '[\"*\"]', '2025-11-17 11:42:26', NULL, '2025-11-17 10:02:50', '2025-11-17 11:42:26'),
(175, 'App\\Models\\User', 1, 'auth_token', '547ee8651cd5c156509369c4e06820e51f53b405b2f01e1ae2e75c5281d02d3a', '[\"*\"]', '2025-11-17 12:08:10', NULL, '2025-11-17 11:42:33', '2025-11-17 12:08:10'),
(176, 'App\\Models\\User', 2, 'auth_token', 'bb294e459705dd1c0bb6d65e7495a63bebe00d865d787b450d68ad2169aa002f', '[\"*\"]', '2025-11-17 12:13:31', NULL, '2025-11-17 12:08:16', '2025-11-17 12:13:31'),
(177, 'App\\Models\\User', 1, 'auth_token', '03d076982149dc43dddec7f0a2e1450d76eecd30cf60e9af5aa11b47c17903a1', '[\"*\"]', '2025-11-18 03:22:06', NULL, '2025-11-17 12:13:39', '2025-11-18 03:22:06'),
(178, 'App\\Models\\User', 1, 'auth_token', '163940f1709b21e5d998a34ca4eaabfb375a7635a520fc97cc2ca898cfb851e9', '[\"*\"]', '2025-11-18 03:22:47', NULL, '2025-11-18 03:22:14', '2025-11-18 03:22:47'),
(179, 'App\\Models\\User', 1, 'auth_token', '8f3b825d7e2831c0b0f3d3c57ac91b86cc45a62484e2272d0a2f8c9672ea77f2', '[\"*\"]', '2025-11-18 03:24:13', NULL, '2025-11-18 03:23:58', '2025-11-18 03:24:13'),
(180, 'App\\Models\\User', 1, 'auth_token', '0eea08036bc7f48a49ff469997571a329525180c0e50c8e8a19ec2dc9bb3c468', '[\"*\"]', '2025-11-18 04:41:35', NULL, '2025-11-18 03:24:20', '2025-11-18 04:41:35'),
(181, 'App\\Models\\User', 4, 'auth_token', 'ca06831d2fd8f443059b9a597b368a836196b507748e44e5b03269122faf73cc', '[\"*\"]', '2025-11-18 04:44:17', NULL, '2025-11-18 04:41:45', '2025-11-18 04:44:17'),
(182, 'App\\Models\\User', 1, 'auth_token', '31e25a3455f64877b5201097e184c03e9c1dc481d1c615b9b72d2ada3d26caf7', '[\"*\"]', '2025-11-18 05:02:50', NULL, '2025-11-18 04:44:24', '2025-11-18 05:02:50'),
(183, 'App\\Models\\User', 4, 'auth_token', '09bec770d34e87522d389de3f9ee1d5cc3fbc85278528bfd872848368fda3dec', '[\"*\"]', '2025-11-18 05:03:55', NULL, '2025-11-18 05:03:00', '2025-11-18 05:03:55'),
(184, 'App\\Models\\User', 1, 'auth_token', '4a52a1031d3ed013c3690d8a1c822896b5044782c42f33161d0f214e1d673520', '[\"*\"]', '2025-11-18 05:19:36', NULL, '2025-11-18 05:04:04', '2025-11-18 05:19:36'),
(185, 'App\\Models\\User', 4, 'auth_token', '2326bd85265f3f9260283ee0eb0d2cd1e5c6d348cb401c2c23f01ca92fb6561c', '[\"*\"]', '2025-11-18 05:31:25', NULL, '2025-11-18 05:19:49', '2025-11-18 05:31:25'),
(186, 'App\\Models\\User', 1, 'auth_token', 'ca1ee0c59f7b6d714a93fc8be9eebf9a71b78fa3aa380736e970103d9fbddebf', '[\"*\"]', '2025-11-18 06:19:23', NULL, '2025-11-18 05:31:33', '2025-11-18 06:19:23'),
(187, 'App\\Models\\User', 2, 'auth_token', '5eb87c6abf0d7b39e2ab05206057b277fe485edc0621a5abde33aa63b8ccc982', '[\"*\"]', '2025-11-18 06:20:44', NULL, '2025-11-18 06:19:38', '2025-11-18 06:20:44'),
(188, 'App\\Models\\User', 1, 'auth_token', '79bcdb27de3d84211d5a37598daebd701ef160559dea4d7781630ff86f645008', '[\"*\"]', '2025-11-18 06:24:33', NULL, '2025-11-18 06:20:57', '2025-11-18 06:24:33'),
(189, 'App\\Models\\User', 2, 'auth_token', '1d5e3b3d63b8ff0d4c197f0654a4aad41a587bdef67d1fdffbbdf710d1fbcab3', '[\"*\"]', '2025-11-18 06:33:06', NULL, '2025-11-18 06:24:40', '2025-11-18 06:33:06'),
(190, 'App\\Models\\User', 1, 'auth_token', '2280df00a05db0139a13abedf98afcbfcec31d19b9baba2851e952bf282db18f', '[\"*\"]', '2025-11-18 06:52:14', NULL, '2025-11-18 06:51:59', '2025-11-18 06:52:14'),
(191, 'App\\Models\\User', 2, 'auth_token', '258eb27f3c7c77a93829a2c16f677290d3294de018c42bd8f31af676bba74e27', '[\"*\"]', '2025-11-18 10:10:55', NULL, '2025-11-18 06:52:23', '2025-11-18 10:10:55'),
(192, 'App\\Models\\User', 1, 'auth_token', '3aa7e0cc015982afe48e6f5e31771848926208b360928f3ebe6d01f2e093d7f3', '[\"*\"]', '2025-11-18 11:02:07', NULL, '2025-11-18 10:11:02', '2025-11-18 11:02:07'),
(193, 'App\\Models\\User', 2, 'auth_token', '6ccc2599015fe738bb597cb5cb93cc1daf1a3dc5388cedb861ab2a439908cf5a', '[\"*\"]', '2025-11-18 11:03:19', NULL, '2025-11-18 11:02:40', '2025-11-18 11:03:19'),
(194, 'App\\Models\\User', 1, 'auth_token', '09602a34fa081eed818fdbf95bc881be2119c397708db12c92e1d1847026418b', '[\"*\"]', '2025-11-18 11:04:53', NULL, '2025-11-18 11:03:26', '2025-11-18 11:04:53'),
(195, 'App\\Models\\User', 2, 'auth_token', 'e9198208dfa8345aa171e0d5e197875c51f605b17eb9e8aab2a1e3776a6ac01e', '[\"*\"]', '2025-11-18 11:30:55', NULL, '2025-11-18 11:05:02', '2025-11-18 11:30:55'),
(196, 'App\\Models\\User', 1, 'auth_token', '7907ae68c9c444315884d9de3d399b609b9844c18ee5e1d27f01c6ed5f321975', '[\"*\"]', '2025-11-18 11:31:52', NULL, '2025-11-18 11:31:03', '2025-11-18 11:31:52'),
(197, 'App\\Models\\User', 2, 'auth_token', '24f4d17d7277be800c0684c61fe68299ebe6dde986fabe661e25308cb1beb971', '[\"*\"]', '2025-11-18 12:38:22', NULL, '2025-11-18 11:38:57', '2025-11-18 12:38:22'),
(198, 'App\\Models\\User', 1, 'auth_token', '62eef8dd688aaffea418f013b57ba740d98dca6dc9b8195e3aed849adb994775', '[\"*\"]', '2025-11-19 03:18:52', NULL, '2025-11-18 13:04:59', '2025-11-19 03:18:52'),
(199, 'App\\Models\\User', 2, 'auth_token', '6d731a9ef649bdbf5a300ecd7ba917a1adb7ef776ff6fff02e57c36a44709df1', '[\"*\"]', '2025-11-19 03:31:59', NULL, '2025-11-19 03:30:05', '2025-11-19 03:31:59'),
(200, 'App\\Models\\User', 1, 'auth_token', '9fd5204beaca9a09babbcdd4e53f4a71e65de331c006f90353af42ce713b29bf', '[\"*\"]', '2025-11-19 07:15:59', NULL, '2025-11-19 03:32:09', '2025-11-19 07:15:59'),
(201, 'App\\Models\\User', 2, 'auth_token', '9db438d0b7478f58e85001280ca731f4a4a708c8ae6cbbd3c655fbddd9a5caa5', '[\"*\"]', '2025-11-19 04:04:39', NULL, '2025-11-19 03:44:36', '2025-11-19 04:04:39'),
(202, 'App\\Models\\User', 1, 'auth_token', '6463771aa2d57aab027aed980c4b6a1b3323a56e671f1b5e17c138d6509992d5', '[\"*\"]', '2025-11-19 04:10:27', NULL, '2025-11-19 04:04:46', '2025-11-19 04:10:27'),
(203, 'App\\Models\\User', 2, 'auth_token', 'adacc552b7a31b78103a41e31ffa894863e9290de9aec37d98951f76513a7107', '[\"*\"]', '2025-11-19 04:10:54', NULL, '2025-11-19 04:10:47', '2025-11-19 04:10:54'),
(204, 'App\\Models\\User', 1, 'auth_token', '2dd29f0b13eb770751b1749d013a3373a2f2603deed3b73ea923d2c443e497d9', '[\"*\"]', '2025-11-19 04:12:13', NULL, '2025-11-19 04:11:03', '2025-11-19 04:12:13'),
(205, 'App\\Models\\User', 2, 'auth_token', '05ad35513cbe58f32efe5dda68e9c68b8f252a01117be421d34d3c3818d62fc8', '[\"*\"]', '2025-11-19 04:19:21', NULL, '2025-11-19 04:12:29', '2025-11-19 04:19:21'),
(206, 'App\\Models\\User', 1, 'auth_token', 'f4274e6af39bde704b08c66e5d88d10691cff28ef07146a219d8c42df57ae77b', '[\"*\"]', '2025-11-19 05:40:29', NULL, '2025-11-19 04:26:28', '2025-11-19 05:40:29'),
(207, 'App\\Models\\User', 2, 'auth_token', 'bf926355a83d0818586b30dc5de7bed0a9b24b0b1289e23f0a932147cfddf0a2', '[\"*\"]', '2025-11-19 05:41:36', NULL, '2025-11-19 05:40:37', '2025-11-19 05:41:36'),
(208, 'App\\Models\\User', 1, 'auth_token', '9ee06a590fed5b2302577152b5d55f93500b5b334220e5d54deec96d8f45b996', '[\"*\"]', '2025-11-19 05:58:37', NULL, '2025-11-19 05:41:45', '2025-11-19 05:58:37'),
(209, 'App\\Models\\User', 2, 'auth_token', '852852abef658ea724a1de7c7bcc0e8303d9c26429649e857c68e9ab0eb65be5', '[\"*\"]', '2025-11-19 06:07:55', NULL, '2025-11-19 05:58:56', '2025-11-19 06:07:55'),
(210, 'App\\Models\\User', 1, 'auth_token', 'd80f39945bd601214e66455addea879113d1da3097b84a15d4883a7e72da8d55', '[\"*\"]', '2025-11-19 06:41:32', NULL, '2025-11-19 06:08:01', '2025-11-19 06:41:32'),
(211, 'App\\Models\\User', 2, 'auth_token', '1969ad2f0f4fe6024444a392b97212396351e5377e9c3e4b2788a06f91214f6d', '[\"*\"]', '2025-11-19 06:50:21', NULL, '2025-11-19 06:41:40', '2025-11-19 06:50:21'),
(212, 'App\\Models\\User', 1, 'auth_token', 'd16b024d1f1624ea196ef6b75f5a9ad6c2b72d6ffeaddec565cdc470f0274131', '[\"*\"]', '2025-11-19 07:25:57', NULL, '2025-11-19 06:50:28', '2025-11-19 07:25:57'),
(213, 'App\\Models\\User', 1, 'auth_token', 'cbf942ab7a76c818da40e79e87f91ae523136f70ce0fb3ec28bcc2611f105d9a', '[\"*\"]', '2025-11-19 08:08:32', NULL, '2025-11-19 07:26:37', '2025-11-19 08:08:32'),
(214, 'App\\Models\\User', 2, 'auth_token', '9f2bfc6c3b45de3547f3b91657cd6e3e4dc86faa25f8e2bd4abe08523fff57ee', '[\"*\"]', '2025-11-19 09:09:57', NULL, '2025-11-19 08:08:40', '2025-11-19 09:09:57'),
(215, 'App\\Models\\User', 1, 'auth_token', 'be4bc92bca4acf5f10c4e5880ab46e75406d382c0eae55e27f9a827a099c5736', '[\"*\"]', '2025-11-19 09:32:28', NULL, '2025-11-19 09:10:04', '2025-11-19 09:32:28'),
(216, 'App\\Models\\User', 2, 'auth_token', '8d53fd1f3a79760e136fb38ce1b791c1df17b3d9f19b638006bb168caaee30c1', '[\"*\"]', '2025-11-19 09:40:28', NULL, '2025-11-19 09:32:35', '2025-11-19 09:40:28'),
(217, 'App\\Models\\User', 1, 'auth_token', 'b90eb84dd59ee21d21eb207f570c348743accc6cb0812b39fca1164b7f341c08', '[\"*\"]', '2025-11-19 09:42:29', NULL, '2025-11-19 09:40:35', '2025-11-19 09:42:29'),
(218, 'App\\Models\\User', 5, 'auth_token', 'a93590f5e817c52bb9dad9022e6fb33aa235f93c310f06798c7cf0ffd9c9a98b', '[\"*\"]', '2025-11-19 09:53:05', NULL, '2025-11-19 09:42:36', '2025-11-19 09:53:05'),
(219, 'App\\Models\\User', 1, 'auth_token', '768a15c915bf99e51a990e671a191109d153491c3cfdbb245066a500b1f822ab', '[\"*\"]', '2025-11-19 09:54:12', NULL, '2025-11-19 09:53:12', '2025-11-19 09:54:12'),
(220, 'App\\Models\\User', 5, 'auth_token', 'cedbcae00e837c82557904f789a85a9b3a1057cee6a90ded5f6deeccc5e6e935', '[\"*\"]', '2025-11-19 10:00:10', NULL, '2025-11-19 09:54:20', '2025-11-19 10:00:10'),
(221, 'App\\Models\\User', 1, 'auth_token', 'ea23ecc569aeff2104402065246aa6d391de8f59fd0820e616db0de72f1745f4', '[\"*\"]', '2025-11-19 10:08:24', NULL, '2025-11-19 10:00:16', '2025-11-19 10:08:24'),
(222, 'App\\Models\\User', 2, 'auth_token', '3195c5dd10d1d470395444a4dfe2cb087471400e202bb10e7b9c00a5e5e436c0', '[\"*\"]', '2025-11-19 10:18:25', NULL, '2025-11-19 10:08:32', '2025-11-19 10:18:25'),
(223, 'App\\Models\\User', 1, 'auth_token', 'e6ea7ee63ac1d31490bd4994ee81559e59c7a80002ef892af0283a3945d462b5', '[\"*\"]', '2025-11-19 10:27:21', NULL, '2025-11-19 10:18:32', '2025-11-19 10:27:21'),
(224, 'App\\Models\\User', 9, 'auth_token', 'f74d5ae713870c8888e987817c5a6ba62366563a333e4f126649200fe2ba12a0', '[\"*\"]', '2025-11-19 10:30:27', NULL, '2025-11-19 10:27:35', '2025-11-19 10:30:27'),
(225, 'App\\Models\\User', 1, 'auth_token', '53ef67fb9fe0c2f5c06ae19b18114a8bff0da0aa63bda1c493797c8a68b94cbf', '[\"*\"]', '2025-11-19 10:35:09', NULL, '2025-11-19 10:30:35', '2025-11-19 10:35:09'),
(226, 'App\\Models\\User', 10, 'auth_token', '6d028654b0e32cc9ebc8dc0c7585e7a388bd66570670204f6407c0d0806e4665', '[\"*\"]', '2025-11-19 10:41:13', NULL, '2025-11-19 10:35:16', '2025-11-19 10:41:13'),
(227, 'App\\Models\\User', 1, 'auth_token', '88fc37af2edfaa20f1053c1c002fa29b9f6389c6296b97b3b261a00248afb21a', '[\"*\"]', '2025-11-19 10:56:06', NULL, '2025-11-19 10:41:19', '2025-11-19 10:56:06'),
(228, 'App\\Models\\User', 1, 'auth_token', 'beecaeed815a3eabc3aef7b4be846720a50a86f97d3ef59c030a8a141e1d8a7c', '[\"*\"]', '2025-11-19 11:07:23', NULL, '2025-11-19 10:59:18', '2025-11-19 11:07:23');

-- --------------------------------------------------------

--
-- Table structure for table `recruitments`
--

CREATE TABLE `recruitments` (
  `id` bigint UNSIGNED NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department_id` bigint UNSIGNED NOT NULL,
  `status` enum('open','closed') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `recruitments`
--

INSERT INTO `recruitments` (`id`, `position`, `department_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Software Engineer', 4, 'open', '2025-11-18 10:33:25', '2025-11-18 10:33:25'),
(2, 'Frontend Developer', 4, 'open', '2025-11-18 10:33:49', '2025-11-18 10:33:49'),
(3, 'Accountant', 2, 'open', '2025-11-18 10:34:12', '2025-11-18 10:34:12'),
(5, 'Backend Developer', 4, 'open', '2025-11-18 10:35:06', '2025-11-18 10:35:06'),
(6, 'Content Writer', 3, 'closed', '2025-11-18 10:37:03', '2025-11-19 04:10:23'),
(7, 'Senior Software Engineer', 4, 'open', '2025-11-19 04:12:01', '2025-11-19 04:12:01');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'Full access to all modules and settings', '2025-11-15 00:35:40', '2025-11-15 00:35:40'),
(2, 'HR Manager', 'Can manage employees, attendance, and roles', '2025-11-15 00:36:26', '2025-11-15 00:36:26'),
(3, 'Employee', 'Can view own profile and attendance records', '2025-11-15 00:36:53', '2025-11-15 00:36:53'),
(4, 'Finance Manager', 'Can manage salaries, payroll, and expenses', '2025-11-15 00:37:28', '2025-11-15 00:37:28'),
(5, 'IT Support', 'Can manage system settings and technical support', '2025-11-15 00:38:09', '2025-11-15 00:38:09');

-- --------------------------------------------------------

--
-- Table structure for table `salary_structures`
--

CREATE TABLE `salary_structures` (
  `id` bigint UNSIGNED NOT NULL,
  `employee_id` bigint UNSIGNED NOT NULL,
  `basic_salary` decimal(10,2) NOT NULL,
  `house_rent` decimal(10,2) NOT NULL DEFAULT '0.00',
  `medical_allowance` decimal(10,2) NOT NULL DEFAULT '0.00',
  `transport_allowance` decimal(10,2) NOT NULL DEFAULT '0.00',
  `other_allowance` decimal(10,2) NOT NULL DEFAULT '0.00',
  `taxes_deduction` decimal(10,2) NOT NULL DEFAULT '0.00',
  `security_deduction` decimal(10,2) NOT NULL DEFAULT '0.00',
  `allowance_amount` decimal(10,2) NOT NULL DEFAULT '0.00',
  `deduction_amount` decimal(10,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `salary_structures`
--

INSERT INTO `salary_structures` (`id`, `employee_id`, `basic_salary`, `house_rent`, `medical_allowance`, `transport_allowance`, `other_allowance`, `taxes_deduction`, `security_deduction`, `allowance_amount`, `deduction_amount`, `created_at`, `updated_at`) VALUES
(1, 11, 20000.00, 1000.00, 100.00, 500.00, 500.00, 0.00, 500.00, 2100.00, 500.00, '2025-11-16 10:01:27', '2025-11-17 04:05:26'),
(2, 13, 25000.00, 1200.00, 100.00, 500.00, 500.00, 0.00, 250.00, 2300.00, 250.00, '2025-11-16 10:01:27', '2025-11-17 04:08:59'),
(3, 9, 18000.00, 1200.00, 150.00, 750.00, 1000.00, 0.00, 300.00, 3100.00, 300.00, '2025-11-16 10:01:27', '2025-11-17 04:10:23'),
(4, 10, 22000.00, 1000.00, 200.00, 500.00, 1000.00, 0.00, 1500.00, 2700.00, 1500.00, '2025-11-16 10:01:27', '2025-11-17 04:08:04'),
(5, 8, 25000.00, 1200.00, 100.00, 750.00, 1000.00, 0.00, 500.00, 3050.00, 500.00, '2025-11-16 11:11:31', '2025-11-17 04:09:38'),
(6, 5, 26000.00, 1000.00, 100.00, 500.00, 1000.00, 0.00, 500.00, 2600.00, 500.00, '2025-11-16 11:36:37', '2025-11-17 04:07:15'),
(7, 6, 25000.00, 1000.00, 100.00, 500.00, 500.00, 0.00, 500.00, 2100.00, 500.00, '2025-11-17 04:06:31', '2025-11-17 04:06:31'),
(8, 4, 24000.00, 1000.00, 200.00, 500.00, 1000.00, 0.00, 250.00, 2700.00, 250.00, '2025-11-18 04:46:05', '2025-11-18 04:47:03'),
(9, 2, 20000.00, 1000.00, 200.00, 500.00, 1000.00, 0.00, 1200.00, 2700.00, 1200.00, '2025-11-18 06:23:28', '2025-11-18 06:24:05');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trainings`
--

CREATE TABLE `trainings` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `trainings`
--

INSERT INTO `trainings` (`id`, `title`, `description`, `start_date`, `end_date`, `created_at`, `updated_at`) VALUES
(1, 'IT Infrastructure & Cloud', 'Cloud computing, infrastructure management, and IT operations.', '2026-01-01', '2026-03-01', '2025-11-19 05:48:46', '2025-11-19 05:48:46'),
(2, 'Corporate Finance & Investments', 'Advanced finance, budgeting, and investment analysis for corporate roles.', '2025-12-01', '2026-01-30', '2025-11-19 05:49:50', '2025-11-19 05:49:50'),
(3, 'Customer Support Excellence', 'Improving customer service, handling complaints, and communication skills.', '2025-11-25', '2026-01-10', '2025-11-19 05:50:39', '2025-11-19 05:56:34'),
(4, 'Digital Marketing & SEO', 'SEO, online advertising, and analytics for marketing teams.', '2026-01-01', '2026-03-30', '2025-11-19 05:51:40', '2025-11-19 05:51:40'),
(5, 'Testing in React & Laravel', 'Unit testing and integration testing for fullstack apps.', '2025-11-20', '2026-02-15', '2025-11-19 05:52:41', '2025-11-19 05:52:41'),
(6, 'React & Laravel Fullstack', 'Connecting React frontend with Laravel backend APIs.', '2026-02-01', '2026-05-15', '2025-11-19 05:53:37', '2025-11-19 05:53:37');

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
  `role_id` bigint UNSIGNED DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Mamun', 'mamun@example.com', NULL, '$2y$12$gtu6DDXiZ7v6xjuRKjslBOpDDGw9.qxvHApr8OUEhdaw8iO0fPKDq', 1, NULL, '2025-11-12 03:56:26', '2025-11-15 00:38:37'),
(2, 'Mamun Test 2', 'mamun2@example.com', NULL, '$2y$12$hWKO2fGbL.6JySMBFG1DvOHl1xHM.ocSEfvR2SNalWDm7s/rZ3etG', 3, NULL, '2025-11-12 05:15:12', '2025-11-16 03:31:27'),
(3, 'Mamun Test 3', 'mamun3@example.com', NULL, '$2y$12$coa.mtWJ6xzQhEE58LGKy.mMuUm3FhW4oE0YTmemlI/Me1/w5XP.K', 3, NULL, '2025-11-12 05:15:38', '2025-11-15 11:13:05'),
(4, 'Mamun Test 4', 'mamun4@example.com', NULL, '$2y$12$WxAjjDqcH2CJs8ZEFxeFNOuPdWElgr/o5eyZdCQKzRO30s9BemPuy', 3, NULL, '2025-11-12 05:15:48', '2025-11-16 03:31:43'),
(5, 'Mamun Test 5', 'mamun5@example.com', NULL, '$2y$12$zpD6qB5Xb24egFj/IKJU5OgEdt/18F43m58ngDDOXUf/.vD9XLmkC', NULL, NULL, '2025-11-12 05:16:01', '2025-11-12 05:16:01'),
(6, 'Mamun Test 6', 'mamun6@example.com', NULL, '$2y$12$xnAdW3LD9zESHEKWmlllVO5atVIyWq22ShTGeG7ivPDlY67.VtywO', 4, NULL, '2025-11-12 05:16:13', '2025-11-15 00:41:32'),
(7, 'Mamun 7', 'mamun7@example.com', NULL, '$2y$12$5snT/RaASA4j05MSZqTn/OaR9QEi1Y0e7jxdjylInJc5ZbV/Pfd5S', NULL, NULL, '2025-11-13 03:56:34', '2025-11-16 03:32:13'),
(8, 'Mamun 8', 'mamun8@example.com', NULL, '$2y$12$GYBReVWTw8MI0ocYHipKg.RjqTYskZ4uwkgOJHR3/6Nc67iHbtLnG', 5, NULL, '2025-11-13 04:10:14', '2025-11-15 11:13:44'),
(9, 'Mamun 9', 'mamun9@example.com', NULL, '$2y$12$06KAX1STPUUiaFPRVFssFepxJZ7ZFOCr0jMm/KVQcY1yEIeZtbuXq', 3, NULL, '2025-11-14 23:13:20', '2025-11-15 11:14:00'),
(10, 'Mamun 10', 'mamun10@example.com', NULL, '$2y$12$/s3gNAV5FSKghy12CgbMROR1UQVjsTI5mB8R5IVfKJdTTSrKi02ce', NULL, NULL, '2025-11-14 23:20:01', '2025-11-16 03:32:38'),
(11, 'Employee 11', 'employee11@example.com', NULL, '$2y$12$tAVetyq40cDh0xpk8SXiQOUfwZ8z0Ka2TRfYa2TxjWYDBsxYyDyku', 3, NULL, '2025-11-16 07:29:32', '2025-11-16 07:33:30'),
(12, 'Employee 12', 'employee12@example.com', NULL, '$2y$12$s4.4LQ4qdiskMymMEVmYseA81IWtqPheiny8kdnqGKED9E7suQR1W', 3, NULL, '2025-11-16 07:30:21', '2025-11-16 07:33:39'),
(13, 'Employee 13', 'employee13@example.com', NULL, '$2y$12$xGRXu/FBJE1dN3eaYCyj4.EEJ8sqPjcbCBpBRCR.ZA5YXKEF7KEMa', 3, NULL, '2025-11-16 07:31:07', '2025-11-16 07:33:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance_records`
--
ALTER TABLE `attendance_records`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attendance_records_employee_id_foreign` (`employee_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `departments_name_unique` (`name`);

--
-- Indexes for table `designations`
--
ALTER TABLE `designations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `designations_title_unique` (`title`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `employees_employee_code_unique` (`employee_code`),
  ADD KEY `employees_user_id_foreign` (`user_id`),
  ADD KEY `employees_department_id_foreign` (`department_id`),
  ADD KEY `employees_designation_id_foreign` (`designation_id`);

--
-- Indexes for table `employee_trainings`
--
ALTER TABLE `employee_trainings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_trainings_employee_id_foreign` (`employee_id`),
  ADD KEY `employee_trainings_training_id_foreign` (`training_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_applications`
--
ALTER TABLE `job_applications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `job_applications_recruitment_id_foreign` (`recruitment_id`),
  ADD KEY `job_applications_user_id_foreign` (`user_id`),
  ADD KEY `job_applications_employee_id_foreign` (`employee_id`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leave_requests`
--
ALTER TABLE `leave_requests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `leave_requests_employee_id_foreign` (`employee_id`),
  ADD KEY `leave_requests_leave_type_id_foreign` (`leave_type_id`),
  ADD KEY `leave_requests_approved_by_foreign` (`approved_by`);

--
-- Indexes for table `leave_types`
--
ALTER TABLE `leave_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payrolls`
--
ALTER TABLE `payrolls`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payrolls_employee_id_foreign` (`employee_id`);

--
-- Indexes for table `performance_evaluations`
--
ALTER TABLE `performance_evaluations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `performance_evaluations_employee_id_foreign` (`employee_id`),
  ADD KEY `performance_evaluations_kpi_id_foreign` (`kpi_id`);

--
-- Indexes for table `performance_kpis`
--
ALTER TABLE `performance_kpis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `recruitments`
--
ALTER TABLE `recruitments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recruitments_department_id_foreign` (`department_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `salary_structures`
--
ALTER TABLE `salary_structures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `salary_structures_employee_id_foreign` (`employee_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `trainings`
--
ALTER TABLE `trainings`
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
-- AUTO_INCREMENT for table `attendance_records`
--
ALTER TABLE `attendance_records`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `designations`
--
ALTER TABLE `designations`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `employee_trainings`
--
ALTER TABLE `employee_trainings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `job_applications`
--
ALTER TABLE `job_applications`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `leave_requests`
--
ALTER TABLE `leave_requests`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `leave_types`
--
ALTER TABLE `leave_types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `payrolls`
--
ALTER TABLE `payrolls`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `performance_evaluations`
--
ALTER TABLE `performance_evaluations`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `performance_kpis`
--
ALTER TABLE `performance_kpis`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=229;

--
-- AUTO_INCREMENT for table `recruitments`
--
ALTER TABLE `recruitments`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `salary_structures`
--
ALTER TABLE `salary_structures`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `trainings`
--
ALTER TABLE `trainings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attendance_records`
--
ALTER TABLE `attendance_records`
  ADD CONSTRAINT `attendance_records_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `employees_designation_id_foreign` FOREIGN KEY (`designation_id`) REFERENCES `designations` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `employees_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `employee_trainings`
--
ALTER TABLE `employee_trainings`
  ADD CONSTRAINT `employee_trainings_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `employee_trainings_training_id_foreign` FOREIGN KEY (`training_id`) REFERENCES `trainings` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `job_applications`
--
ALTER TABLE `job_applications`
  ADD CONSTRAINT `job_applications_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `job_applications_recruitment_id_foreign` FOREIGN KEY (`recruitment_id`) REFERENCES `recruitments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `job_applications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `leave_requests`
--
ALTER TABLE `leave_requests`
  ADD CONSTRAINT `leave_requests_approved_by_foreign` FOREIGN KEY (`approved_by`) REFERENCES `employees` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `leave_requests_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `leave_requests_leave_type_id_foreign` FOREIGN KEY (`leave_type_id`) REFERENCES `leave_types` (`id`) ON DELETE RESTRICT;

--
-- Constraints for table `payrolls`
--
ALTER TABLE `payrolls`
  ADD CONSTRAINT `payrolls_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `performance_evaluations`
--
ALTER TABLE `performance_evaluations`
  ADD CONSTRAINT `performance_evaluations_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `performance_evaluations_kpi_id_foreign` FOREIGN KEY (`kpi_id`) REFERENCES `performance_kpis` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `recruitments`
--
ALTER TABLE `recruitments`
  ADD CONSTRAINT `recruitments_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `salary_structures`
--
ALTER TABLE `salary_structures`
  ADD CONSTRAINT `salary_structures_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
