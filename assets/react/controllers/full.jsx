import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export default function ModernCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Auto-play activé par défaut
  const [videoStates, setVideoStates] = useState({});

  // Données du carousel avec mix d'images et vidéos depuis public/images
  const slides = [
      {
        type: 'video',
        src: '/images/full.mp4',
        description: 'Votre garage automobile spécialiste toutes marques vous garantissant les meilleurs services situé dans la zone de asnières-sur-seine 92600', 
      },
    {
      type: 'image',
      src: '/images/92.svg',
      title: 'Carrosserie',
      description: 'Nous réalisons nous-mêmes nos peintures dans notre laboratoire situé dans la zone de asnières-sur-seine 92600'
    },
    {
      type: 'image',
      src: '/images/mecano.png',
      title: 'Mécanique',
      description: 'Votre garage automobile spécialiste toutes marques, vous garantissant les meilleurs services situé dans la zone de asnières-sur-seine 92600'
    },
  ];

  // Auto-play functionality - toujours actif
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 13000); // Changement toutes les 4 secondes
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleVideoPlay = (index) => {
    setVideoStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black mt-19"> 
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : index === (currentSlide - 1 + slides.length) % slides.length
                ? 'opacity-0 scale-110 -translate-x-full'
                : index === (currentSlide + 1) % slides.length
                ? 'opacity-0 scale-110 translate-x-full'
                : 'opacity-0 scale-95'
            }`}
          >
            {slide.type === 'image' ? (
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={slide.src}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
                playsInline
              />
            )}
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 
                  bg-white/10 backdrop-blur-md rounded-full p-3 
                  hover:bg-white/20 transition-all duration-300 
                  hover:scale-110 group z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 
                  bg-white/10 backdrop-blur-md rounded-full p-3 
                  hover:bg-white/20 transition-all duration-300 
                  hover:scale-110 group z-10"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="transform transition-all duration-700 delay-300">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 
                          bg-gradient-to-r from-white via-blue-100 to-purple-200 
                          bg-clip-text text-transparent">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125 shadow-lg shadow-white/50'
                : 'bg-white/50 hover:bg-white/70 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Auto-play Status Indicator */}
      <div className="absolute top-6 right-6 z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-medium">AUTO</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-10">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 left-6 z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
          <span className="text-white font-medium">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}