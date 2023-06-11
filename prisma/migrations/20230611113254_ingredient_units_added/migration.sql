/*
  Warnings:

  - Added the required column `measureUnit` to the `Ingredients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ingredients" ADD COLUMN     "measureUnit" VARCHAR(255) NOT NULL;
