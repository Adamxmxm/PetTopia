-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 25, 2025 at 03:11 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 5.6.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petopia`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `CUST_ID` int(11) NOT NULL,
  `CUST_USER_ID` int(11) NOT NULL,
  `CUST_FULL_NAME` varchar(100) NOT NULL,
  `CUST_PHONE` varchar(20) NOT NULL,
  `CUST_ADDRESS` text,
  `CUST_PET_DETAILS` text,
  `CREATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CREATED_BY` varchar(100) DEFAULT NULL,
  `LAST_UPDATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `LAST_UPDATED_BY` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`CUST_ID`, `CUST_USER_ID`, `CUST_FULL_NAME`, `CUST_PHONE`, `CUST_ADDRESS`, `CUST_PET_DETAILS`, `CREATED_DT`, `CREATED_BY`, `LAST_UPDATED_DT`, `LAST_UPDATED_BY`) VALUES
(1, 1, 'ADAM', '0877765543342', 'DUKUH, DUWET, BAKI SUKOHARJO', NULL, '2025-01-24 19:20:33', 'SYSTEM', '2025-01-24 12:20:33', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `invoice_dtl`
--

CREATE TABLE `invoice_dtl` (
  `INV_DTL_ID` int(11) NOT NULL,
  `INV_DTL_HDR_ID` int(11) NOT NULL,
  `INV_DTL_SERVICE_ID` int(11) NOT NULL,
  `INV_DTL_QTY` varchar(200) DEFAULT NULL,
  `INV_DTL_PRICE` decimal(18,2) DEFAULT NULL,
  `INV_DTL_TOTAL` decimal(18,2) DEFAULT NULL,
  `CREATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CREATED_BY` varchar(100) DEFAULT NULL,
  `LAST_UPDATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `LAST_UPDATED_BY` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `invoice_hdr`
--

CREATE TABLE `invoice_hdr` (
  `INV_HDR_ID` int(11) NOT NULL,
  `INV_HDR_RESERVATION_ID` int(11) NOT NULL,
  `INV_HDR_DATE` date DEFAULT NULL,
  `INV_HDR_TOTAL` decimal(18,2) DEFAULT NULL,
  `INV_HDR_PAYMENT` varchar(100) DEFAULT NULL,
  `INV_HDR_STATUS` varchar(100) DEFAULT NULL,
  `CREATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CREATED_BY` varchar(100) DEFAULT NULL,
  `LAST_UPDATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `LAST_UPDATED_BY` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pets`
--

CREATE TABLE `pets` (
  `PET_ID` int(11) NOT NULL,
  `PET_CUST_ID` int(11) NOT NULL,
  `PET_NAME` varchar(50) NOT NULL,
  `PET_JENIS` varchar(50) DEFAULT NULL,
  `PET_BREED` varchar(50) DEFAULT NULL,
  `PET_UMUR` int(11) DEFAULT NULL,
  `PET_NOTES` text,
  `CREATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CREATED_BY` varchar(100) DEFAULT NULL,
  `LAST_UPDATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `LAST_UPDATED_BY` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pets`
--

INSERT INTO `pets` (`PET_ID`, `PET_CUST_ID`, `PET_NAME`, `PET_JENIS`, `PET_BREED`, `PET_UMUR`, `PET_NOTES`, `CREATED_DT`, `CREATED_BY`, `LAST_UPDATED_DT`, `LAST_UPDATED_BY`) VALUES
(1, 1, 'kio', 'kucing', NULL, 3, 'tes', '2025-01-24 19:20:33', 'SYSTEM', '2025-01-24 12:20:33', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `RES_ID` int(11) NOT NULL,
  `RES_CUST_ID` int(11) NOT NULL,
  `RES_PET_ID` int(11) NOT NULL,
  `RES_SERVICE` varchar(11) NOT NULL,
  `RES_STAFF_ID` int(11) DEFAULT NULL,
  `RES_DATE` date DEFAULT NULL,
  `RES_TIME` time DEFAULT NULL,
  `RES_STATUS` varchar(100) DEFAULT 'NEW',
  `RES_NOTES` varchar(500) NOT NULL,
  `CREATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CREATED_BY` varchar(100) DEFAULT NULL,
  `LAST_UPDATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `LAST_UPDATED_BY` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`RES_ID`, `RES_CUST_ID`, `RES_PET_ID`, `RES_SERVICE`, `RES_STAFF_ID`, `RES_DATE`, `RES_TIME`, `RES_STATUS`, `RES_NOTES`, `CREATED_DT`, `CREATED_BY`, `LAST_UPDATED_DT`, `LAST_UPDATED_BY`) VALUES
(1, 1, 1, 'A', NULL, '2025-01-24', '19:22:00', 'IN_PROGRESS', 'tes', '2025-01-24 19:20:33', 'SYSTEM', '2025-01-24 20:24:08', 'SYSTEM');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `SVC_ID` int(11) NOT NULL,
  `SVC_TYPE` varchar(100) NOT NULL,
  `SVC_NAME` varchar(100) NOT NULL,
  `SVC_DESCRIPTION` text,
  `SVC_PRICE` decimal(18,2) DEFAULT NULL,
  `CREATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CREATED_BY` varchar(100) DEFAULT NULL,
  `LAST_UPDATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `LAST_UPDATED_BY` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `USER_ID` int(11) NOT NULL,
  `USER_NAME` varchar(100) NOT NULL,
  `USER_EMAIL` varchar(100) NOT NULL,
  `USER_PASSWORD` varchar(255) NOT NULL,
  `USER_LEVEL` int(5) NOT NULL,
  `CREATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CREATED_BY` varchar(100) DEFAULT NULL,
  `LAST_UPDATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `LAST_UPDATED_BY` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`USER_ID`, `USER_NAME`, `USER_EMAIL`, `USER_PASSWORD`, `USER_LEVEL`, `CREATED_DT`, `CREATED_BY`, `LAST_UPDATED_DT`, `LAST_UPDATED_BY`) VALUES
(1, 'ADAM', 'afif@gmail.com', 'ADAM', 1, '2025-01-24 12:18:51', NULL, '2025-01-24 12:18:51', NULL),
(2, 'ALVI', 'alvi@example.com', 'ALVI', 2, '2025-01-23 21:05:37', 'system', '2025-01-23 21:05:37', NULL),
(3, 'SITI', 'siti@example.com', 'SITI', 3, '2025-01-23 21:05:37', 'system', '2025-01-23 21:05:37', NULL),
(4, 'KIANO', 'kiano@gmail.com', 'KIANO', 1, '2025-01-24 03:19:27', NULL, '2025-01-24 03:19:27', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `ROLE_ID` int(11) NOT NULL,
  `USER_ID` int(11) NOT NULL,
  `ROLE_NAME` varchar(100) NOT NULL,
  `CREATED_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CREATED_BY` varchar(100) DEFAULT NULL,
  `LAST_UPDATED_DT` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `LAST_UPDATED_BY` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`CUST_ID`);

--
-- Indexes for table `invoice_dtl`
--
ALTER TABLE `invoice_dtl`
  ADD PRIMARY KEY (`INV_DTL_ID`),
  ADD KEY `FK_INVOICE_DTL_HDR` (`INV_DTL_HDR_ID`),
  ADD KEY `FK_INVOICE_DTL_SERVICE` (`INV_DTL_SERVICE_ID`);

--
-- Indexes for table `invoice_hdr`
--
ALTER TABLE `invoice_hdr`
  ADD PRIMARY KEY (`INV_HDR_ID`),
  ADD KEY `FK_INVOICE_HDR_RESERVATIONS` (`INV_HDR_RESERVATION_ID`);

--
-- Indexes for table `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`PET_ID`),
  ADD KEY `FK_PETS_CUSTOMERS` (`PET_CUST_ID`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`RES_ID`),
  ADD KEY `FK_RESERVATIONS_PETS` (`RES_PET_ID`),
  ADD KEY `FK_RESERVATIONS_SERVICES` (`RES_SERVICE`),
  ADD KEY `RES_CUST_ID` (`RES_CUST_ID`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`SVC_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`USER_ID`),
  ADD UNIQUE KEY `USER_EMAIL` (`USER_EMAIL`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`ROLE_ID`),
  ADD KEY `fk_user_role` (`USER_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `CUST_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `invoice_dtl`
--
ALTER TABLE `invoice_dtl`
  MODIFY `INV_DTL_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoice_hdr`
--
ALTER TABLE `invoice_hdr`
  MODIFY `INV_HDR_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pets`
--
ALTER TABLE `pets`
  MODIFY `PET_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `RES_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `SVC_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `USER_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `ROLE_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `invoice_hdr`
--
ALTER TABLE `invoice_hdr`
  ADD CONSTRAINT `FK_INVOICE_HDR_RESERVATIONS` FOREIGN KEY (`INV_HDR_RESERVATION_ID`) REFERENCES `reservations` (`RES_ID`);

--
-- Constraints for table `pets`
--
ALTER TABLE `pets`
  ADD CONSTRAINT `FK_PETS_CUSTOMERS` FOREIGN KEY (`PET_CUST_ID`) REFERENCES `customers` (`CUST_ID`);

--
-- Constraints for table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `FK_RESERVATIONS_PETS` FOREIGN KEY (`RES_PET_ID`) REFERENCES `pets` (`PET_ID`),
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`RES_CUST_ID`) REFERENCES `customers` (`CUST_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_role`
--
ALTER TABLE `user_role`
  ADD CONSTRAINT `fk_user_role` FOREIGN KEY (`USER_ID`) REFERENCES `users` (`USER_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
