import React from 'react';
import { FiArrowRight, FiCheck, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">SaaS Builder</div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition">Pricing</a>
          <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition">Testimonials</a>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Build Your SaaS <span className="text-indigo-600">Without The Hassle</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            SaaS Builder helps you create stunning, production-ready applications with modern tools and best practices.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition flex items-center justify-center">
              Start Building <FiArrowRight className="ml-2" />
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Website showcase" 
            className="rounded-xl shadow-xl w-full h-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Amazing Features</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Modern Design",
                description: "Beautiful, responsive designs that work on any device",
                icon: <FiCheck className="text-indigo-600 text-xl" />
              },
              {
                title: "Blazing Fast",
                description: "Optimized for performance with minimal bundle sizes",
                icon: <FiCheck className="text-indigo-600 text-xl" />
              },
              {
                title: "Developer Friendly",
                description: "Clean code architecture with TypeScript support",
                icon: <FiCheck className="text-indigo-600 text-xl" />
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "/month",
                description: "Perfect for small projects",
                features: [
                  "1 Project",
                  "Basic Templates",
                  "Email Support",
                  "Community Access"
                ],
                highlight: false
              },
              {
                name: "Professional",
                price: "$99",
                period: "/month",
                description: "For growing businesses",
                features: [
                  "5 Projects",
                  "Premium Templates",
                  "Priority Support",
                  "API Access",
                  "Analytics Dashboard"
                ],
                highlight: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For large scale applications",
                features: [
                  "Unlimited Projects",
                  "Custom Templates",
                  "24/7 Support",
                  "Dedicated Account Manager",
                  "White-label Options"
                ],
                highlight: false
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-xl shadow-sm ${plan.highlight ? 'border-2 border-indigo-500 transform scale-105' : ''}`}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-indigo-600">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <FiCheck className="text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-3 rounded-full font-medium ${plan.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "SaaS Builder transformed how we build our products. The speed and quality are unmatched.",
                author: "Sarah Johnson",
                role: "Product Manager"
              },
              {
                quote: "As a developer, I love working with SaaS Builder. The code is clean and maintainable.",
                author: "Michael Chen",
                role: "Senior Developer"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of developers creating beautiful, production-ready applications with SaaS Builder.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-gray-100 transition font-semibold">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-white mb-2">SaaS Builder</div>
              <p className="text-gray-400">Build beautiful applications without compromise</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} SaaS Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;