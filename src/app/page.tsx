import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Map from "@/components/sections/Map";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Box from "@/components/sections/Box";
import Message from "@/components/sections/Message";
import Profile from "@/components/sections/Profile";
import Contact from "@/components/sections/Contact";
import Logos from "@/components/sections/LogoFlag";
import ScrollTopButton from "@/components/ui/ScrollTopButton";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />

      {/* Company Section */}
      <section id="Company" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Company
          </h2>
        </div>

        {/* Our Mission */}
        <div className="bg-gradient-to-r from-black via-black to-yellow-700 py-16 text-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We create fun moments through capsule toys wherever joy is needed.
          </p>
        </div>

        {/* Media Coverage */}
        <div className="max-w-4xl mx-auto px-4 mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Media Coverage
          </h3>

          {/* Video */}
          <div className="flex justify-center mb-8">
            <video
              className="elementor-video w-full max-w-3xl rounded-lg shadow-lg"
              src="https://tamate.co/wp-content/uploads/2025/07/gachirimanday.mp4"
              controls
              preload="metadata"
              controlsList="nodownload"
            />
          </div>

          <p className="text-center text-gray-700 mb-8">
            Matsui's interview was published in{" "}
            <a href="#" className="text-blue-600 hover:underline font-semibold">
              Business Journal
            </a>{" "}
            on September 6, 2022.
          </p>
        </div>

        <div className="py-4 bg-white mt-16">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 border-b-4 border-gray-100">
              Our Partners
            </h3>
          </div>
        </div>

        <Logos />
        <Message />
        {/* Profile Section */}
        <Profile />
      </section>

      {/* Contact Section */}

      <ScrollTopButton />
      <Contact />
      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white">©tamate.co</p>
        </div>
      </footer>
    </div>
  );
}
