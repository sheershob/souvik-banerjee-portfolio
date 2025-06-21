import { Analytics } from '@vercel/analytics/react';
import img1 from './assets/12715627_10207582316812187_4496425802459181967_n.jpg';
import img2 from './assets/berhampore.jpg';
import img3 from './assets/baba2.jpg';
import img4 from './assets/lighted evening.jpg';
import img5 from './assets/ladakh.jpg';
import img6 from './assets/pp.jpg';

function App() {
  return (
    <div className="bg-blue-50 text-gray-800">
      <header className="bg-white text-gray-800 p-4 shadow-lg sticky top-0 z-10">
        <h1 className="text-3xl font-extrabold text-center tracking-wider">Souvik Banerjee</h1>
      </header>
      <main className="p-4 sm:p-6 lg:p-8">
        <section id="bio" className="my-8 max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">Bio</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            An engineer by day, my true passion lies in photography. I'm captivated by the world through my lens, specializing in travel, astrophotography, landscapes, heritage, people, and street photography. I love stepping out to capture the stories the world has to tell.
          </p>
        </section>

        <section id="photography" className="my-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Photography</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {[img6, img2, img3, img4, img5].map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 bg-white">
                <img src={img} alt={`Photography ${index + 1}`} className="w-full h-full object-cover rounded-md transform hover:scale-110 transition-transform duration-300 ease-in-out"/>
              </div>
            ))}
          </div>
        </section>

        <section id="family" className="my-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Family</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 bg-white">
              <img src={img1} alt="Family 1" className="w-full h-full object-cover rounded-md transform hover:scale-110 transition-transform duration-300 ease-in-out"/>
            </div>
            {[...Array(2)].map((_, index) => (
              <div key={index} className="bg-gray-200 h-64 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"></div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-white text-gray-700 p-4 text-center mt-8">
        <p>&copy; 2025 Souvik Banerjee. All rights reserved.</p>
      </footer>
      <Analytics />
    </div>
  )
}

export default App
