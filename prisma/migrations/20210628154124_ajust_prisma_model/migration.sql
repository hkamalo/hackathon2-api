/*
  Warnings:

  - You are about to drop the column `jobId` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_JobToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `budget` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deadline` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Skill` DROP FOREIGN KEY `Skill_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_JobToUser` DROP FOREIGN KEY `_JobToUser_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_JobToUser` DROP FOREIGN KEY `_JobToUser_ibfk_2`;

-- AlterTable
ALTER TABLE `Project` ADD COLUMN `budget` VARCHAR(255) NOT NULL,
    ADD COLUMN `deadline` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Skill` DROP COLUMN `jobId`;

-- DropTable
DROP TABLE `Job`;

-- DropTable
DROP TABLE `_JobToUser`;

-- CreateTable
CREATE TABLE `_SkillToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_SkillToUser_AB_unique`(`A`, `B`),
    INDEX `_SkillToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProjectToSkill` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProjectToSkill_AB_unique`(`A`, `B`),
    INDEX `_ProjectToSkill_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_SkillToUser` ADD FOREIGN KEY (`A`) REFERENCES `Skill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SkillToUser` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectToSkill` ADD FOREIGN KEY (`A`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectToSkill` ADD FOREIGN KEY (`B`) REFERENCES `Skill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
