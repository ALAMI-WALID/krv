import React, { useState } from 'react';
import { Star, Mail, Clock } from 'lucide-react';

const LateralButtons = () => {
  const [isAnimating, setIsAnimating] = useState({});

  const handleNavigation = (path, buttonId) => {
    // Animation de clic
    setIsAnimating(prev => ({ ...prev, [buttonId]: true }));
    
    setTimeout(() => {
      setIsAnimating(prev => ({ ...prev, [buttonId]: false }));
    }, 150);

    // Navigation Symfony
    window.location.href = path;
  };

  const buttons = [
    {
      id: 'estimer',
      path: '/simulateur',
      icon: <Clock size={28} />,
      tooltip: 'Estimer',
      color: 'blue',
      hasText: true,
      text: 'Devis minute'
    },
 
    

    {
      id: 'avis',
      path: '/avis',
      icon: <Star size={28} />,
      tooltip: 'Avis clients',
      color: 'green',
      hasText: true,
      text: 'Avis clients'
    },
    {
      id: 'contact',
      path: '/#contact',
      icon: <Mail size={28} />,
      tooltip: 'Contact',
      color: 'orange',
      hasText: true,
      text: 'Nos contacts'
    }
  ];

  return (
    <>
      {/* Styles CSS intégrés */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideInRight {
            from {
              transform: translateX(100px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          .animate-slide-in {
            animation: slideInRight 0.6s ease-out;
          }
        `
      }} />
      
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-5 z-50">
        {buttons.map((button, index) => (
          <div key={button.id} className="relative group animate-slide-in">
            <button
              onClick={() => handleNavigation(button.path, button.id)}
              className={`
                relative ${button.hasText ? 'w-auto h-16 px-4 rounded-full' : 'w-16 h-16 rounded-full'} 
                shadow-lg transition-all duration-300 ease-out
                flex items-center justify-center text-white cursor-pointer
                hover:scale-110 hover:shadow-xl active:scale-95
                ${button.color === 'green' 
                  ? 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 shadow-green-500/30 hover:shadow-green-500/50' 
                  : button.color === 'orange'
                  ? 'bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 shadow-orange-500/30 hover:shadow-orange-500/50'
                  : 'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 shadow-blue-500/30 hover:shadow-blue-500/50'
                }
                ${isAnimating[button.id] ? 'animate-pulse' : ''}
                overflow-hidden
              `}
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: '0.6s',
                animationFillMode: 'both'
              }}
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              
              {/* Contenu du bouton */}
              <div className={`relative z-10 transition-transform duration-200 group-hover:scale-110 ${button.hasText ? 'flex items-center gap-2' : ''}`}>
                {button.icon}
                {button.hasText && (
                  <span className="font-semibold text-sm whitespace-nowrap">
                    {button.text}
                  </span>
                )}
              </div>
            </button>

            {/* Tooltip pour les boutons sans texte */}
            {!button.hasText && (
              <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-md text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:right-[85px] transition-all duration-300 whitespace-nowrap pointer-events-none">
                {button.tooltip}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-6 border-l-gray-900 border-t-6 border-t-transparent border-b-6 border-b-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

// Composant de démonstration avec page complète
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Contenu de démonstration */}
      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Page de démonstration</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Section {item}</h3>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Boutons latéraux */}
      <LateralButtons />

      {/* Particules flottantes pour l'effet visuel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;