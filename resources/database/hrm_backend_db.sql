-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 02, 2025 at 11:52 AM
-- Server version: 8.0.44-0ubuntu0.24.04.1
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
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `employee_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
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
('01kbcq4gy08bde56ms42brne02', '01KBCQ4408JBW14MR68EXW1YVF', '2025-12-01', '16:25:35', '18:28:19', 'Present', '2025-12-01 10:25:35', '2025-12-01 12:28:19'),
('01kbefwgwr1sptv4k3pj4g4e8w', '01KBCQ4408JBW14MR68EXW1YVF', '2025-12-02', '08:57:22', '17:25:40', 'Present', '2025-12-02 02:57:22', '2025-12-02 11:25:40'),
('01kbehedt2jr11rdv5z550w8t3', '01kbehbvngec4vrn1jcw1hy23j', '2025-12-02', '09:24:37', '16:34:08', 'Present', '2025-12-02 03:24:37', '2025-12-02 10:34:08'),
('01kbemq3h1byfzewjhravp6zxv', '01kbehjrc43ehpafcmnf4ybq56', '2025-12-02', '10:21:47', '12:19:09', 'Present', '2025-12-02 04:21:47', '2025-12-02 06:19:09'),
('01kbemqg8z2sxzb4jk322pq0wd', '01kbekbaq4jsctgrjxh5gs72ry', '2025-12-02', '10:22:00', '17:11:57', 'Present', '2025-12-02 04:22:00', '2025-12-02 11:11:57'),
('01kbemqxbsk63xdd8eqk00mdbk', '01kbejjmwcgxhmzpc4eaj9q310', '2025-12-02', '10:22:14', '14:40:39', 'Present', '2025-12-02 04:22:14', '2025-12-02 08:40:39'),
('01kbeqhw4t19fmngzp587j8byn', '01kbcxspe5eyz9p47m42mcz547', '2025-12-02', '11:11:22', '17:47:31', 'Present', '2025-12-02 05:11:22', '2025-12-02 11:47:31');

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
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `created_at`, `updated_at`) VALUES
('01kbcxvtrfpd2tz91hn7h03dbx', 'Human Resources', '2025-12-01 12:23:10', '2025-12-01 12:23:10'),
('01kbcxvyds6y4tj9ca065asrw1', 'IT', '2025-12-01 12:23:14', '2025-12-01 12:23:14'),
('01kbcxwvtr884mk30zn4z656sr', 'Finance', '2025-12-01 12:23:44', '2025-12-01 12:23:44'),
('01kbcxwzrh293tazt87dj9y9f2', 'Marketing', '2025-12-01 12:23:48', '2025-12-01 12:23:48');

-- --------------------------------------------------------

--
-- Table structure for table `designations`
--

CREATE TABLE `designations` (
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `designations`
--

INSERT INTO `designations` (`id`, `title`, `created_at`, `updated_at`) VALUES
('01kbcxyk8t84me8kwn1k5a2t5d', 'Software Engineer', '2025-12-01 12:24:41', '2025-12-01 12:24:41'),
('01kbcxyyhcf8jkjyv0dcg6yysn', 'Senior Software Engineer', '2025-12-01 12:24:53', '2025-12-01 12:24:53'),
('01kbcxz8ngrezpaz4q0j000v6n', 'IT Manager', '2025-12-01 12:25:03', '2025-12-01 12:25:03'),
('01kbcxzntrdwqw378fm2s0bt4s', 'HR Manager', '2025-12-01 12:25:16', '2025-12-01 12:25:16'),
('01kbcy002qegcq51we8wsv4rqq', 'HR Executive', '2025-12-01 12:25:27', '2025-12-01 12:25:27'),
('01kbcy0gj20avp5akads4drqe8', 'Accountant', '2025-12-01 12:25:44', '2025-12-01 12:25:44'),
('01kbcy0xn27t09q2t9tj3xe347', 'Finance Officer', '2025-12-01 12:25:57', '2025-12-01 12:25:57'),
('01kbcy1dss71w6z2c3c5zr2h55', 'General Manager', '2025-12-01 12:26:14', '2025-12-01 12:26:14'),
('01kbcy1seyth7j6g269gvk9qr5', 'Operations Manager', '2025-12-01 12:26:26', '2025-12-01 12:26:26'),
('01kbcy23694fcpwrvj8cahh97m', 'Project Manager', '2025-12-01 12:26:36', '2025-12-01 12:26:36'),
('01kbcy2c9wj2z3tk86htbrczw4', 'Department Manager', '2025-12-01 12:26:45', '2025-12-01 12:26:45');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `designation_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
('01KBCQ4408JBW14MR68EXW1YVF', '01KBCQ43THRVWP3M2B9TQKYM4N', '01kbcxvtrfpd2tz91hn7h03dbx', '01kbcy1dss71w6z2c3c5zr2h55', 'SUPER ADMIN', '01710000000', 'Male', '1990-05-05', '2020-05-05', 'Active', 30000.00, '2025-12-01 10:25:22', '2025-12-02 03:18:50'),
('01kbcxspe5eyz9p47m42mcz547', '01kbcx8068zgtymjn5prj304xm', '01kbcxvyds6y4tj9ca065asrw1', '01kbcxyyhcf8jkjyv0dcg6yysn', 'EMP001', '01710000001', 'Male', '1991-11-01', '2025-01-01', 'Active', 25000.00, '2025-12-01 12:22:00', '2025-12-02 03:19:02'),
('01kbehbvngec4vrn1jcw1hy23j', '01kbeh5qc4x972rbpmw7f4nd7z', '01kbcxwzrh293tazt87dj9y9f2', '01kbcy23694fcpwrvj8cahh97m', 'EMP002', '01710000002', 'Female', '1981-04-05', '2021-05-01', 'Active', 30000.00, '2025-12-02 03:23:13', '2025-12-02 03:23:13'),
('01kbehjrc43ehpafcmnf4ybq56', '01kbeh6kgh03rs78bwe81sky2c', '01kbcxwzrh293tazt87dj9y9f2', '01kbcy23694fcpwrvj8cahh97m', 'EMP003', '01710000003', 'Male', '1991-10-10', '2020-01-01', 'Active', 32000.00, '2025-12-02 03:26:59', '2025-12-02 03:26:59'),
('01kbejjmwcgxhmzpc4eaj9q310', '01kbeh773kd69tkt6e2kjr4req', '01kbcxvyds6y4tj9ca065asrw1', '01kbcxyk8t84me8kwn1k5a2t5d', 'EMP004', '01710000004', 'Male', '2001-12-01', '2023-01-01', 'Active', 26000.00, '2025-12-02 03:44:24', '2025-12-02 03:44:24'),
('01kbekbaq4jsctgrjxh5gs72ry', '01kbeh99f12hh40saaqr78eb6s', '01kbcxvyds6y4tj9ca065asrw1', '01kbcxyk8t84me8kwn1k5a2t5d', 'EMP005', '01710000005', 'Male', '2004-05-02', '2025-10-05', 'Probation', 25000.00, '2025-12-02 03:57:53', '2025-12-02 03:58:55');

-- --------------------------------------------------------

--
-- Table structure for table `employee_trainings`
--

CREATE TABLE `employee_trainings` (
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `employee_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `training_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employee_trainings`
--

INSERT INTO `employee_trainings` (`id`, `employee_id`, `training_id`, `status`, `created_at`, `updated_at`) VALUES
('01kbet0d87vsxbbqj585gp29ef', '01kbekbaq4jsctgrjxh5gs72ry', '01kbesv7bv2y52n4mawmq2gw6t', 'in_progress', '2025-12-02 05:54:15', '2025-12-02 05:54:15'),
('01kbet0pvrpna1gttbm0apwf8y', '01kbehbvngec4vrn1jcw1hy23j', '01kbesq0acwhas9wbezqc9g27c', 'in_progress', '2025-12-02 05:54:25', '2025-12-02 05:54:25'),
('01kbfcx1y2eg4qb860ngz9x1t0', '01kbcxspe5eyz9p47m42mcz547', '01kbesze1mtsedvxaazsrvm644', 'in_progress', '2025-12-02 11:24:28', '2025-12-02 11:24:28'),
('01kbfcxmzbtbe95hsxahb9hr3y', '01kbcxspe5eyz9p47m42mcz547', '01kbesrtva1pc493pbn3vjaae9', 'pending', '2025-12-02 11:24:47', '2025-12-02 11:24:47'),
('01kbfcy9wt5g6grkftp8fjeatf', '01kbehjrc43ehpafcmnf4ybq56', '01kbesv7bv2y52n4mawmq2gw6t', 'in_progress', '2025-12-02 11:25:09', '2025-12-02 11:25:09');

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
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `recruitment_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicant_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicant_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicant_phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `resume_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('pending','reviewed','shortlisted','rejected','hired') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `applied_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_applications`
--

INSERT INTO `job_applications` (`id`, `recruitment_id`, `user_id`, `employee_id`, `applicant_name`, `applicant_email`, `applicant_phone`, `resume_link`, `status`, `applied_at`, `created_at`, `updated_at`) VALUES
('01kbewww7he2q2d8tb64befz8z', '01kbewtx822sf0vds8stg2h3kh', NULL, NULL, 'Test User 1', 'test1@example.com', '0000000000', 'https://drive.google.com/file/d/1aBcD12345EfGhIJK/view?usp=sharing', 'pending', '2025-12-02 06:44:45', '2025-12-02 06:44:45', '2025-12-02 06:44:45'),
('01kbewy22s6w54zfk539mzjgsa', '01kbewsectj3xpj2jje9qs6jgj', NULL, NULL, 'Test User 2', 'test2@example.com', '0000000000', 'https://drive.google.com/file/d/1aBcD12345EfGhIJK/view?usp=sharing', 'shortlisted', '2025-12-02 06:45:24', '2025-12-02 06:45:24', '2025-12-02 06:46:53'),
('01kbewzb6keq6gfff5673h0knz', '01kbewsectj3xpj2jje9qs6jgj', '01kbeh99f12hh40saaqr78eb6s', '01kbekbaq4jsctgrjxh5gs72ry', 'Mamun 5', 'mamun5@example.com', '01710000005', 'https://drive.google.com/file/d/1aBcD12345EfGhIJK/view?usp=sharing', 'reviewed', '2025-12-02 06:46:06', '2025-12-02 06:46:06', '2025-12-02 06:46:45'),
('01kbey1y4w9gv6s7bg4dkeb82j', '01kbews0ft7k2vpd228tdj3m2p', NULL, NULL, 'Test User 3', 'test3@example.com', '01700000003', 'https://drive.google.com/file/d/1aBcD12345EfGhIJK/view?usp=sharing', 'pending', '2025-12-02 07:04:59', '2025-12-02 07:04:59', '2025-12-02 07:04:59'),
('01kbfccdn73nknefwr77jvdsk8', '01kbfc8ewmg4rfekc2nzsds1r8', NULL, NULL, 'Test User 3', 'test3@example.com', '01700000003', 'https://drive.google.com/file/d/1aBcD12345EfGhIJK/view?usp=sharing', 'pending', '2025-12-02 11:15:23', '2025-12-02 11:15:23', '2025-12-02 11:15:23'),
('01kbfce6p5bmtk4443n2km8km4', '01kbfc8ewmg4rfekc2nzsds1r8', '01kbcx8068zgtymjn5prj304xm', '01kbcxspe5eyz9p47m42mcz547', 'Mamun', 'mamun@example.com', '01710000001', 'https://drive.google.com/file/d/1aBcD12345EfGhIJK/view?usp=sharing', 'pending', '2025-12-02 11:16:21', '2025-12-02 11:16:21', '2025-12-02 11:16:21');

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
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `employee_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `leave_type_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `reason` text COLLATE utf8mb4_unicode_ci,
  `status` enum('Pending','Approved','Rejected') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Pending',
  `approved_by` varchar(26) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `leave_requests`
--

INSERT INTO `leave_requests` (`id`, `employee_id`, `leave_type_id`, `from_date`, `to_date`, `reason`, `status`, `approved_by`, `created_at`, `updated_at`) VALUES
('01kbetncfk3yhxrzk9wayx544n', '01kbekbaq4jsctgrjxh5gs72ry', '01kbet3yqfsaytpf05cp201q9j', '2025-12-10', '2025-12-13', 'Sick Leave', 'Approved', '01KBCQ43THRVWP3M2B9TQKYM4N', '2025-12-02 06:05:42', '2025-12-02 06:15:02'),
('01kbetpvshcbsm45sxckphbns6', '01kbehbvngec4vrn1jcw1hy23j', '01kbet39bk7dkkr195xjhsz1nq', '2025-12-15', '2025-12-20', 'Annual Leave', 'Pending', NULL, '2025-12-02 06:06:31', '2025-12-02 06:06:31'),
('01kbevdvr2pg79fmx8sgqmnmnv', '01kbehjrc43ehpafcmnf4ybq56', '01kbet590g1kr44kx25zg10ysv', '2025-12-21', '2025-12-22', 'Causal Leave', 'Pending', NULL, '2025-12-02 06:19:04', '2025-12-02 06:19:04'),
('01kbfcgnw9h9ag2r7f59nnpgee', '01kbcxspe5eyz9p47m42mcz547', '01kbet8ewfj4x0gmnj9myr8dhw', '2025-12-15', '2025-12-31', 'Unpaid Leave', 'Approved', '01KBCQ43THRVWP3M2B9TQKYM4N', '2025-12-02 11:17:42', '2025-12-02 11:24:06');

-- --------------------------------------------------------

--
-- Table structure for table `leave_types`
--

CREATE TABLE `leave_types` (
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
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
('01kbet39bk7dkkr195xjhsz1nq', 'Annual Leave', 'Paid leave for vacation or personal time', 20, '2025-12-02 05:55:49', '2025-12-02 05:55:49'),
('01kbet3yqfsaytpf05cp201q9j', 'Sick Leave', 'Leave for illness or medical reasons', 10, '2025-12-02 05:56:11', '2025-12-02 05:56:11'),
('01kbet590g1kr44kx25zg10ysv', 'Casual Leave', 'Short-term leave for urgent personal matters', 7, '2025-12-02 05:56:54', '2025-12-02 05:57:48'),
('01kbet8ewfj4x0gmnj9myr8dhw', 'Unpaid Leave', 'Leave without pay', 0, '2025-12-02 05:58:39', '2025-12-02 05:58:39');

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
(4, '2025_11_12_033651_create_roles_table', 1),
(5, '2025_11_12_034204_add_role_id_to_users_table', 1),
(6, '2025_11_12_035211_create_departments_table', 1),
(7, '2025_11_12_036217_create_designations_table', 1),
(8, '2025_11_12_084839_create_employees_table', 1),
(9, '2025_11_13_054416_create_attendance_records_table', 1),
(10, '2025_11_16_100400_create_leave_types_table', 1),
(11, '2025_11_16_141643_create_salary_structures_table', 1),
(12, '2025_11_16_141708_create_payrolls_table', 1),
(13, '2025_11_17_163028_create_trainings_table', 1),
(14, '2025_11_17_163041_create_employee_trainings_table', 1),
(15, '2025_11_18_130734_create_recruitments_table', 1),
(16, '2025_11_18_151410_create_job_applications_table', 1),
(17, '2025_11_27_163955_create_personal_access_tokens_table', 1),
(18, '2025_11_27_172256_create_performance_kpis_table', 1),
(19, '2025_11_27_172738_create_performance_evaluations_table', 1),
(20, '2025_12_01_124414_create_leave_requests_table', 1);

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
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `employee_id` varchar(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `month_year` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gross_salary` decimal(15,2) UNSIGNED NOT NULL DEFAULT '0.00',
  `net_salary` decimal(15,2) UNSIGNED NOT NULL DEFAULT '0.00',
  `generated_at` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payrolls`
--

INSERT INTO `payrolls` (`id`, `employee_id`, `month_year`, `gross_salary`, `net_salary`, `generated_at`, `created_at`, `updated_at`) VALUES
('01kbevyj05y1ry5njdg6yzjhq8', '01kbekbaq4jsctgrjxh5gs72ry', '2025-11', 29000.00, 28800.00, '2025-12-02', '2025-12-02 06:28:11', '2025-12-02 06:28:11'),
('01kbevz39x560a6rszt9cvpm00', '01kbehbvngec4vrn1jcw1hy23j', '2025-12', 29000.00, 28800.00, '2025-12-02', '2025-12-02 06:28:29', '2025-12-02 06:28:29'),
('01kbevze6xxvn56v1vc19x3mzm', '01kbejjmwcgxhmzpc4eaj9q310', '2025-11', 28000.00, 27700.00, '2025-12-02', '2025-12-02 06:28:40', '2025-12-02 06:28:40'),
('01kbevzxpezbv44gb4jnrnx9bn', '01kbehbvngec4vrn1jcw1hy23j', '2025-11', 29000.00, 28800.00, '2025-12-02', '2025-12-02 06:28:56', '2025-12-02 06:28:56'),
('01kbfcqtk2avtt3q0kkkgytpb5', '01kbcxspe5eyz9p47m42mcz547', '2025-11', 28500.00, 28250.00, '2025-12-02', '2025-12-02 11:21:37', '2025-12-02 11:21:37'),
('01kbfcr2ctmexzzcbc3kgt8p0t', '01kbehjrc43ehpafcmnf4ybq56', '2025-11', 36000.00, 35500.00, '2025-12-02', '2025-12-02 11:21:45', '2025-12-02 11:21:45'),
('01kbfe83akwwzz86p1b366bty9', '01kbcxspe5eyz9p47m42mcz547', '2025-10', 28500.00, 28250.00, '2025-12-02', '2025-12-02 11:47:58', '2025-12-02 11:47:58');

-- --------------------------------------------------------

--
-- Table structure for table `performance_evaluations`
--

CREATE TABLE `performance_evaluations` (
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `employee_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kpi_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
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
('01kbewkbxwm9k52a6qd36ssn3f', '01kbekbaq4jsctgrjxh5gs72ry', '01kpik1x1a2b3c4d5e6f7g8h', 9, 'Good', '2025-12-02', 'Admin', '2025-12-02 06:39:33', '2025-12-02 06:39:33'),
('01kbewkwwxynty9yec9ec5a0ar', '01kbejjmwcgxhmzpc4eaj9q310', '01kpik3x1a2b3c4d5e6f7g8h', 9, 'Awesome', '2025-12-02', 'Admin', '2025-12-02 06:39:51', '2025-12-02 06:39:51'),
('01kbewmprzb23v0j3vae8hm4hk', '01kbekbaq4jsctgrjxh5gs72ry', '01kpik4x1a2b3c4d5e6f7g8h', 9, 'Perfect', '2025-12-02', 'Admin', '2025-12-02 06:40:17', '2025-12-02 06:40:17'),
('01kbewne39s2cg8q837qaekqxn', '01kbehbvngec4vrn1jcw1hy23j', '01kpik7x1a2b3c4d5e6f7g8h', 9, 'Awesome. Good Work.', '2025-12-02', 'Admin', '2025-12-02 06:40:41', '2025-12-02 06:41:03'),
('01kbfcsqat21yk3kk4w57mr54x', '01kbcxspe5eyz9p47m42mcz547', '01kpik1x1a2b3c4d5e6f7g8h', 9, 'Good', '2025-12-02', 'Admin', '2025-12-02 11:22:39', '2025-12-02 11:22:39'),
('01kbfct9h9zkvr68s65wqrgj9z', '01kbcxspe5eyz9p47m42mcz547', '01kpik4x1a2b3c4d5e6f7g8h', 7, 'Nice', '2025-12-02', 'Admin', '2025-12-02 11:22:57', '2025-12-02 11:22:57'),
('01kbfctzxfex9n4cb2e8ygqgeb', '01kbehjrc43ehpafcmnf4ybq56', '01kpik4x1a2b3c4d5e6f7g8h', 9, 'Awesome', '2025-12-02', 'Admin', '2025-12-02 11:23:20', '2025-12-02 11:23:20'),
('01kbfcvzd0pkt85x1tmft76wg8', '01kbcxspe5eyz9p47m42mcz547', '01kpik7x1a2b3c4d5e6f7g8h', 10, 'Awesome work!', '2025-12-02', 'Admin', '2025-12-02 11:23:53', '2025-12-02 11:23:53');

-- --------------------------------------------------------

--
-- Table structure for table `performance_kpis`
--

CREATE TABLE `performance_kpis` (
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `performance_kpis`
--

INSERT INTO `performance_kpis` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
('01kpik1x1a2b3c4d5e6f7g8h', 'Task Completion', 'Measures the percentage of tasks completed on time by the employee', '2025-12-02 06:38:32', '2025-12-02 06:38:32'),
('01kpik2x1a2b3c4d5e6f7g8h', 'Quality of Work', 'Evaluates the accuracy, completeness, and quality of the work produced', '2025-12-02 06:38:32', '2025-12-02 06:38:32'),
('01kpik3x1a2b3c4d5e6f7g8h', 'Attendance & Punctuality', 'Tracks employee attendance, punctuality, and adherence to work schedule', '2025-12-02 06:38:32', '2025-12-02 06:38:32'),
('01kpik4x1a2b3c4d5e6f7g8h', 'Team Collaboration', 'Measures how effectively the employee collaborates with team members and departments', '2025-12-02 06:38:32', '2025-12-02 06:38:32'),
('01kpik5x1a2b3c4d5e6f7g8h', 'Initiative & Innovation', 'Assesses how proactive the employee is in taking initiative and suggesting improvements', '2025-12-02 06:38:32', '2025-12-02 06:38:32'),
('01kpik6x1a2b3c4d5e6f7g8h', 'Customer Satisfaction', 'Evaluates employee’s effectiveness in responding to customer needs and improving satisfaction', '2025-12-02 06:38:32', '2025-12-02 06:38:32'),
('01kpik7x1a2b3c4d5e6f7g8h', 'Learning & Development', 'Tracks the employee’s efforts in improving skills and completing training programs', '2025-12-02 06:38:32', '2025-12-02 06:38:32');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
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
(1, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', 'd393c0ab731c90b7f8e9971cfb2f656f9bacbc40f54ff834161057ecab1aefce', '[\"*\"]', '2025-12-01 10:37:10', NULL, '2025-12-01 10:25:35', '2025-12-01 10:37:10'),
(2, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '696e19985cfd34ea6c5fc592e684bf69a5070b577f5432d2be51134cf5bcf532', '[\"*\"]', '2025-12-01 10:40:46', NULL, '2025-12-01 10:37:55', '2025-12-01 10:40:46'),
(3, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '746a5ed374a4367820fca436e1ea0bc84ad4e8096d6eb9e341ae648ed41a2185', '[\"*\"]', '2025-12-01 10:42:54', NULL, '2025-12-01 10:40:59', '2025-12-01 10:42:54'),
(4, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '204ac22c2abb24fc26c1bdc7a9a1278585b8e97539d91d14aee3d5a573f03f21', '[\"*\"]', '2025-12-01 10:49:07', NULL, '2025-12-01 10:43:18', '2025-12-01 10:49:07'),
(5, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '0b3d2e269f8d984ea1b534db062e3772fa562786a3d77f8156aee7f85dfdf3a1', '[\"*\"]', '2025-12-01 10:52:39', NULL, '2025-12-01 10:49:39', '2025-12-01 10:52:39'),
(6, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', 'e894e1c429a09d16a1f272a580e21061205ea7f4f6a09f61b77efdc5da49d719', '[\"*\"]', '2025-12-01 10:58:27', NULL, '2025-12-01 10:52:48', '2025-12-01 10:58:27'),
(7, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '0f13695cdbd969d54c620e02d3cfa05822ab105ea2c39130590488620edc82a6', '[\"*\"]', '2025-12-01 10:59:34', NULL, '2025-12-01 10:58:34', '2025-12-01 10:59:34'),
(8, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '41e21cee2fec4337d062b10d4c7470cbc409e7bb4d376ec61989e066631b80be', '[\"*\"]', '2025-12-01 11:11:56', NULL, '2025-12-01 10:59:45', '2025-12-01 11:11:56'),
(9, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', 'b04f6fdd04fe1a2ff8915a55da7e645e1bb105f16d49e1f785fc685676f5c2ec', '[\"*\"]', '2025-12-01 11:43:22', NULL, '2025-12-01 11:12:04', '2025-12-01 11:43:22'),
(10, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '6a6c88a6359fe721a68ae54bddf35a2f686ac9644dc7515f879f640b545e9d08', '[\"*\"]', '2025-12-01 12:11:36', NULL, '2025-12-01 11:43:31', '2025-12-01 12:11:36'),
(11, 'App\\Models\\User', '01kbcx8068zgtymjn5prj304xm', 'auth_token', '66fec1aa5e111d76c8a3148fd786321f52a69cc4ee4e2468cbed2da8c187edc2', '[\"*\"]', '2025-12-01 12:12:47', NULL, '2025-12-01 12:12:29', '2025-12-01 12:12:47'),
(12, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', 'eb278ed9dc506785f62054977a36bd538b11fd5f743d291d9d3327a72fe57202', '[\"*\"]', '2025-12-01 12:19:18', NULL, '2025-12-01 12:13:02', '2025-12-01 12:19:18'),
(13, 'App\\Models\\User', '01kbcx8068zgtymjn5prj304xm', 'auth_token', 'a9f72824a0a558f00c0cd2f93f73258f02a25200e141e9adcd575d7acd11a0ce', '[\"*\"]', '2025-12-01 12:20:21', NULL, '2025-12-01 12:19:25', '2025-12-01 12:20:21'),
(14, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '3e4b1d74b60ba031d67e3eaab8290e5bf9dc9356a564773fd3d361e7f4fc1662', '[\"*\"]', '2025-12-01 12:28:19', NULL, '2025-12-01 12:20:38', '2025-12-01 12:28:19'),
(15, 'App\\Models\\User', '01kbcx8068zgtymjn5prj304xm', 'auth_token', '73ef2d082b45360c8190e785f057e588e89cd5a29a333a75466243bd82476b72', '[\"*\"]', '2025-12-02 02:57:13', NULL, '2025-12-01 12:28:25', '2025-12-02 02:57:13'),
(16, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '166cf8cf4015a5228eda0922f59440329d3925947101604a33b4c039a8b74540', '[\"*\"]', '2025-12-02 03:19:27', NULL, '2025-12-02 02:57:22', '2025-12-02 03:19:27'),
(17, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', 'f3d85d82278729fb964fe7e18a310c5292ea81ebf14e03d93c5755b9e7565365', '[\"*\"]', '2025-12-02 03:24:31', NULL, '2025-12-02 03:21:59', '2025-12-02 03:24:31'),
(18, 'App\\Models\\User', '01kbeh5qc4x972rbpmw7f4nd7z', 'auth_token', '2a64a88488dfe2324ca64b1c2465253288896a3a257d0d1b24695a73006cc73e', '[\"*\"]', '2025-12-02 03:24:45', NULL, '2025-12-02 03:24:37', '2025-12-02 03:24:45'),
(19, 'App\\Models\\User', '01kbeh6kgh03rs78bwe81sky2c', 'auth_token', 'c5b2619423ecb54a96b9c653343289005869ef106b2104ceca59d88b0d0c9580', '[\"*\"]', '2025-12-02 03:24:59', NULL, '2025-12-02 03:24:54', '2025-12-02 03:24:59'),
(20, 'App\\Models\\User', '01kbeh99f12hh40saaqr78eb6s', 'auth_token', 'c323e5184f35e029e6b214acd87f88ba65e8cfe550fa6038688335059c7432cf', '[\"*\"]', '2025-12-02 03:25:09', NULL, '2025-12-02 03:25:06', '2025-12-02 03:25:09'),
(21, 'App\\Models\\User', '01kbeh773kd69tkt6e2kjr4req', 'auth_token', 'bddce8d6e6f20fe2f49d099a95102ce5cee62f2d1a33b0d8f543220106f110fd', '[\"*\"]', '2025-12-02 03:25:51', NULL, '2025-12-02 03:25:27', '2025-12-02 03:25:51'),
(22, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '30dce2342601e19f222b44d1116a69524a5c4deb45df215521a0408ea8b32aa6', '[\"*\"]', '2025-12-02 03:47:22', NULL, '2025-12-02 03:26:01', '2025-12-02 03:47:22'),
(23, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', 'b14e526bd2051a8a294ed71934755d94625e8bcdc3630d72ff845e7701274be4', '[\"*\"]', '2025-12-02 04:21:24', NULL, '2025-12-02 03:47:47', '2025-12-02 04:21:24'),
(24, 'App\\Models\\User', '01kbeh5qc4x972rbpmw7f4nd7z', 'auth_token', 'ecfaa1f906c2b58260d2c45c38d7a9cdbd6cf45e01774c804bd65f524544ee00', '[\"*\"]', '2025-12-02 04:21:37', NULL, '2025-12-02 04:21:31', '2025-12-02 04:21:37'),
(25, 'App\\Models\\User', '01kbeh6kgh03rs78bwe81sky2c', 'auth_token', '2245bc600b2bc0ebfd0be0a231bb71328c32e10226b92433d7fe6d5f3da74692', '[\"*\"]', '2025-12-02 04:21:53', NULL, '2025-12-02 04:21:47', '2025-12-02 04:21:53'),
(26, 'App\\Models\\User', '01kbeh99f12hh40saaqr78eb6s', 'auth_token', '262ce9b8be2cd5531b1fcb389458776a92a5bd9020a72229f7f217c1c4dd5fe8', '[\"*\"]', '2025-12-02 04:22:02', NULL, '2025-12-02 04:22:00', '2025-12-02 04:22:02'),
(27, 'App\\Models\\User', '01kbeh773kd69tkt6e2kjr4req', 'auth_token', '8647fc5c0ff19ff66802183d9f5d1ff3cccfbb421469a2a6e5c102a3d94d2fab', '[\"*\"]', '2025-12-02 04:22:46', NULL, '2025-12-02 04:22:14', '2025-12-02 04:22:46'),
(28, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '4a54c2eff6696e30fc7eac9466162dd57b5865ebf78e7bd99dbd1e23caf8af92', '[\"*\"]', '2025-12-02 04:27:06', NULL, '2025-12-02 04:22:59', '2025-12-02 04:27:06'),
(29, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', 'd5d498dd91c7ec7ba26210762b2c595fa3d2bcaac896f78f1e6e8c9fb3112957', '[\"*\"]', '2025-12-02 04:53:54', NULL, '2025-12-02 04:27:18', '2025-12-02 04:53:54'),
(30, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '4f7f5e9ee94c0756fb6aa189684c95c61c9cd6266c6188cd7afa371c88925562', '[\"*\"]', '2025-12-02 05:11:13', NULL, '2025-12-02 04:54:06', '2025-12-02 05:11:13'),
(31, 'App\\Models\\User', '01kbcx8068zgtymjn5prj304xm', 'auth_token', 'fd24d070551925435f790fa8c0b51ccd7d245864911908883d2ece0cc4ad2b58', '[\"*\"]', '2025-12-02 05:11:38', NULL, '2025-12-02 05:11:22', '2025-12-02 05:11:38'),
(32, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '1a9d69b61a706ef51cfc73ca8b91d8c80d4ab5ff5dc320fd61c9b56c03e90122', '[\"*\"]', '2025-12-02 05:12:48', NULL, '2025-12-02 05:11:45', '2025-12-02 05:12:48'),
(33, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '92d5dbdde333f6ad07304dc107ee0b272dc683f4358ffa0a34bbb9b61e1075b1', '[\"*\"]', '2025-12-02 05:14:16', NULL, '2025-12-02 05:13:20', '2025-12-02 05:14:16'),
(34, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', 'a7072ccf32c0634b038357102b8d4a94ad65a5050f9ac4589e9c7de15674b48a', '[\"*\"]', '2025-12-02 05:16:35', NULL, '2025-12-02 05:14:28', '2025-12-02 05:16:35'),
(35, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '9799504ed58255a832a6c176eb4524ac6c39c288cfc2873fe0f83326d11e06f5', '[\"*\"]', '2025-12-02 05:42:41', NULL, '2025-12-02 05:23:11', '2025-12-02 05:42:41'),
(36, 'App\\Models\\User', '01kbeh99f12hh40saaqr78eb6s', 'auth_token', '1f491f4ce1187901de641e7623ccb09d36201a4feb6612de4824194313f27759', '[\"*\"]', '2025-12-02 05:44:32', NULL, '2025-12-02 05:42:48', '2025-12-02 05:44:32'),
(37, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '77b4d54951845c26affe3abf32a35784b377f5c8634d5fc75690ac6f875ef85f', '[\"*\"]', '2025-12-02 05:58:51', NULL, '2025-12-02 05:44:40', '2025-12-02 05:58:51'),
(38, 'App\\Models\\User', '01kbeh99f12hh40saaqr78eb6s', 'auth_token', '8d79b0112ddb6e3d3c9bdee8d14d2b697390cdd0126bb40879ecfcc8d0e01e7f', '[\"*\"]', '2025-12-02 06:05:50', NULL, '2025-12-02 05:58:57', '2025-12-02 06:05:50'),
(39, 'App\\Models\\User', '01kbeh5qc4x972rbpmw7f4nd7z', 'auth_token', '5d9ed8f22f9713ce87354b15b24027e08874f12ffe0d4fa3b276bc23b1b05038', '[\"*\"]', '2025-12-02 06:06:35', NULL, '2025-12-02 06:05:58', '2025-12-02 06:06:35'),
(40, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', 'c2013d861dc6796dee97bcd75b1cc5d742ef917876542d43eb7ec96533e896ae', '[\"*\"]', '2025-12-02 06:15:06', NULL, '2025-12-02 06:06:43', '2025-12-02 06:15:06'),
(41, 'App\\Models\\User', '01kbeh99f12hh40saaqr78eb6s', 'auth_token', '4b4886453e3ddfaa88b8c852d7a3a311c3ffaf00aec344da37a2cc553d60ea40', '[\"*\"]', '2025-12-02 06:17:32', NULL, '2025-12-02 06:15:13', '2025-12-02 06:17:32'),
(42, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', 'fe361a1d1229b15862ef24142fedc803e30c0169e2f1997678687e6548658bd9', '[\"*\"]', '2025-12-02 06:17:59', NULL, '2025-12-02 06:17:39', '2025-12-02 06:17:59'),
(43, 'App\\Models\\User', '01kbeh6kgh03rs78bwe81sky2c', 'auth_token', '33257411578652e3870afb5be5c492c9b65e004a234e438079e3414f38842669', '[\"*\"]', '2025-12-02 06:19:09', NULL, '2025-12-02 06:18:13', '2025-12-02 06:19:09'),
(44, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '4bf7e01fc62302adffd7f424a46ebb8d3199ceb63d2cdf6a73c905f896618c2d', '[\"*\"]', '2025-12-02 06:43:55', NULL, '2025-12-02 06:19:15', '2025-12-02 06:43:55'),
(45, 'App\\Models\\User', '01kbeh99f12hh40saaqr78eb6s', 'auth_token', '3e757df452046a85cb62477b25e8e8004e60c2a4bab2346791c07669b1758598', '[\"*\"]', '2025-12-02 06:46:15', NULL, '2025-12-02 06:45:34', '2025-12-02 06:46:15'),
(46, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', 'e4b3c3c1473ee15407798d40d275bf3ea49a4b25bb656aca38bc33f3567d46c7', '[\"*\"]', '2025-12-02 06:53:53', NULL, '2025-12-02 06:46:24', '2025-12-02 06:53:53'),
(47, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '8bb378d64ff89004f68f2bfacb732527137a09d425e824b95b6e3c1627112acf', '[\"*\"]', '2025-12-02 07:06:17', NULL, '2025-12-02 07:05:11', '2025-12-02 07:06:17'),
(48, 'App\\Models\\User', '01kbeh99f12hh40saaqr78eb6s', 'auth_token', '96b0a6f84936d67052257cd75b56a5ac334d35539bfce35fa5803d56ac2df472', '[\"*\"]', '2025-12-02 07:23:28', NULL, '2025-12-02 07:06:25', '2025-12-02 07:23:28'),
(49, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '9610909a87c9399b346f4653b29345f9faefea94f7806eed5280edbfa1a1d9fd', '[\"*\"]', '2025-12-02 07:32:07', NULL, '2025-12-02 07:23:35', '2025-12-02 07:32:07'),
(50, 'App\\Models\\User', '01kbcx8068zgtymjn5prj304xm', 'auth_token', '2183268f41707b5ff95102ba193b7f515dba911b5be2c4beb02c0e1635b2efb3', '[\"*\"]', '2025-12-02 08:35:31', NULL, '2025-12-02 08:33:16', '2025-12-02 08:35:31'),
(51, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '241f37b3c7d87cca9e80ad4cdc188305a25ed00d8a543f6e1c14bace4597d658', '[\"*\"]', '2025-12-02 08:36:16', NULL, '2025-12-02 08:35:40', '2025-12-02 08:36:16'),
(52, 'App\\Models\\User', '01kbeh773kd69tkt6e2kjr4req', 'auth_token', 'd32a47abd545d563ff9950c91e59aed0ea81be473170aeff47a7f33a7204c02f', '[\"*\"]', '2025-12-02 08:40:39', NULL, '2025-12-02 08:36:25', '2025-12-02 08:40:39'),
(53, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', 'f5fc1651586160cd2c3abfa231eaa204577d0853d680bdf47b4c2c4036a72546', '[\"*\"]', '2025-12-02 08:42:28', NULL, '2025-12-02 08:40:46', '2025-12-02 08:42:28'),
(54, 'App\\Models\\User', '01kbeh5qc4x972rbpmw7f4nd7z', 'auth_token', 'bd200272d8718adfe1f346e029dc84c161910ce475cb1f9eff35ec78320612f1', '[\"*\"]', '2025-12-02 10:34:08', NULL, '2025-12-02 08:42:36', '2025-12-02 10:34:08'),
(55, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '81d3fbbb1adf7d2f3a8ae4c8a05d51ccc8472601b90cb4c575b5a08fd2de7fb2', '[\"*\"]', '2025-12-02 10:36:02', NULL, '2025-12-02 10:34:17', '2025-12-02 10:36:02'),
(56, 'App\\Models\\User', '01kbeh99f12hh40saaqr78eb6s', 'auth_token', '9f277f84cc87fecc320f8d92acf055f47b294cc0b7f58fb9ef1e2c54b8644b24', '[\"*\"]', '2025-12-02 11:05:06', NULL, '2025-12-02 10:36:10', '2025-12-02 11:05:06'),
(57, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', 'f3773b0451135de4bc8e1fb17a546ee6e20cc9a31813e05e5966b726cffc65e5', '[\"*\"]', '2025-12-02 11:06:54', NULL, '2025-12-02 11:05:15', '2025-12-02 11:06:54'),
(58, 'App\\Models\\User', '01kbeh99f12hh40saaqr78eb6s', 'auth_token', 'a5b65508834563c8e3175267b9af7c89f309210cb08045fe0cfab9010838c63b', '[\"*\"]', '2025-12-02 11:11:57', NULL, '2025-12-02 11:07:03', '2025-12-02 11:11:57'),
(59, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '7fdba1ee346be012fd3a11866132d427e36e8e3fd91487de807b02516628f23a', '[\"*\"]', '2025-12-02 11:14:30', NULL, '2025-12-02 11:12:09', '2025-12-02 11:14:30'),
(60, 'App\\Models\\User', '01kbcx8068zgtymjn5prj304xm', 'auth_token', 'ebc565c31c5fcd451275771aaf09d7f6f51cd6eec44ea615d718e2260efce04e', '[\"*\"]', '2025-12-02 11:17:56', NULL, '2025-12-02 11:15:44', '2025-12-02 11:17:56'),
(61, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', '6e307b332f46aba17f70a2d5fc086ffed941596592cfb7a6244ea4fbf26bf2d4', '[\"*\"]', '2025-12-02 11:25:40', NULL, '2025-12-02 11:18:03', '2025-12-02 11:25:40'),
(62, 'App\\Models\\User', '01kbcx8068zgtymjn5prj304xm', 'auth_token', 'a2065c8ffb0a0381ef8cdd62e402258728d777b6438f90f760ba52330253b1b3', '[\"*\"]', '2025-12-02 11:47:31', NULL, '2025-12-02 11:25:48', '2025-12-02 11:47:31'),
(63, 'App\\Models\\User', '01KBCQ43THRVWP3M2B9TQKYM4N', 'auth_token', 'eb4f75453713f7fc996938cba99abb559d26a62c28219a20237c2cd9dc643003', '[\"*\"]', '2025-12-02 11:49:33', NULL, '2025-12-02 11:47:38', '2025-12-02 11:49:33');

-- --------------------------------------------------------

--
-- Table structure for table `recruitments`
--

CREATE TABLE `recruitments` (
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('open','closed') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `recruitments`
--

INSERT INTO `recruitments` (`id`, `position`, `department_id`, `status`, `created_at`, `updated_at`) VALUES
('01kbews0ft7k2vpd228tdj3m2p', 'Frontend Developer', '01kbcxvyds6y4tj9ca065asrw1', 'open', '2025-12-02 06:42:38', '2025-12-02 06:42:38'),
('01kbewsectj3xpj2jje9qs6jgj', 'Senior Software Engineer', '01kbcxvyds6y4tj9ca065asrw1', 'open', '2025-12-02 06:42:52', '2025-12-02 06:42:52'),
('01kbewst7x1xgvrazsa2d67ehv', 'Marketing Executive', '01kbcxwzrh293tazt87dj9y9f2', 'open', '2025-12-02 06:43:05', '2025-12-02 06:43:18'),
('01kbewtx822sf0vds8stg2h3kh', 'Content Writer', '01kbcxvyds6y4tj9ca065asrw1', 'closed', '2025-12-02 06:43:40', '2025-12-02 11:13:34'),
('01kbfc8ewmg4rfekc2nzsds1r8', 'Software Engineer', '01kbcxvyds6y4tj9ca065asrw1', 'open', '2025-12-02 11:13:13', '2025-12-02 11:13:13');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` varchar(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
('01KBCQ43T13P4RK25R5MVJ0ATY', 'Admin', 'Administrator with full access', '2025-12-01 10:25:22', '2025-12-01 10:25:22'),
('01kbcsx4t9q7dm8jybkk1nm3m9', 'Manager', 'Manages teams and departments', '2025-12-01 11:13:59', '2025-12-01 11:13:59'),
('01kbcsxvy5rdebda3pn71bpp8j', 'Employee', 'Regular employee', '2025-12-01 11:14:23', '2025-12-01 11:14:23');

-- --------------------------------------------------------

--
-- Table structure for table `salary_structures`
--

CREATE TABLE `salary_structures` (
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `employee_id` varchar(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `basic_salary` decimal(15,2) NOT NULL DEFAULT '0.00',
  `house_rent` decimal(15,2) NOT NULL DEFAULT '0.00',
  `medical_allowance` decimal(15,2) NOT NULL DEFAULT '0.00',
  `transport_allowance` decimal(15,2) NOT NULL DEFAULT '0.00',
  `other_allowance` decimal(15,2) NOT NULL DEFAULT '0.00',
  `taxes_deduction` decimal(15,2) NOT NULL DEFAULT '0.00',
  `security_deduction` decimal(15,2) NOT NULL DEFAULT '0.00',
  `allowance_amount` decimal(15,2) NOT NULL DEFAULT '0.00',
  `deduction_amount` decimal(15,2) NOT NULL DEFAULT '0.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `salary_structures`
--

INSERT INTO `salary_structures` (`id`, `employee_id`, `basic_salary`, `house_rent`, `medical_allowance`, `transport_allowance`, `other_allowance`, `taxes_deduction`, `security_deduction`, `allowance_amount`, `deduction_amount`, `created_at`, `updated_at`) VALUES
('01kbevpy7et4th9tym266xj3bh', '01kbekbaq4jsctgrjxh5gs72ry', 26000.00, 1000.00, 1000.00, 500.00, 500.00, 0.00, 200.00, 3000.00, 200.00, '2025-12-02 06:24:02', '2025-12-02 06:24:02'),
('01kbevwy0d8g52hzn0xjt8p0cm', '01kbejjmwcgxhmzpc4eaj9q310', 25000.00, 1000.00, 1000.00, 500.00, 500.00, 0.00, 300.00, 3000.00, 300.00, '2025-12-02 06:27:18', '2025-12-02 06:27:18'),
('01kbevy1qxh78ac5b9c0kn3kww', '01kbehbvngec4vrn1jcw1hy23j', 26000.00, 1000.00, 1000.00, 500.00, 500.00, 0.00, 200.00, 3000.00, 200.00, '2025-12-02 06:27:55', '2025-12-02 06:27:55'),
('01kbfcma70ncry7z2trynk9x4g', '01kbcxspe5eyz9p47m42mcz547', 25000.00, 1000.00, 500.00, 500.00, 1500.00, 0.00, 250.00, 3500.00, 250.00, '2025-12-02 11:19:42', '2025-12-02 11:19:42'),
('01kbfcnzs7qbrkr4w7kek1frfk', '01kbehjrc43ehpafcmnf4ybq56', 32000.00, 1000.00, 1000.00, 500.00, 1500.00, 0.00, 500.00, 4000.00, 500.00, '2025-12-02 11:20:36', '2025-12-02 11:21:09');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
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
('01kbesq0acwhas9wbezqc9g27c', 'Database Optimization', 'SQL & NoSQL performance and indexing tips', '2025-12-01', '2026-01-02', '2025-12-02 05:49:07', '2025-12-02 05:49:07'),
('01kbesrtva1pc493pbn3vjaae9', 'Testing & QA Automation', 'Unit, integration, and E2E testing', '2025-12-15', '2026-02-15', '2025-12-02 05:50:07', '2025-12-02 05:50:07'),
('01kbesv7bv2y52n4mawmq2gw6t', 'Cloud Fundamentals', 'AWS/Azure fundamentals for software engineers', '2025-12-10', '2026-01-30', '2025-12-02 05:51:25', '2025-12-02 05:51:25'),
('01kbesy39h2zq24hf6767jw9kd', 'React & Redux Workshop', 'Building scalable React applications', '2026-02-01', '2026-02-28', '2025-12-02 05:52:59', '2025-12-02 05:52:59'),
('01kbesze1mtsedvxaazsrvm644', 'Advanced JavaScript', 'Deep dive into modern JavaScript and ES6+', '2026-02-01', '2026-03-15', '2025-12-02 05:53:43', '2025-12-02 05:53:43');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` varchar(26) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role_id`, `remember_token`, `created_at`, `updated_at`) VALUES
('01KBCQ43THRVWP3M2B9TQKYM4N', 'Admin User', 'admin@gmail.com', NULL, '$2y$12$YlVqJCyjqvs/QZ18D9dyYeyQrNG7x0OV7iqJ9GehXKYNpvR47cXNm', '01KBCQ43T13P4RK25R5MVJ0ATY', NULL, '2025-12-01 10:25:22', '2025-12-01 10:25:22'),
('01kbcx8068zgtymjn5prj304xm', 'Mamun', 'mamun@example.com', NULL, '$2y$12$V8D60TREBxJAdRl/5VqcOuzldSlkAylbOg9tSTgsWLOsIrcpAdtNu', '01kbcsxvy5rdebda3pn71bpp8j', NULL, '2025-12-01 12:12:21', '2025-12-01 12:18:51'),
('01kbeh5qc4x972rbpmw7f4nd7z', 'Mamun 2', 'mamun2@example.com', NULL, '$2y$12$vZbfc6o25w/ZYflj4K/VJ.inhoA1WAlN8dyZqWh5b7U92vI4FI5zi', '01kbcsxvy5rdebda3pn71bpp8j', NULL, '2025-12-02 03:19:52', '2025-12-02 03:23:52'),
('01kbeh6kgh03rs78bwe81sky2c', 'Mamun 3', 'mamun3@example.com', NULL, '$2y$12$u3rRxsVF8G0e21DjQkJNnu9Qfev7Hi6Mf72TbTWM5vz4MH8hc68hG', '01kbcsx4t9q7dm8jybkk1nm3m9', NULL, '2025-12-02 03:20:21', '2025-12-02 03:24:06'),
('01kbeh773kd69tkt6e2kjr4req', 'Mamun 4', 'mamun4@example.com', NULL, '$2y$12$R.9XCwLAw2kriMkS7uCbyersHjjEcJsO3JQBMNxJc.EZ5qQ2yztSK', '01kbcsxvy5rdebda3pn71bpp8j', NULL, '2025-12-02 03:20:41', '2025-12-02 03:24:13'),
('01kbeh99f12hh40saaqr78eb6s', 'Mamun 5', 'mamun5@example.com', NULL, '$2y$12$p5k.2kgPnCXmPnRmuga6meJevOAzQEdeYXWT.EZyeq6fpzuD0RULW', '01kbcsxvy5rdebda3pn71bpp8j', NULL, '2025-12-02 03:21:49', '2025-12-02 03:24:19');

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
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `designations`
--
ALTER TABLE `designations`
  ADD PRIMARY KEY (`id`);

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
  ADD KEY `employee_trainings_employee_id_index` (`employee_id`),
  ADD KEY `employee_trainings_training_id_index` (`training_id`);

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
  ADD KEY `job_applications_recruitment_id_index` (`recruitment_id`),
  ADD KEY `job_applications_user_id_index` (`user_id`),
  ADD KEY `job_applications_employee_id_index` (`employee_id`);

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
  ADD KEY `leave_requests_employee_id_index` (`employee_id`),
  ADD KEY `leave_requests_leave_type_id_index` (`leave_type_id`),
  ADD KEY `leave_requests_approved_by_index` (`approved_by`);

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
  ADD KEY `payrolls_employee_id_index` (`employee_id`),
  ADD KEY `payrolls_month_year_index` (`month_year`);

--
-- Indexes for table `performance_evaluations`
--
ALTER TABLE `performance_evaluations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `performance_evaluations_employee_id_index` (`employee_id`),
  ADD KEY `performance_evaluations_kpi_id_index` (`kpi_id`);

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
  ADD KEY `recruitments_department_id_index` (`department_id`);

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
  ADD KEY `salary_structures_employee_id_index` (`employee_id`);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `trainings_start_date_index` (`start_date`),
  ADD KEY `trainings_end_date_index` (`end_date`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

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
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

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
  ADD CONSTRAINT `leave_requests_approved_by_foreign` FOREIGN KEY (`approved_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `leave_requests_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `leave_requests_leave_type_id_foreign` FOREIGN KEY (`leave_type_id`) REFERENCES `leave_types` (`id`) ON DELETE CASCADE;

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

--
-- Constraints for table `sessions`
--
ALTER TABLE `sessions`
  ADD CONSTRAINT `sessions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
