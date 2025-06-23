import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                <i className="fas fa-car text-white text-xl"></i>
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
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <i className="fab fa-facebook-f text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <i className="fab fa-linkedin-in text-xl"></i>
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
                                <i className="fas fa-map-marker-alt text-cyan-400 mt-1"></i>
                                <div>
                                    <p className="text-gray-400">12 Rue des Buttes Blanches</p>
                                    <p className="text-gray-400">77100 Meaux</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <i className="fas fa-phone text-cyan-400 mt-1"></i>
                                <div>
                                    <p className="text-gray-400">09 82 71 77 77</p>
                                    <p className="text-gray-400">06 09 30 98 81</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <i className="fas fa-envelope text-cyan-400 mt-1"></i>
                                <p className="text-gray-400">magasinkrv77@gmail.com</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <i className="fas fa-clock text-cyan-400 mt-1"></i>
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

export default Footer;