/*
  Warnings:

  - Added the required column `passwordCheck` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `accounts` ADD COLUMN `passwordCheck` VARCHAR(255) NOT NULL;