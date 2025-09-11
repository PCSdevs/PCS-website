import { 
  Cpu, 
  CircuitBoard, 
  Wrench, 
  Wifi, 
  Monitor, 
  Mic, 
  Zap, 
  UtensilsCrossed, 
  Car 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Firmware Development",
      description: "Custom embedded code for devices"
    },
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "PCB Design",
      description: "High-performance electronic board layouts"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Mechanical Engineering",
      description: "Hardware and enclosures designed in-house"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "IoT Solutions",
      description: "Smart connected devices for businesses"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Software Development",
      description: "Dashboards, apps, analytics"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice AI (NeuroVerse)",
      description: "AI agents for enterprises"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy & Power Systems (Pay2Power)",
      description: "Pay-to-use power devices"
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Hospitality Devices (Serve Sphere)",
      description: "Restaurant customer service tech"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Smart Parking Solutions (Parking Ease)",
      description: "Real-time parking availability systems"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive engineering solutions spanning hardware, software, and AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-lg w-fit mb-4 group-hover:from-blue-500/30 group-hover:to-green-500/30 transition-all">
                <div className="text-blue-400 group-hover:text-green-400 transition-colors">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
