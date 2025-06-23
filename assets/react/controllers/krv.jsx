import React, { useState, useRef, useEffect } from 'react';

const ProductsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAllProducts, setShowAllProducts] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const scrollRef = useRef(null);

    // Données des produits avec plus de détails
    const products = [
        {
            id: 1,
            image: "🥤",
            name: "APP - Godet mélange Graduée",
            subtitle: "cup récipient",
            description: "Godet de mélange gradué en plastique transparent avec mesures précises pour préparer vos mélanges de peinture en toute simplicité.",
            originalPrice: "0,60",
            discountedPrice: "0,40",
            discount: "33%",
            category: "Consommables",
            inStock: true,
            rating: 4.5,
            reviews: 23,
            features: ["Graduated measurements", "Transparent plastic", "Easy to clean", "Professional grade"]
        },
        {
            id: 2,
            image: "🧽",
            name: "APP SN Filtre peinture cone",
            subtitle: "Filtre conique",
            description: "Filtre conique haute performance pour éliminer les impuretés dans la peinture et garantir une finition parfaite.",
            originalPrice: "0,30",
            discountedPrice: "0,20",
            discount: "20%",
            category: "Filtres",
            inStock: true,
            rating: 4.8,
            reviews: 45,
            features: ["High filtration", "Conical design", "Paint compatible", "Professional quality"]
        },
        {
            id: 3,
            image: "🪣",
            name: "hello hebdbeu jdsnjd did edznjk",
            subtitle: "Boîte de 50 pochettes jndjbh  dcdnjkn",
            description: "Pochettes jetables PPS pour système de mélange sans solvant. Économiques et pratiques pour tous vos travaux.",
            originalPrice: "69,00",
            discountedPrice: "49,90",
            discount: "44%",
            category: "Pochettes",
            inStock: true,
            rating: 4.7,
            reviews: 89,
            features: ["50 pieces", "Disposable", "Solvent-free", "Easy mixing"]
        },
        {
            id: 4,
            image: "🔧",
            name: "APP PPS Adaptateur",
            subtitle: "Adaptateur universel",
            description: "Adaptateur PPS universel compatible avec la plupart des pistons de peinture professionnels.",
            originalPrice: "24,90",
            discountedPrice: "18,89",
            discount: "38%",
            category: "Adaptateurs",
            inStock: false,
            rating: 4.6,
            reviews: 34,
            features: ["Universal fit", "Professional grade", "Durable construction", "Easy installation"]
        },
        {
            id: 5,
            image: "🧽",
            name: "Tampon essuyage Finixa",
            subtitle: "Pack de 10",
            description: "Tampons d'essuyage haute absorption Finixa pour nettoyer et préparer les surfaces avant peinture.",
            originalPrice: "2,00",
            discountedPrice: "1,00",
            discount: "50%",
            category: "Nettoyage",
            inStock: true,
            rating: 4.4,
            reviews: 67,
            features: ["High absorption", "Lint-free", "Professional grade", "Pack of 10"]
        },
        {
            id: 6,
            image: "🎨",
            name: "Mélangeur peinture APP",
            subtitle: "Agitateur manuel",
            description: "Mélangeur manuel APP pour homogénéiser parfaitement vos peintures et obtenir une consistance optimale.",
            originalPrice: "15,50",
            discountedPrice: "12,90",
            discount: "25%",
            category: "Outils",
            inStock: true,
            rating: 4.9,
            reviews: 112,
            features: ["Manual mixing", "Ergonomic handle", "Professional quality", "Easy to clean"]
        },
        {
            id: 7,
            image: "🧤",
            name: "Gants nitrile APP x100",
            subtitle: "Boite de 100 pièces",
            description: "Gants jetables en nitrile de haute qualité, résistants aux solvants et produits chimiques.",
            originalPrice: "18,90",
            discountedPrice: "14,90",
            discount: "30%",
            category: "Protection",
            inStock: true,
            rating: 4.3,
            reviews: 156,
            features: ["100 pieces", "Chemical resistant", "Nitrile material", "Disposable"]
        }
    ];

    const itemsPerView = 5;
    
    // Fonction pour obtenir les éléments visibles sans espace vide
    const getVisibleProducts = () => {
        const visible = [];
        for (let i = 0; i < itemsPerView; i++) {
            const index = (currentIndex + i) % products.length;
            visible.push(products[index]);
        }
        return visible;
    };
    
    const scrollLeft = () => {
        if (isTransitioning) return;
        
        const newCurrentIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
        setCurrentIndex(newCurrentIndex);
        
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 300);
    };

    const scrollRight = () => {
        if (isTransitioning) return;
        
        const newCurrentIndex = currentIndex === products.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newCurrentIndex);
        
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 300);
    };

    // Auto-scroll optionnel
    useEffect(() => {
        const interval = setInterval(() => {
            if (!showAllProducts && !isTransitioning) {
                scrollRight();
            }
        }, 4000); // Change toutes les 4 secondes

        return () => clearInterval(interval);
    }, [currentIndex, showAllProducts, isTransitioning]);

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="text-yellow-400">★</span>);
        }
        if (hasHalfStar) {
            stars.push(<span key="half" className="text-yellow-400">☆</span>);
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<span key={i} className="text-gray-300">★</span>);
        }
        return stars;
    };

    if (showAllProducts) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
                {/* Header pour vue complète */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Tous nos Consommables Peinture
                    </h2>
                    <button 
                        onClick={() => setShowAllProducts(false)}
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 px-4 py-2 rounded-lg"
                    >
                        <span className="mr-2">←</span>
                        <span className="font-medium">Retour au carrousel</span>
                    </button>
                </div>

                {/* Grille de tous les produits avec détails complets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            {/* Badge et image */}
                            <div className="relative">
                                <div className="absolute top-4 left-4 z-10">
                                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                        -{product.discount}
                                    </div>
                                </div>
                                
                                {!product.inStock && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <div className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            Rupture
                                        </div>
                                    </div>
                                )}

                                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-6xl">
                                    {product.image}
                                </div>
                            </div>

                            {/* Contenu détaillé */}
                            <div className="p-6">
                                <div className="mb-2">
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                                        {product.category}
                                    </span>
                                </div>

                                <h3 className="font-bold text-lg text-gray-900 mb-1">
                                    {product.name}
                                </h3>
                                
                                {product.subtitle && (
                                    <p className="text-sm text-gray-500 mb-3">
                                        {product.subtitle}
                                    </p>
                                )}

                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    <div className="flex mr-2">
                                        {renderStars(product.rating)}
                                    </div>
                                    <span className="text-sm text-gray-500">
                                        {product.rating} ({product.reviews} avis)
                                    </span>
                                </div>

                                {/* Features */}
                                <div className="mb-4">
                                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Caractéristiques :</h4>
                                    <ul className="grid grid-cols-2 gap-1 text-xs text-gray-600">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="flex items-center">
                                                <span className="text-green-500 mr-1">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Prix */}
                                <div className="mb-4">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <span className="text-sm text-gray-400 line-through">
                                            €{product.originalPrice} EUR
                                        </span>
                                        <span className="text-sm text-red-600 font-bold bg-red-100 px-2 py-1 rounded">
                                            Économisez {product.discount}
                                        </span>
                                    </div>
                                    <div className="text-2xl font-bold text-red-600">
                                        €{product.discountedPrice} EUR
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="space-y-2">
                                    <button 
                                        disabled={!product.inStock}
                                        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                                            product.inStock 
                                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 shadow-lg'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                    >
                                        {product.inStock ? '🛒 Ajouter au panier' : 'Produit indisponible'}
                                    </button>
                                    <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                        ❤️ Ajouter aux favoris
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Consommables Peinture...
                </h2>
                <button 
                    onClick={() => setShowAllProducts(true)}
                    className="group flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 bg-gray-50 hover:bg-blue-50 px-6 py-3 rounded-xl"
                >
                    <span className="mr-2 text-lg">⚏⚏</span>
                    <span className="font-medium">Tout afficher</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
            </div>

            {/* Carrousel Container */}
            <div className="relative">
                {/* Navigation Arrows */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center transition-all duration-300 hover:border-blue-500 hover:text-blue-500 hover:scale-110 shadow-lg hover:shadow-xl"
                >
                    <span className="text-xl font-bold">‹</span>
                </button>

                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center transition-all duration-300 hover:border-blue-500 hover:text-blue-500 hover:scale-110 shadow-lg hover:shadow-xl"
                >
                    <span className="text-xl font-bold">›</span>
                </button>

                {/* Products Container */}
                <div className="overflow-hidden mx-16">
                    <div className="flex transition-all duration-500 ease-in-out">
                        {getVisibleProducts().map((product, index) => (
                            <div 
                                key={`${product.id}-${currentIndex}-${index}`}
                                className="flex-shrink-0 w-1/5 px-3"
                            >
                                <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer h-[420px] flex flex-col">
                                    {/* Badge et image - Hauteur fixe */}
                                    <div className="relative h-[160px] flex-shrink-0">
                                        <div className="absolute top-3 left-3 z-10">
                                            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                                Économisez {product.discount}
                                            </div>
                                        </div>
                                        
                                        {!product.inStock && (
                                            <div className="absolute top-3 right-3 z-10">
                                                <div className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs">
                                                    Rupture
                                                </div>
                                            </div>
                                        )}

                                        <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">
                                            {product.image}
                                        </div>
                                        
                                        {/* Overlay avec rating au hover */}
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                                                <div className="flex justify-center mb-1">
                                                    {renderStars(product.rating)}
                                                </div>
                                                <p className="text-xs">{product.reviews} avis</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contenu - Hauteur flexible avec structure fixe */}
                                    <div className="p-4 flex flex-col flex-grow h-[260px]">
                                        {/* Catégorie - Hauteur fixe */}
                                        <div className="mb-2 h-6 flex items-center">
                                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                                                {product.category}
                                            </span>
                                        </div>

                                        {/* Titre - Hauteur fixe pour 2 lignes max */}
                                        <h3 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors h-10 flex items-start">
                                            {product.name}
                                        </h3>
                                        
                                        {/* Sous-titre - Hauteur fixe */}
                                        <div className="h-5 mb-3 flex items-center">
                                            {product.subtitle && (
                                                <p className="text-xs text-gray-500 truncate">
                                                    {product.subtitle}
                                                </p>
                                            )}
                                        </div>

                                        {/* Prix - Hauteur fixe */}
                                        <div className="space-y-1 mb-4 h-12 flex flex-col justify-center">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-xs text-gray-400 line-through">
                                                    €{product.originalPrice} EUR
                                                </span>
                                                <span className="text-xs text-red-600 font-bold bg-red-100 px-1 py-0.5 rounded">
                                                    -{product.discount}
                                                </span>
                                            </div>
                                            <div className="text-lg font-bold text-red-600">
                                                Du €{product.discountedPrice} EUR
                                            </div>
                                        </div>

                                        {/* Actions - Toujours en bas */}
                                        <div className="mt-auto space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <button 
                                                disabled={!product.inStock}
                                                className={`w-full py-2 px-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                                                    product.inStock 
                                                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                }`}
                                            >
                                                {product.inStock ? '🛒 Ajouter' : 'Indisponible'}
                                            </button>
                                            <button className="w-full py-1.5 px-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                                ❤️ Favoris
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indicateurs de position */}
                <div className="flex justify-center mt-8 space-x-2">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-300 rounded-full ${
                                currentIndex === index 
                                    ? 'bg-blue-600 w-8 h-3' 
                                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Info navigation */}
            <div className="text-center mt-6 text-sm text-gray-500 bg-gray-50 py-3 rounded-lg">
                <span className="font-medium">Navigation automatique</span> • Utilisez les flèches ← → ou cliquez sur les indicateurs
            </div>

            <style jsx>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default ProductsCarousel;