<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250608134404 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE damage_levels (id INT AUTO_INCREMENT NOT NULL, niveau VARCHAR(255) NOT NULL, coeff DOUBLE PRECISION NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE tarifs (id INT AUTO_INCREMENT NOT NULL, prix_base DOUBLE PRECISION NOT NULL, prix_estime DOUBLE PRECISION NOT NULL, car_id INT DEFAULT NULL, element_id INT DEFAULT NULL, damage_level_id INT DEFAULT NULL, INDEX IDX_F9B8C496C3C6F69F (car_id), INDEX IDX_F9B8C4961F1F2A24 (element_id), INDEX IDX_F9B8C4962D328199 (damage_level_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('ALTER TABLE tarifs ADD CONSTRAINT FK_F9B8C496C3C6F69F FOREIGN KEY (car_id) REFERENCES car_model (id)');
        $this->addSql('ALTER TABLE tarifs ADD CONSTRAINT FK_F9B8C4961F1F2A24 FOREIGN KEY (element_id) REFERENCES paint_options (id)');
        $this->addSql('ALTER TABLE tarifs ADD CONSTRAINT FK_F9B8C4962D328199 FOREIGN KEY (damage_level_id) REFERENCES damage_levels (id)');
        $this->addSql('DROP TABLE damage_type');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE damage_type (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_general_ci`, coefficient DOUBLE PRECISION NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_general_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE tarifs DROP FOREIGN KEY FK_F9B8C496C3C6F69F');
        $this->addSql('ALTER TABLE tarifs DROP FOREIGN KEY FK_F9B8C4961F1F2A24');
        $this->addSql('ALTER TABLE tarifs DROP FOREIGN KEY FK_F9B8C4962D328199');
        $this->addSql('DROP TABLE damage_levels');
        $this->addSql('DROP TABLE tarifs');
    }
}
