<?php

namespace App\Entity;

use App\Repository\CarModelRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CarModelRepository::class)]
class CarModel
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $glbPath = null;

    #[ORM\Column(length: 255)]
    private ?string $illustartion = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    /**
     * @var Collection<int, Tarifs>
     */
    #[ORM\OneToMany(targetEntity: Tarifs::class, mappedBy: 'car')]
    private Collection $tarifs;

    public function __construct()
    {
        $this->tarifs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getGlbPath(): ?string
    {
        return $this->glbPath;
    }

    public function setGlbPath(string $glbPath): static
    {
        $this->glbPath = $glbPath;

        return $this;
    }

    public function getIllustartion(): ?string
    {
        return $this->illustartion;
    }

    public function setIllustartion(string $illustartion): static
    {
        $this->illustartion = $illustartion;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection<int, Tarifs>
     */
    public function getTarifs(): Collection
    {
        return $this->tarifs;
    }

    public function addTarif(Tarifs $tarif): static
    {
        if (!$this->tarifs->contains($tarif)) {
            $this->tarifs->add($tarif);
            $tarif->setCar($this);
        }

        return $this;
    }

    public function removeTarif(Tarifs $tarif): static
    {
        if ($this->tarifs->removeElement($tarif)) {
            // set the owning side to null (unless already changed)
            if ($tarif->getCar() === $this) {
                $tarif->setCar(null);
            }
        }

        return $this;
    }
}
