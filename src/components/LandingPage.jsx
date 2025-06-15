import React from 'react';

const universities = [
  { name: "IIT Bombay", logo: "/universities/iitb.png" },
  { name: "IIT Delhi", logo: "/universities/iitd.png" },
  { name: "IIT Madras", logo: "/universities/iitm.png" },
  { name: "IIT Kanpur", logo: "/universities/iitk.png" },
  { name: "NIT Trichy", logo: "/universities/nitt.png" },
  { name: "NIT Surathkal", logo: "/universities/nits.png" },
  { name: "Delhi University", logo: "/universities/du.png" },
  { name: "BHU", logo: "/universities/bhu.png" },
  { name: "JNU", logo: "/universities/jnu.png" },
  { name: "VIT", logo: "/universities/vit.png" }
];



function LandingPage() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <header className="text-center py-10 bg-white shadow">
        <h1 className="text-3xl font-bold text-blue-600">Micro Information Technology Services (MITS)</h1>
        <p className="text-lg mt-2">Empowering Education and Innovation through Digital Solutions.</p>
      </header>

      <main className="p-6">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">Affiliated Universities</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
           {universities.map((uni, index) => (
  <div key={index} className="bg-white p-4 border rounded shadow text-center transform transition-transform duration-300 hover:scale-105">

    <img
      src={uni.logo}
      alt={`${uni.name} logo`}
      className="mx-auto mb-2 h-20 w-auto object-contain"
    />
    <p className="text-sm font-medium">{uni.name}</p>
  </div>
))}
 
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Social Reach</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white p-6 rounded shadow w-full md:w-64 text-center hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-pink-600">📸 Instagram</h3>
              <p className="mt-2">20k+ followers</p>
            </div>
            <div className="bg-white p-6 rounded shadow w-full md:w-64 text-center hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-blue-700">💼 LinkedIn</h3>
              <p className="mt-2">500+ connections</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
