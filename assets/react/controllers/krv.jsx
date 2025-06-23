import React, { useState, useEffect } from 'react';

// Navigation Component
const Navigation = ({ activeSection, setActiveSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'accueil', label: 'Accueil', icon: '🏠' },
        { id: 'services', label: 'Services', icon: '🔧' },
        { id: 'produits', label: 'Produits', icon: '📦' },
        { id: 'marques', label: 'Marques', icon: '🏆' },
        { id: 'galerie', label: 'Galerie', icon: '🖼️' },
        { id: 'contact', label: 'Contact', icon: '📞' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-blue-900/95 backdrop-blur-md shadow-lg' 
                : 'bg-gradient-to-r from-blue-900 to-blue-800'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            🚗
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-white">KR-V</h1>
                            <p className="text-blue-200 text-sm">Magasin Auto</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                                    activeSection === item.id
                                        ? 'bg-blue-600 text-white'
                                        : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                                }`}
                            >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-blue-800 rounded-lg mt-2 p-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="w-full flex items-center space-x-3 px-4 py-3 text-left text-blue-100 hover:bg-blue-700 rounded-lg transition-colors"
                            >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

// Hero Section Component
const HeroSection = () => {
    return (
        <section id="accueil" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 bg-opacity-20 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                        MAGASIN <span className="text-cyan-300">KR-V</span>
                    </h1>
                    <p className="text-2xl md:text-3xl mb-8 text-blue-100">
                        Fournitures • Consommables • Matériels
                    </p>
                    <div className="text-xl md:text-2xl mb-8 space-y-2">
                        <p className="text-cyan-300 font-semibold">CARROSSERIE</p>
                        <p className="text-blue-200">PRÉPARATION DE PEINTURE</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <a
                            href="#services"
                            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
                        >
                            🔧 Nos Services
                        </a>
                        <a
                            href="#contact"
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                        >
                            📞 Nous Contacter
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-lg">
                        <div className="flex items-center">
                            <span className="text-cyan-300 mr-3 text-xl">📍</span>
                            <span>12 Rue des Buttes Blanches, 77100 Meaux</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-cyan-300 mr-3 text-xl">🕘</span>
                            <span>09:00 - 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Services Section Component
const ServicesSection = () => {
    const services = [
        {
            icon: '🎨',
            title: 'Peinture Automobile',
            description: 'Fournitures complètes pour la peinture et préparation de carrosserie',
            features: ['Peintures professionnelles', 'Vernis et apprêts', 'Produits de préparation', 'Matériel de pulvérisation']
        },
        {
            icon: '🚗',
            title: 'Carrosserie',
            description: 'Matériels et consommables pour tous vos travaux de carrosserie',
            features: ['Outils de débosselage', 'Mastics et colles', 'Abrasifs', 'Protection']
        },
        {
            icon: '⚙️',
            title: 'Mécanique',
            description: 'Service mécanique complet pour tous types de véhicules',
            features: ['Diagnostic', 'Réparation moteur', 'Entretien', 'Pièces détachées']
        },
        {
            icon: '🪑',
            title: 'Sellerie',
            description: 'Rénovation et personnalisation de sellerie automobile',
            features: ['Réparation sièges', 'Housses sur mesure', 'Cuir et tissu', 'Personnalisation']
        },
        {
            icon: '🎯',
            title: 'Covering',
            description: 'Habillage et personnalisation de véhicules',
            features: ['Films adhésifs', 'Covering total', 'Marquage publicitaire', 'Protection']
        },
        {
            icon: '🔧',
            title: 'Dépannage',
            description: 'Service de dépannage rapide et efficace',
            features: ['Intervention rapide', 'Dépannage 24h/7j', 'Remorquage', 'Diagnostic sur place']
        }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nos <span className="text-blue-600">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Magasin KR-V vous propose une gamme complète de services pour tous vos besoins automobiles
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <span className="text-green-500 mr-3">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Products Section Component
const ProductsSection = () => {
    const productCategories = [
        {
            title: 'Peintures & Vernis',
            icon: '🎨',
            products: ['Peintures base eau', 'Peintures solvantées', 'Vernis brillant/mat', 'Apprêts garnissants', 'Durcisseurs']
        },
        {
            title: 'Préparation',
            icon: '🧴',
            products: ['Dégraissants', 'Mastics', 'Primaires', 'Produits de masquage', 'Abrasifs']
        },
        {
            title: 'Matériel de Pulvérisation',
            icon: '🔫',
            products: ['Pistons HVLP', 'Compresseurs', 'Cabines de peinture', 'Aspirateurs', 'Accessoires']
        },
        {
            title: 'Consommables',
            icon: '📦',
            products: ['Papiers masquage', 'Films protection', 'Bâches', 'Combinaisons', 'Gants']
        }
    ];

    return (
        <section id="produits" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nos <span className="text-blue-600">Produits</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Large gamme de produits professionnels pour la carrosserie et la peinture automobile
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {productCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {category.products.map((product, idx) => (
                                    <li key={idx} className="text-gray-600 text-sm">
                                        • {product}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Commande sur Mesure</h3>
                        <p className="text-lg mb-6">
                            Produit non disponible ? Nous pouvons commander spécialement pour vous !
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            📞 Contactez-nous
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Brands Section Component
const BrandsSection = () => {
    const brands = [
        'APP', 'PREVOST', 'ANEST IWATA', 'GYS', 'SATA', 'MIPA', 'TROTON', 'MIRKA', 'FINIXA'
    ];

    return (
        <section id="marques" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nos <span className="text-blue-600">Marques</span> Partenaires
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nous travaillons avec les meilleures marques du secteur automobile
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-6 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 border"
                        >
                            <span className="text-xl font-bold text-gray-700">{brand}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Qualité Professionnelle</h3>
                    <p className="text-lg">
                        Tous nos produits sont sélectionnés pour leur qualité et leur performance, 
                        utilisés par les professionnels de la carrosserie.
                    </p>
                </div>
            </div>
        </section>
    );
};

// Gallery Section Component
const GallerySection = () => {
    const galleryItems = [
        { type: 'Peinture', description: 'Cabine de peinture professionnelle', icon: '🎨' },
        { type: 'Carrosserie', description: 'Atelier de carrosserie équipé', icon: '🔧' },
        { type: 'Matériel', description: 'Équipements de dernière génération', icon: '⚙️' },
        { type: 'Produits', description: 'Large gamme de produits', icon: '📦' },
        { type: 'Service', description: 'Équipe de professionnels', icon: '👥' },
        { type: 'Magasin', description: 'Showroom et espace conseil', icon: '🏪' }
    ];

    return (
        <section id="galerie" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Notre <span className="text-cyan-400">Galerie</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Découvrez nos installations et notre expertise en images
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl overflow-hidden h-64 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{item.type}</h3>
                                    <p className="text-gray-200">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-lg">
                        Visitez notre magasin pour découvrir tous nos équipements et produits
                    </p>
                </div>
            </div>
        </section>
    );
};

// Contact Section Component
const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        alert('Merci pour votre message ! Nous vous contacterons bientôt.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Nous <span className="text-cyan-400">Contacter</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Une question ? Un devis ? N'hésitez pas à nous contacter
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-6">Informations de Contact</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <span className="text-cyan-400 text-xl w-6">📍</span>
                                    <div>
                                        <p className="font-semibold">Adresse</p>
                                        <p className="text-gray-300">12 Rue des Buttes Blanches<br />77100 Meaux</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <span className="text-cyan-400 text-xl w-6">📞</span>
                                    <div>
                                        <p className="font-semibold">Téléphones</p>
                                        <p className="text-gray-300">09 82 71 77 77</p>
                                        <p className="text-gray-300">06 09 30 98 81</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <span className="text-cyan-400 text-xl w-6">✉️</span>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p className="text-gray-300">magasinkrv77@gmail.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-3">
                                    <span className="text-cyan-400 text-xl w-6">🕘</span>
                                    <div>
                                        <p className="font-semibold">Horaires</p>
                                        <p className="text-gray-300">Lundi - Vendredi : 09:00 - 18:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-cyan-600 rounded-xl p-6 text-white">
                            <h4 className="text-xl font-bold mb-3">Service Client</h4>
                            <p className="mb-4">
                                Notre équipe est à votre disposition pour tous renseignements et conseils techniques.
                            </p>
                            <div className="flex space-x-4">
                                <button className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                    📞 Appeler
                                </button>
                                <button className="border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                                    ✉️ Email
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un Message</h3>
                        
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Nom *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Votre téléphone"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="votre@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Sujet</label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Sélectionnez un sujet</option>
                                    <option value="devis">Demande de devis</option>
                                    <option value="produit">Question sur un produit</option>
                                    <option value="service">Question sur un service</option>
                                    <option value="commande">Passer une commande</option>
                                    <option value="autre">Autre</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="Décrivez votre demande..."
                                ></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                            >
                                ✈️ Envoyer le Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                🚗
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">KR-V</h3>
                                <p className="text-gray-400 text-sm">Magasin Auto</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Votre spécialiste en fournitures de carrosserie, peinture automobile et matériels professionnels à Meaux.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
                                📘
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
                                📷
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
                                💼
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Peinture Automobile</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Carrosserie</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Mécanique</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Sellerie</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Covering</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Dépannage</a></li>
                        </ul>
                    </div>

                    {/* Produits */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Nos Produits</h4>
                        <ul className="space-y-3">
                            <li><a href="#produits" className="text-gray-400 hover:text-cyan-400 transition-colors">Peintures & Vernis</a></li>
                            <li><a href="#produits" className="text-gray-400 hover:text-cyan-400 transition-colors">Préparation</a></li>
                            <li><a href="#produits" className="text-gray-400 hover:text-cyan-400 transition-colors">Matériel Pulvérisation</a></li>
                            <li><a href="#produits" className="text-gray-400 hover:text-cyan-400 transition-colors">Consommables</a></li>
                            <li><a href="#marques" className="text-gray-400 hover:text-cyan-400 transition-colors">Grandes Marques</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact</h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <span className="text-cyan-400 mt-1">📍</span>
                                <div>
                                    <p className="text-gray-400">12 Rue des Buttes Blanches</p>
                                    <p className="text-gray-400">77100 Meaux</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <span className="text-cyan-400">📞</span>
                                <div>
                                    <p className="text-gray-400">09 82 71 77 77</p>
                                    <p className="text-gray-400">06 09 30 98 81</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-cyan-400">✉️</span>
                                <p className="text-gray-400">magasinkrv77@gmail.com</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-cyan-400">🕘</span>
                                <p className="text-gray-400">09:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 Magasin KR-V. Tous droits réservés.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Mentions légales</a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Politique de confidentialité</a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">CGV</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Main App Component
const App = () => {
    const [activeSection, setActiveSection] = useState('accueil');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['accueil', 'services', 'produits', 'marques', 'galerie', 'contact'];
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen">
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
            <HeroSection />
            <ServicesSection />
            <ProductsSection />
            <BrandsSection />
            <GallerySection />
            <ContactSection />
            <Footer />
            
            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 text-xl"
            >
                ⬆️
            </button>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/33609309881"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 left-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 text-xl"
            >
                💬
            </a>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default App;