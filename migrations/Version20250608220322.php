<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250608220322 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE damage_levels CHANGE coeff coeff DOUBLE PRECISION NOT NULL');
        $this->addSql('ALTER TABLE tarifs DROP prix_estime');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE damage_levels CHANGE coeff coeff FLOAT NOT NULL');
        $this->addSql('ALTER TABLE tarifs ADD prix_estime DOUBLE PRECISION DEFAULT NULL');
    }
}
