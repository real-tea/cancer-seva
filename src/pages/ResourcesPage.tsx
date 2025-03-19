import React from 'react';
import { Guitar as Hospital, Phone, Mail, Globe } from 'lucide-react';

const ResourcesPage = () => {
  const hospitals = [
    {
      name: "Tata Memorial Hospital",
      location: "Mumbai, Maharashtra",
      specialties: ["Medical Oncology", "Surgical Oncology", "Radiation Therapy"],
      contact: {
        phone: "+91-22-24177000",
        email: "contact@tmh.org",
        website: "https://tmc.gov.in"
      },
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "All India Institute of Medical Sciences",
      location: "New Delhi",
      specialties: ["Cancer Research", "Advanced Treatment", "Pediatric Oncology"],
      contact: {
        phone: "+91-11-26588500",
        email: "contact@aiims.edu",
        website: "https://www.aiims.edu"
      },
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Kidwai Memorial Institute of Oncology",
      location: "Bangalore, Karnataka",
      specialties: ["Radiation Oncology", "Surgical Oncology", "Nuclear Medicine"],
      contact: {
        phone: "+91-80-26094000",
        email: "info@kidwai.org",
        website: "https://kidwai.karnataka.gov.in"
      },
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-900 mb-4">Cancer Treatment Resources</h1>
        <p className="text-xl text-gray-600">
          Leading cancer treatment centers across India providing world-class care
        </p>
      </section>

      <div className="grid grid-cols-1 gap-8">
        {hospitals.map((hospital, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="flex items-center mb-4">
                  <Hospital className="h-6 w-6 text-purple-600 mr-2" />
                  <h2 className="text-2xl font-bold text-purple-900">{hospital.name}</h2>
                </div>
                <p className="text-gray-600 mb-4">{hospital.location}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Specialties:</h3>
                  <div className="flex flex-wrap gap-2">
                    {hospital.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-500 mr-2" />
                    <a href={`tel:${hospital.contact.phone}`} className="text-blue-600 hover:underline">
                      {hospital.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500 mr-2" />
                    <a href={`mailto:${hospital.contact.email}`} className="text-blue-600 hover:underline">
                      {hospital.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-gray-500 mr-2" />
                    <a href={hospital.contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-purple-50 rounded-xl p-8 mt-12">
        <h2 className="text-2xl font-bold text-purple-900 mb-4">Additional Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Support Groups</h3>
            <p className="text-gray-600">
              Connect with other patients and survivors through our network of support groups across India.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Educational Materials</h3>
            <p className="text-gray-600">
              Access comprehensive guides and information about different types of cancer, treatments, and recovery.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;