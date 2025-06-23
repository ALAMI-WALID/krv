import React, { useState } from 'react';
import { Wrench, Settings, Car, Palette, RotateCcw, Shield, Cpu, Calendar, Cog, Disc, Snowflake, CheckCircle } from 'lucide-react';

const ServicesAuto92 = () => {
  const [activeService, setActiveService] = useState(null);

  const carrosserieServices = [
    {
      id: 1,
      title: "Réparation-Collision des carrosseries",
      icon: <Wrench className="w-6 h-6" />,
      description: "Remise en état complète de votre véhicule après accident ou choc.",
      features: ["Réparation de tôlerie", "Redressage de châssis", "Expertise collision", "Prise en charge assurance"]
    },
    {
      id: 2,
      title: "Peinture des carrosseries",
      icon: <Palette className="w-6 h-6" />,
      description: "Application de peinture professionnelle pour redonner l'éclat à votre véhicule.",
      features: ["Peinture complète", "Retouches localisées", "Préparation de surface", "Vernis de protection"]
    },
    {
      id: 3,
      title: "Débosselage sans peinture",
      icon: <Car className="w-6 h-6" />,
      description: "Technique innovante pour réparer les bosses sans abîmer la peinture d'origine.",
      features: ["Préservation peinture d'origine", "Réparation rapide", "Technique écologique", "Coût réduit"]
    },
    {
      id: 4,
      title: "Rénovation des jantes",
      icon: <RotateCcw className="w-6 h-6" />,
      description: "Remise à neuf complète de vos jantes abîmées ou rayées.",
      features: ["Réparation rayures", "Peinture jantes", "Polissage", "Protection longue durée"]
    },
    {
      id: 5,
      title: "Restauration véhicules anciens",
      icon: <Car className="w-6 h-6" />,
      description: "Expertise spécialisée dans la restauration de véhicules de collection.",
      features: ["Restauration complète", "Pièces d'origine", "Savoir-faire traditionnel", "Respect authenticité"]
    },
    {
      id: 6,
      title: "Remplacement de pare-brise et vitrage",
      icon: <Shield className="w-6 h-6" />,
      description: "Service complet de remplacement et réparation de vitrage automobile.",
      features: ["Pare-brise toutes marques", "Vitres latérales", "Lunettes arrière", "Recalibrage caméras"]
    }
  ];

  const mecaniqueServices = [
    {
      id: 7,
      title: "Diagnostic électronique",
      icon: <Cpu className="w-6 h-6" />,
      description: "Analyse complète des systèmes électroniques de votre véhicule.",
      features: ["Lecture codes défauts", "Test calculateurs", "Diagnostic moteur", "Réinitialisation systèmes"]
    },
    {
      id: 8,
      title: "Entretien périodique",
      icon: <Calendar className="w-6 h-6" />,
      description: "Maintenance préventive selon les préconisations constructeur.",
      features: ["Vidange moteur", "Changement filtres", "Contrôle niveaux", "Révision complète"]
    },
    {
      id: 9,
      title: "Réparation moteur",
      icon: <Cog className="w-6 h-6" />,
      description: "Intervention sur tous types de moteurs essence et diesel.",
      features: ["Réparation culasse", "Distribution", "Injection", "Refroidissement"]
    },
    {
      id: 10,
      title: "Freinage et suspension",
      icon: <Disc className="w-6 h-6" />,
      description: "Sécurité et confort de conduite assurés.",
      features: ["Plaquettes de frein", "Disques", "Amortisseurs", "Ressorts"]
    },
    {
      id: 11,
      title: "Climatisation",
      icon: <Snowflake className="w-6 h-6" />,
      description: "Entretien et réparation des systèmes de climatisation.",
      features: ["Recharge gaz", "Nettoyage circuit", "Compresseur", "Évaporateur"]
    },
    {
      id: 12,
      title: "Contrôle technique",
      icon: <CheckCircle className="w-6 h-6" />,
      description: "Préparation et accompagnement pour le contrôle technique.",
      features: ["Pré-contrôle gratuit", "Réparations nécessaires", "Contre-visite", "Accompagnement"]
    }
  ];

  const handleServiceClick = (serviceType) => {
    setActiveService(serviceType);
  };

  const ServiceCard = ({ service }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-red-500">
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-full mr-4">
          {service.icon}
        </div>
        <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 tracking-wide">
            NOS SERVICES
          </h1>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            Répare Auto 92 vous offre un devis gratuit en ligne et vous propose des services complets 
            d'entretien automobile et de réparation mécanique et de travaux de carrosserie. 
            Avec nos tarifs allant jusqu'à -40%, bénéficiez d'un service fiable, rapide et peu coûteux près de chez vous.
          </p>
        </div>

        {/* Bloc principal avec les deux boutons */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 uppercase tracking-wide">
            Choisissez votre service
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => handleServiceClick('carrosserie')}
              className={`group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg min-w-[200px] flex items-center justify-center gap-3 ${
                activeService === 'carrosserie' ? 'ring-4 ring-red-300' : ''
              }`}
            >
              <Wrench className="w-6 h-6" />
              <span className="text-lg">Carrosserie</span>
            </button>
            
            <button
              onClick={() => handleServiceClick('mecanique')}
              className={`group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg min-w-[200px] flex items-center justify-center gap-3 ${
                activeService === 'mecanique' ? 'ring-4 ring-red-300' : ''
              }`}
            >
              <Settings className="w-6 h-6" />
              <span className="text-lg">Mécanique</span>
            </button>
          </div>
        </div>

        {/* Services détaillés */}
        {activeService && (
          <div className="mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 capitalize">
                Services de {activeService}
              </h3>
              <div className="w-24 h-1 bg-red-500 mx-auto mt-4"></div>
            </div>
          </div>
        )}

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!activeService && [...carrosserieServices, ...mecaniqueServices].map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
          
          {activeService === 'carrosserie' && carrosserieServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
          
          {activeService === 'mecanique' && mecaniqueServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bouton de réinitialisation */}
        {activeService && (
          <div className="text-center mt-12">
            <button
              onClick={() => setActiveService(null)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            >
              Voir tous les services
            </button>
          </div>
        )}

        {/* Section contact/devis */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 md:p-12 text-center text-white mt-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Besoin d'un devis gratuit ?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Contactez-nous dès maintenant pour obtenir votre devis personnalisé
          </p>
         <a href="/simulateur"><button className="bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
            Demander un devis
          </button>

            </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesAuto92;