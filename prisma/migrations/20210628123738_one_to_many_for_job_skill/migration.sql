/*
  Warnings:

  - You are about to drop the `_JobToSkill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_JobToSkill` DROP FOREIGN KEY `_JobToSkill_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_JobToSkill` DROP FOREIGN KEY `_JobToSkill_ibfk_2`;

-- AlterTable
ALTER TABLE `Skill` ADD COLUMN `jobId` INTEGER;

-- DropTable
DROP TABLE `_JobToSkill`;

-- AddForeignKey
ALTER TABLE `Skill` ADD FOREIGN KEY (`jobId`) REFERENCES `Job`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
