/*
  Warnings:

  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProjectToSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SkillToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ProjectToSkill` DROP FOREIGN KEY `_ProjectToSkill_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_ProjectToSkill` DROP FOREIGN KEY `_ProjectToSkill_ibfk_2`;

-- DropForeignKey
ALTER TABLE `_SkillToUser` DROP FOREIGN KEY `_SkillToUser_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_SkillToUser` DROP FOREIGN KEY `_SkillToUser_ibfk_2`;

-- DropTable
DROP TABLE `Skill`;

-- DropTable
DROP TABLE `_ProjectToSkill`;

-- DropTable
DROP TABLE `_SkillToUser`;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Tag.name_unique`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_TagToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_TagToUser_AB_unique`(`A`, `B`),
    INDEX `_TagToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ProjectToTag` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProjectToTag_AB_unique`(`A`, `B`),
    INDEX `_ProjectToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_TagToUser` ADD FOREIGN KEY (`A`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TagToUser` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectToTag` ADD FOREIGN KEY (`A`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProjectToTag` ADD FOREIGN KEY (`B`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
