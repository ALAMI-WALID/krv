<?php

namespace App\Classe;

use Mailjet\Client;
use Mailjet\Resources;

class Mail
{
   
    public function notife($vars = null)
    {

         $mj = new Client($_ENV['MJ_APIKEY_PUBLIC'], $_ENV['MJ_APIKEY_PRIVATE'], true, ['version' => 'v3.1']);
        // $body = [
        //     'Messages' => [
        //         [
        //             'From' => [
        //                 'Email' => 'developpeur@peintureautoexpert.com',
        //                 'Name' => 'X-PRO',
        //             ],
        //             'To' => [
        //                 [
        //                     'Email' => 'walidfr.digital@gmail.com',
        //                     'Name' => $to_name,
        //                 ],
        //             ],
        //             'TemplateID' => 6556456,
        //             'TemplateLanguage' => true,
        //             'Subject' => $subject,
        //             'Variables' => [
        //                 'confirmation_link' => $vars['Numero_de_commande'],
        //                 'magasin' => $vars['nameComplet'],
        //             ],
        //         ],
        //     ],
        // ];

        // $mj->post(Resources::$Email, ['body' => $body]);

        $body = [
            'Messages' => [
            [
                'From' => [
                'Email' => "developpeur@peintureautoexpert.com",
                'Name' => "X-PRO"
                ],
                'To' => [
                [
                    'Email' => "walidfr.digital@gmail.com",
                    'Name' => "Manager"
                ]
                ],
                'TemplateID' => 6996493,
                'TemplateLanguage' => true,
                'Subject' => "Nouvelle demande d'un devis",
                'Variables' => [
                    'numero' => $vars['numero'],
                    
                ],
                
            ]
            ]
        ];
        $response = $mj->post(Resources::$Email, ['body' => $body]);

    }


  
}
