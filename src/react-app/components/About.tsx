import { Lightbulb, Users, Globe } from 'lucide-react';

export default function About() {
  const strengths = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "In-house Teams",
      description: "Dedicated firmware, PCB & mechanical design teams under one roof"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Proven Solutions",
      description: "Established IoT, AI voice, and energy management solutions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Industry Coverage",
      description: "From manufacturing to hospitality to infrastructure solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            About PCS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              PCS was founded to unify hardware, firmware, and AI innovation under one roof. 
              We believe in creating comprehensive solutions that bridge the gap between 
              cutting-edge technology and real-world applications.
            </p>
            
            <div className="space-y-6">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 flex-shrink-0">
                    {strength.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{strength.title}</h3>
                    <p className="text-gray-400">{strength.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-6 bg-black/50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="p-6 bg-black/50 rounded-lg">
                  <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
                  <div className="text-gray-300">Projects Delivered</div>
                </div>
                <div className="p-6 bg-black/50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="p-6 bg-black/50 rounded-lg">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
