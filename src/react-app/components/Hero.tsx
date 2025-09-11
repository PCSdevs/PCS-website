import { ArrowRight, Zap, Brain, Cpu } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-8">
          <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-400/30">
            <Zap className="w-8 h-8 text-blue-400" />
          </div>
          <div className="p-3 bg-green-500/20 rounded-lg border border-green-400/30">
            <Brain className="w-8 h-8 text-green-400" />
          </div>
          <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-400/30">
            <Cpu className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-green-400 bg-clip-text text-transparent">
          Pal Consultancy Services
        </h1>
        
        <div className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300">
          (PCS)
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Engineering Firmware, Power, and AI for Tomorrow
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
          PCS is a multi-disciplinary engineering company providing innovative solutions in firmware, 
          PCB design, mechanical engineering, IoT, AI, hospitality tech, and power management systems.
        </p>
        
        <button
          onClick={() => scrollToSection('portfolio')}
          className="group bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
        >
          Explore Our Work
          <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
