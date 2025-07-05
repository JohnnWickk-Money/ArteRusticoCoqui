import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MessageCircle, 
  Facebook,
  Hammer,
  Palette,
  Shield,
  Users,
  Award,
  CheckCircle,
  MapPin,
  Clock,
  Star
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Hammer className={`h-8 w-8 transition-colors duration-300 ${
                isScrolled ? 'text-amber-800' : 'text-white'
              }`} />
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-amber-800' : 'text-white'
              }`}>
                Arte Rústico Carpintería
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Inicio', 'Acerca de', 'Servicios', 'Galería', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`transition-colors duration-300 hover:text-amber-400 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-800"></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Arte Rústico <span className="text-amber-300">Carpintería</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delayed">
            Tradición, calidad y arte en cada pieza de madera
          </p>
          <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto animate-fade-in-delayed-2">
            Especialistas en métodos tradicionales de carpintería con más de una década de experiencia 
            creando muebles únicos, restauraciones excepcionales y tallados artesanales
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Ver Servicios
            </button>
            <button 
              onClick={() => scrollToSection('galería')}
              className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Ver Trabajos
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Acerca de Section */}
      <section id="acerca-de" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                Maestro en el Arte de la Madera
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestra carpintería se basa en los métodos tradicionales transmitidos de generación en generación. 
                Cada pieza que creamos es única, trabajada con herramientas clásicas y técnicas artesanales 
                que respetan la naturaleza y belleza de la madera.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos especializamos en crear muebles rústicos que combinan funcionalidad con estética, 
                restaurar piezas antiguas devolviéndoles su esplendor original, y realizar tallados 
                artesanales que convierten cada trabajo en una obra de arte.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700 font-medium">Métodos Tradicionales</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700 font-medium">100% Artesanal</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-900 to-yellow-800 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Filosofía de Trabajo</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <Star className="h-5 w-5 text-amber-300 mt-0.5" />
                    <span>Respeto por las técnicas ancestrales</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-5 w-5 text-amber-300 mt-0.5" />
                    <span>Selección cuidadosa de maderas nobles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-5 w-5 text-amber-300 mt-0.5" />
                    <span>Atención personalizada en cada proyecto</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Star className="h-5 w-5 text-amber-300 mt-0.5" />
                    <span>Compromiso con la calidad y durabilidad</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios especializados en carpintería rústica, 
              cada uno ejecutado con la máxima dedicación y técnicas tradicionales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Hammer className="h-12 w-12" />,
                title: "Muebles Rústicos",
                description: "Creación de muebles únicos con diseños tradicionales y funcionales para tu hogar"
              },
              {
                icon: <Palette className="h-12 w-12" />,
                title: "Restauración",
                description: "Devolución del esplendor original a muebles antiguos con técnicas especializadas"
              },
              {
                icon: <Award className="h-12 w-12" />,
                title: "Tallado Rústico",
                description: "Trabajos artesanales de tallado que convierten la madera en obras de arte"
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Puertas y Ventanas",
                description: "Fabricación e instalación de puertas y ventanas con diseños tradicionales"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-stone-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-amber-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-yellow-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-amber-300 mb-2">+10</div>
              <div className="text-xl font-semibold mb-1">Años de Experiencia</div>
              <div className="text-gray-300">Perfeccionando nuestro arte</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-amber-300 mb-2">100%</div>
              <div className="text-xl font-semibold mb-1">Garantía de Calidad</div>
              <div className="text-gray-300">En cada trabajo realizado</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-amber-300 mb-2">+500</div>
              <div className="text-xl font-semibold mb-1">Clientes Satisfechos</div>
              <div className="text-gray-300">Que confían en nuestro trabajo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galería" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Galería de Trabajos
            </h2>
            <p className="text-xl text-gray-600">
              Algunas de nuestras creaciones más destacadas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mesa de Comedor Rústica",
                category: "Muebles",
                image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Aparador Restaurado",
                category: "Restauración",
                image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Tallado Artesanal",
                category: "Tallado",
                image: "https://images.pexels.com/photos/5974074/pexels-photo-5974074.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Puerta Principal",
                category: "Puertas",
                image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Escritorio Tradicional",
                category: "Muebles",
                image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Ventana Artesanal",
                category: "Ventanas",
                image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Contacto
            </h2>
            <p className="text-xl text-gray-600">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-stone-50 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-amber-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Teléfono</h3>
              <p className="text-gray-600">+54 9 3329 61-9790</p>
            </div>
            
            <div className="text-center p-8 bg-stone-50 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600">+54 9 3329 61-9790</p>
            </div>
            
            <div className="text-center p-8 bg-stone-50 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Email</h3>
              <p className="text-gray-600">coquinlobato@gmail.com</p>
            </div>
            
            <div className="text-center p-8 bg-stone-50 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Facebook className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Facebook</h3>
              <p className="text-gray-600">Coqui Loba Carpin</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-amber-900 to-yellow-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h3>
              <p className="text-lg mb-6">
                Contáctanos para recibir una consulta personalizada y un presupuesto sin compromiso
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-5 w-5 text-amber-300" />
                <span>Horario de atención: Lunes a Viernes 8:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Hammer className="h-8 w-8 text-amber-300" />
                <span className="text-2xl font-bold">Arte Rústico Carpintería</span>
              </div>
              <p className="text-gray-300">
                Tradición y calidad en cada pieza. Especialistas en métodos tradicionales 
                de carpintería con más de una década de experiencia.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Muebles Rústicos</li>
                <li>• Restauración</li>
                <li>• Tallado Artesanal</li>
                <li>• Puertas y Ventanas</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <p>📱 +54 9 3329 61-9790</p>
                <p>📧 coquinlobato@gmail.com</p>
                <p>📍 Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Arte Rústico Carpintería. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;