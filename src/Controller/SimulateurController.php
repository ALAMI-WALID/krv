<?php

namespace App\Controller;

use App\Entity\CarModel;
use App\Entity\PaintOptions;
use App\Entity\DamageLevels;
use App\Entity\Tarifs;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use App\Repository\CarModelRepository;
use App\Repository\PaintOptionsRepository;
use App\Repository\DamageLevelsRepository;

use App\Repository\TarifsRepository;

class SimulateurController extends AbstractController
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/simulateur', name: 'car_repair_index')]
    public function index(CarModelRepository $carType ): Response
    {
        // Récupérer tous les modèles de carrosserie
        $carModels = $carType->findAll();

        return $this->render('simulateur/index.html.twig', [
            'carModels' => $carModels,
        ]);
    }

    #[Route('/api/car-elements/{carModelId}', name: 'api_car_elements', methods: ['GET'])]
    public function getCarElements(int $carModelId, PaintOptionsRepository $paintOptions): JsonResponse
    {
        // Récupérer les éléments de peinture associés au modèle de carrosserie
        $paintOptions = $paintOptions->findByCar($carModelId);
        if (!$paintOptions) {
            return new JsonResponse(['error' => 'Aucun élément de peinture trouvé pour ce modèle de carrosserie'], 404);
        }
        $elements = [];
        foreach ($paintOptions as $option) {
            $elements[] = [
                'id' => $option->getId(),
                'name' => $option->getName(),
                'illustration' => $option->getIllustration()
            ];
        }

        return new JsonResponse($elements);
    }

    #[Route('/api/damage-levels', name: 'api_damage_levels', methods: ['GET'])]
    public function getDamageLevels(DamageLevelsRepository $damageLevelRepo): JsonResponse
    {
        $damageLevels = $damageLevelRepo->findAll();

        $levels = [];
        foreach ($damageLevels as $level) {
            $levels[] = [
                'id' => $level->getId(),
                'niveau' => $level->getNiveau(),
                'coeff' => $level->getCoeff(),
                'illustration' => $level->getIllustration()
            ];
        }

        return new JsonResponse($levels);
    }

    #[Route('/api/calculate-price', name: 'api_calculate_price', methods: ['POST'])]
    public function calculatePrice(Request $request,TarifsRepository $tarifsRepo ): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        if (!isset($data['carModelId']) || !isset($data['selections'])) {
            return new JsonResponse(['error' => 'Données manquantes'], 400);
        }

        $carModelId = $data['carModelId'];
        $selections = $data['selections'];
        $total = 0;
        $details = [];

        foreach ($selections as $selection) {
            $elementId = $selection['elementId'];
            $damageLevelId = $selection['damageLevelId'];

            // Récupérer le tarif de base
            $tarif = $tarifsRepo->findOneBy([
                    'car' => $carModelId,
                    'element' => $elementId,
                    'damageLevel' => $damageLevelId
                ]);

            if ($tarif) {
                $basePrice = $tarif->getPrixBase();
                
                // Récupérer le coefficient de dommage
                $damageLevel = $this->entityManager->getRepository(DamageLevels::class)
                    ->findOneBy(['id' =>$damageLevelId]);
                
                $coefficient = $damageLevel ? $damageLevel->getCoeff() : 1;
                $finalPrice = $basePrice * $coefficient;
                
                // Récupérer le nom de l'élément
                $element = $this->entityManager->getRepository(PaintOptions::class)
                    ->findOneBy(['id'=>$elementId]);
                
                $details[] = [
                    'element' => $element ? $element->getName() : 'Élément inconnu',
                    'damage' => $damageLevel ? $damageLevel->getNiveau() : 'Dommage inconnu',
                    'basePrice' => $basePrice,
                    'coefficient' => $coefficient,
                    'finalPrice' => $finalPrice
                ];
                
                $total += $finalPrice;
            }
        }

        return new JsonResponse([
            'total' => $total,
            'details' => $details
        ]);
    }
}