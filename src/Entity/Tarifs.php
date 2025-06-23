<?php

namespace App\Entity;

use App\Repository\TarifsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TarifsRepository::class)]
class Tarifs
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tarifs')]
    private ?CarModel $car = null;

    #[ORM\ManyToOne(inversedBy: 'tarifs')]
    private ?PaintOptions $element = null;

    #[ORM\ManyToOne(inversedBy: 'tarifs')]
    private ?DamageLevels $damageLevel = null;

    #[ORM\Column]
    private ?float $prixBase = null;

 

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCar(): ?CarModel
    {
        return $this->car;
    }

    public function setCar(?CarModel $car): static
    {
        $this->car = $car;

        return $this;
    }

    public function getElement(): ?PaintOptions
    {
        return $this->element;
    }

    public function setElement(?PaintOptions $element): static
    {
        $this->element = $element;

        return $this;
    }

    public function getDamageLevel(): ?DamageLevels
    {
        return $this->damageLevel;
    }

    public function setDamageLevel(?DamageLevels $damageLevel): static
    {
        $this->damageLevel = $damageLevel;

        return $this;
    }

    public function getPrixBase(): ?float
    {
        return $this->prixBase;
    }

    public function setPrixBase(float $prixBase): static
    {
        $this->prixBase = $prixBase;

        return $this;
    }

}
