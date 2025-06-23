<?php

namespace App\Entity;

use App\Repository\DevisRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DevisRepository::class)]
class Devis
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $mat = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $lastName = null;

    #[ORM\Column(length: 255)]
    private ?string $phoe = null;

    #[ORM\Column(length: 255)]
    private ?string $position = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $message = null;

    /**
     * @var Collection<int, Image>
     */
    #[ORM\OneToMany(targetEntity: Image::class, mappedBy: 'illustration', cascade: ['persist'])]
    private Collection $illustration;

    public function __construct()
    {
        $this->illustration = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMat(): ?string
    {
        return $this->mat;
    }

    public function setMat(?string $mat): static
    {
        $this->mat = $mat;

        return $this;
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

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): static
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getPhoe(): ?string
    {
        return $this->phoe;
    }

    public function setPhoe(string $phoe): static
    {
        $this->phoe = $phoe;

        return $this;
    }

    public function getPosition(): ?string
    {
        return $this->position;
    }

    public function setPosition(string $position): static
    {
        $this->position = $position;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): static
    {
        $this->message = $message;

        return $this;
    }

    /**
     * @return Collection<int, Image>
     */
    public function getIllustration(): Collection
    {
        return $this->illustration;
    }

    public function addIllustration(Image $illustration): static
    {
        if (!$this->illustration->contains($illustration)) {
            $this->illustration->add($illustration);
            $illustration->setIllustration($this);
        }

        return $this;
    }

    public function removeIllustration(Image $illustration): static
    {
        if ($this->illustration->removeElement($illustration)) {
            // set the owning side to null (unless already changed)
            if ($illustration->getIllustration() === $this) {
                $illustration->setIllustration(null);
            }
        }

        return $this;
    }
}
