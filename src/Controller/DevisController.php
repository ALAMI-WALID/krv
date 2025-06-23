<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Devis;
use App\Entity\Image;
use App\Form\DevisType;
use App\Classe\Mail;

use Symfony\Component\Routing\Attribute\Route;

final class DevisController extends AbstractController
{
    #[Route('/devis', name: 'app_devis')]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
         $devis = new Devis();
         $form = $this->createForm(DevisType::class, $devis);
            $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
           $images = $form->get('images')->getData();

            if ($images) {
                foreach ($images as $imageFile) {
                    $fileName = uniqid().'.'.$imageFile->guessExtension();
                    $imageFile->move($this->getParameter('uploads_directory'), $fileName);

                    $image = new Image();
                    $image->setFileName($fileName);
                    $image->setIllustration($devis);

                    $devis->addIllustration($image);
                }
            }

            $entityManager->persist($devis);
            $entityManager->flush();
            
            $this->addFlash('success', 'Votre demande a été envoyé avec succès.');
            $mail = new Mail();
            $vars = [
                'numero' => $devis->getId(),
                ];
            $mail->notife($vars);
            return $this->redirectToRoute('app_devis');
        }
        
        return $this->render('devis/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
