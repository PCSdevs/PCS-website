import { Zap, Brain, UtensilsCrossed, Car, CheckCircle } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Pay2Power (IntelliPower Guard)",
      subtitle: "Smart Payment-Enabled Hardware Platform",
      description: "A revolutionary pay-to-use smart hardware and software platform that transforms traditional equipment sales into sustainable recurring revenue models. Our solution enables vendors to maintain complete control over their equipment while ensuring guaranteed payment recovery through integrated hardware-software security protocols.",
      howItWorks: "Advanced IoT-enabled devices with embedded payment processors that activate equipment only after successful payment verification. Features real-time monitoring, automatic cutoff capabilities, usage analytics, and remote management through our cloud dashboard. Offline payment security ensures revenue protection even without internet connectivity.",
      industries: ["CNC machines", "3D printers", "Medical equipment", "Real estate equipment", "Construction tools"],
      benefits: [
        "Guarantees 100% payment recovery with automatic enforcement",
        "Prevents unauthorized equipment usage and theft",
        "Creates predictable recurring revenue streams",
        "Real-time usage monitoring and analytics",
        "Remote equipment management and diagnostics",
        "Reduces capital expenditure for customers through rental models"
      ],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "NeuroVerse (Voice AI Agents)",
      subtitle: "AI-Driven Conversational Platform",
      description: "Next-generation AI-powered voice and chat agents that deliver human-like conversational experiences at scale. Our platform leverages advanced natural language processing, machine learning, and contextual understanding to provide intelligent automation for customer interactions, internal workflows, and business processes.",
      howItWorks: "Powered by state-of-the-art language models with industry-specific training datasets. Features multi-language support, sentiment analysis, conversation memory, seamless handoff to human agents, and integration with existing CRM and business systems. Supports both voice calls and text-based interactions with real-time response generation.",
      industries: ["Call centers", "Hospitality", "Healthcare", "Enterprise workflows", "E-commerce", "Banking & Finance"],
      benefits: [
        "24/7 reliable service with zero downtime",
        "Reduced operational costs by up to 70%",
        "Handles unlimited concurrent conversations",
        "Intelligent routing and escalation protocols",
        "Comprehensive analytics and conversation insights",
        "Seamless integration with existing business systems",
        "Multi-language and multi-channel support"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <UtensilsCrossed className="w-12 h-12" />,
      title: "Serve Sphere (Restaurant Service Device)",
      subtitle: "Smart Restaurant Communication System",
      description: "Comprehensive smart dining solution that revolutionizes restaurant service delivery through innovative IoT devices and real-time communication systems. Our platform bridges the gap between customers and staff, creating seamless service experiences while optimizing operational efficiency and customer satisfaction.",
      howItWorks: "Dual-device ecosystem featuring self-service kiosks with order notification systems and sleek table-mounted service request devices. Customers receive instant notifications when orders are ready, while staff get real-time alerts for service requests. Integrated with kitchen display systems, POS integration, and comprehensive analytics dashboard for service optimization.",
      industries: ["Restaurants", "Cafes", "Food courts", "Hotels", "Bars & lounges", "Quick service restaurants"],
      benefits: [
        "Reduces average service response time by 60%",
        "Eliminates order confusion and missed notifications",
        "Provides real-time service performance analytics",
        "Enhances customer satisfaction through proactive service",
        "Streamlines staff workflow and task prioritization",
        "Integrates with existing POS and kitchen management systems",
        "Supports multilingual customer interfaces"
      ],
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Parking Ease (Smart Parking System)",
      subtitle: "Intelligent Parking Management Solution",
      description: "Advanced smart parking ecosystem featuring ceiling-mounted IoT sensors and intelligent guidance systems that transform parking management for large facilities. Our solution provides real-time space availability, automated guidance, and comprehensive parking analytics to maximize space utilization and enhance user experience.",
      howItWorks: "Network of ceiling-mounted sensors with computer vision and IoT connectivity detect vehicle presence in real-time. LED indicators show red for occupied and green for available spaces, while mobile apps provide navigation to nearest available spots. Central management system tracks usage patterns, generates reports, and enables dynamic pricing strategies.",
      industries: ["Shopping malls", "Hotels", "Office complexes", "Airports", "Hospitals", "Universities", "Event venues"],
      benefits: [
        "Reduces parking search time by up to 70%",
        "Increases parking space utilization by 35%",
        "Provides real-time availability through mobile apps",
        "Generates comprehensive usage analytics and reporting",
        "Supports dynamic pricing and reservation systems",
        "Reduces vehicle emissions from unnecessary circulation",
        "Enhances overall facility management efficiency"
      ],
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions transforming industries through smart technology
          </p>
        </div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 ${
                index % 2 === 1 ? 'lg:ml-16' : 'lg:mr-16'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${product.gradient} rounded-xl text-white`}>
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                      <p className="text-blue-300 font-semibold">{product.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">How it works:</h4>
                    <p className="text-gray-400">{product.howItWorks}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.industries.map((industry, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600/50">
                    <h4 className="text-lg font-semibold text-green-400 mb-4">Key Benefits:</h4>
                    <div className="space-y-3">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
