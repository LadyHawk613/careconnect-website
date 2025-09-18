import './App.css'
import { Phone, Mail, MapPin, Shield, Lightbulb, Thermometer, Mic, AlertTriangle, Users } from 'lucide-react'
import smartHomeImage1 from './assets/smart_home_elderly_1.png'
import smartHomeImage2 from './assets/smart_home_elderly_2.png'
import smartHomeImage3 from './assets/smart_home_elderly_3.png'

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">CareConnect Smart Home</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-accent-foreground transition-colors">About</a>
            <a href="#services" className="hover:text-accent-foreground transition-colors">Services</a>
            <a href="#contact" className="hover:text-accent-foreground transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-muted">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Smart Home Solutions for Independent Living
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Empowering older adults with technology that enhances safety, comfort, and independence in their own homes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get Free Consultation
            </button>
            <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">About CareConnect Smart Home</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                At CareConnect Smart Home, we believe that everyone deserves to live independently and comfortably in their own home, regardless of age. We specialize in providing tailored smart home installation services designed specifically for older individuals, empowering them with greater independence, security, and peace of mind.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our compassionate team understands the unique needs of seniors and is dedicated to offering caring support and guidance every step of the way. We transform houses into smart homes, creating environments that are not only technologically advanced but also intuitively easy to use and deeply supportive of a fulfilling, independent lifestyle.
              </p>
            </div>
            <div className="relative">
              <img 
                src={smartHomeImage1} 
                alt="Elderly woman using smart home technology" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold text-card-foreground mb-3">Smart Lighting Solutions</h4>
              <p className="text-muted-foreground">
                Automate your home's lighting to enhance safety and convenience. Motion detection, voice control, and scheduled lighting to prevent falls and provide security.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold text-card-foreground mb-3">Intelligent Security Systems</h4>
              <p className="text-muted-foreground">
                Advanced smart security with video doorbells, motion sensors, and smart locks. Monitor and control from anywhere for complete peace of mind.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Thermometer className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold text-card-foreground mb-3">Automated Climate Control</h4>
              <p className="text-muted-foreground">
                Smart thermostats that learn your preferences and adjust automatically. Maintain comfort while reducing energy bills and environmental impact.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Mic className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold text-card-foreground mb-3">Voice-Activated Assistants</h4>
              <p className="text-muted-foreground">
                Hands-free control with Amazon Alexa or Google Assistant. Play music, set reminders, make calls, and get news updates with simple voice commands.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <AlertTriangle className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold text-card-foreground mb-3">Emergency Alert Systems</h4>
              <p className="text-muted-foreground">
                Wearable devices and strategically placed buttons that instantly connect you to help. Alert family, caregivers, or emergency services when needed.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold text-card-foreground mb-3">Personalized Consultation</h4>
              <p className="text-muted-foreground">
                Every home is unique. We provide personalized consultations, complete setup, configuration, testing, and user training for your comfort and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">See Smart Home Technology in Action</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <img 
                src={smartHomeImage2} 
                alt="Elderly man using voice assistant" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded">
                <p className="text-sm">Voice-controlled smart home automation</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={smartHomeImage3} 
                alt="Smart security camera in living room" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white p-3 rounded">
                <p className="text-sm">Advanced security monitoring systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
          <p className="text-xl mb-12">Ready to make your home smarter and more supportive? Contact CareConnect Smart Home today for a personalized consultation.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-3" />
              <h4 className="font-semibold mb-2">Phone</h4>
              <p>(555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-3" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p>info@careconnectsmarthome.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <h4 className="font-semibold mb-2">Address</h4>
              <p>123 Smart Home Lane  
Independence City, CA 90210</p>
            </div>
          </div>

          <p className="text-lg">We look forward to helping you achieve greater independence and peace of mind through smart home technology.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2025 CareConnect Smart Home. All rights reserved.</p>
          <p className="mt-2 text-sm">Empowering independence through smart technology.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
