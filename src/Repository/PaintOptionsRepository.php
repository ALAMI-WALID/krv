<?php

namespace App\Repository;

use App\Entity\PaintOptions;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PaintOptions>
 */
class PaintOptionsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PaintOptions::class);
    }

    //    /**
    //     * @return PaintOptions[] Returns an array of PaintOptions objects
    //     */
       public function findByCar($value): array
       {
           return $this->createQueryBuilder('p')
                ->join('p.tarifs', 't')
               ->andWhere('t.car = :val')
               ->setParameter('val', $value)
               ->getQuery()
               ->getResult()
           ;
       }

    //    public function findOneBySomeField($value): ?PaintOptions
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
