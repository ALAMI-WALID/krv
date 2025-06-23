<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\DevisRepository;

final class ViewController extends AbstractController
{
    #[Route('/view/{id}', name: 'app_view')]
    public function index(DevisRepository $devisRepo, $id): Response
    {
        $devis = $devisRepo->findOneBy(['id' => $id]);
        if (!$devis) {
            throw $this->createNotFoundException('Devis not found');
        }
        $images = $devis->getIllustration();
       
        return $this->render('view/index.html.twig', [
            'devis' => $devis,
            'images' => $images,
        ]);
    }
}
