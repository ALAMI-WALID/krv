<?php

namespace App\Entity;

use App\Repository\ImageRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ImageRepository::class)]
class Image
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'illustration')]
    private ?Devis $illustration = null;

    #[ORM\Column(length: 255)]
    private ?string $fileName = null;

    public function getId(): ?int
    {
        return $this->id;
    }
    public function __toString(): string
    {
        return $this->fileName ?? 'image';
    }


    public function getIllustration(): ?Devis
    {
        return $this->illustration;
    }

    public function setIllustration(?Devis $illustration): static
    {
        $this->illustration = $illustration;

        return $this;
    }

    public function getFileName(): ?string
    {
        return $this->fileName;
    }

    public function setFileName(string $fileName): static
    {
        $this->fileName = $fileName;

        return $this;
    }
}
