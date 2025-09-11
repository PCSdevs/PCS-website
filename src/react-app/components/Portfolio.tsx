import { Factory, Mic, UtensilsCrossed, Building2 } from 'lucide-react';

export default function Portfolio() {
  const caseStudies = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Industrial Power Solutions",
      product: "Pay2Power",
      description: "Deployed in CNC/3D printer industries to ensure recurring billing and prevent equipment misuse.",
      results: [
        "100% payment recovery rate",
        "Reduced equipment downtime by 40%",
        "Created new revenue streams for manufacturers"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "AI Voice Integration",
      product: "NeuroVerse",
      description: "Integrated in enterprise & hospitality sectors for automated customer service and support.",
      results: [
        "90% reduction in response time",
        "24/7 customer support availability",
        "Cost savings of 60% vs traditional call centers"
      ],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop"
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Smart Dining Revolution",
      product: "Serve Sphere",
      description: "Installed in restaurants to modernize service delivery and enhance customer experience.",
      results: [
        "50% faster service response",
        "95% customer satisfaction improvement",
        "Reduced staff workload by 30%"
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Smart Infrastructure",
      product: "Parking Ease",
      description: "Piloted in malls/hotels for efficient slot management and improved customer experience.",
      results: [
        "70% reduction in parking search time",
        "Increased parking space utilization by 25%",
        "Enhanced customer satisfaction scores"
      ],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Portfolio & Case Studies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world implementations delivering measurable results across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 backdrop-blur-sm border border-blue-500/30">
                    {study.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{study.title}</h3>
                    <p className="text-green-400 font-semibold">{study.product}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
