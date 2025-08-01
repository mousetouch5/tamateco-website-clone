import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Image
                src="https://ext.same-assets.com/3014677206/3409248070.svg"
                alt="tamateco"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#top" className="text-gray-900 hover:text-gray-600 transition-colors">TOP</a>
              <a href="#about" className="text-gray-900 hover:text-gray-600 transition-colors">About</a>
              <a href="#company" className="text-gray-900 hover:text-gray-600 transition-colors">Company</a>
              <a href="#contact" className="text-gray-900 hover:text-gray-600 transition-colors">Contact</a>
            </nav>
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/3014677206/3326430854.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Gacha<sup className="text-2xl md:text-4xl">2</sup> Japan's proud contribution<br />
            to global culture.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
            About tamateco?
          </h2>
        </div>

        {/* Tamateco Branding Section */}
        <div className="bg-black py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h3 className="text-6xl md:text-8xl font-bold text-white mb-8">
              tamateco
            </h3>
            <p className="text-xl md:text-2xl text-white mb-12">
              technology × economic • ecology
            </p>
            <h4 className="text-3xl md:text-5xl font-bold text-white mb-12 leading-tight">
              A serendipitous discovery,<br />
              like a treasure chest.
            </h4>
            <div className="space-y-4 text-lg md:text-xl text-white">
              <p><strong>tec</strong> : technology</p>
              <p><strong>eco</strong>: eco • ecology</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Sharing Japan's Gacha Culture with the World.
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Born in Japan, Gacha is now spreading and gaining momentum in every corner of the globe.
              Our mission is to take Japan's unique 'Galapagos' Gacha and elevate it to a global standard.
            </p>
          </div>
        </div>

        {/* Gacha Machine Image */}
        <div className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <Image
              src="https://ext.same-assets.com/3014677206/696419728.jpeg"
              alt="Futuristic gacha machines"
              width={1200}
              height={800}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Company
          </h2>
        </div>

        {/* Our Mission */}
        <div className="bg-black py-20 mb-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <p className="text-lg text-white mb-4">Our Mission</p>
            <h3 className="text-4xl md:text-6xl font-bold text-white">
              Creating Fun Moments
            </h3>
          </div>
        </div>

        {/* Message Section */}
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Message
          </h3>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
            <p>
              Our startup is not just an extension of a business—it's the first step in a bold challenge
              to create the new future of Gacha<sup>2</sup>.
            </p>
            <p>
              After graduating from university, I joined Lulark Co., Ltd. (formerly Daichou Shouji Co., Ltd.)
              and immersed myself in the Gacha<sup>2</sup> industry. I started in field sales and worked my way up to
              store manager, area manager, and buyer, eventually returning to the capsule toy division after about ten years.
            </p>
            <p>
              Six months after being reassigned as deputy division head, I was promoted to division head.
              In just one year, I succeeded in turning around a business that had been unprofitable for the
              past 20 years and made it profitable.
            </p>
            <p>
              Later, I envisioned a capsule toy specialty store called "Gacha Gacha Forest."
              Overcoming internal opposition, I made it a reality. Within just seven years, this new venture
              grew to a scale of 10 billion yen in sales, completely transforming the business model of the
              capsule toy industry. Thanks to this initiative, the domestic market expanded nearly four times.
            </p>
            <p>
              However, with growth comes maturity, and the limits of the domestic market have become clear.
            </p>
            <p>
              But the global market still holds unlimited potential. However, within the existing framework,
              speed and freedom are limited. To overcome this dilemma and bring the future I envision to life,
              I chose the path of entrepreneurship.
            </p>
            <p className="font-semibold">
              The company's goal is to build a global platform as a new offline business. We are fully
              committed to becoming a unicorn company at the heart of this vision.
            </p>
          </div>
        </div>

        {/* Media Coverage */}
        <div className="max-w-4xl mx-auto px-4 mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Media Coverage
          </h3>
          <p className="text-center text-gray-700 mb-8">
            Matsui's interview was published in <a href="#" className="text-blue-600 hover:underline font-semibold">Business Journal</a> on September 6, 2022.
          </p>
        </div>

        {/* Profile Section */}
        <div className="max-w-4xl mx-auto px-4 mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Profile
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://ext.same-assets.com/3014677206/992611019.jpeg"
                alt="CEO IPPEI MATSUI"
                width={400}
                height={500}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-600 mb-1">CEO</h4>
                <h5 className="text-2xl font-bold text-gray-900">IPPEI MATSUI - 松井 一平 -</h5>
              </div>
              <div>
                <h6 className="font-semibold text-gray-900 mb-3">– Background –</h6>
                <p className="text-gray-700 leading-relaxed">
                  I started practicing Karate in the first grade of elementary school and earned six 3rd-place
                  finishes at regional tournaments by the time I graduated middle school. In university, I transitioned
                  to Taekwondo and, by the second year of my career, I retired after achieving four 1st-place finishes
                  at the Kyushu Tournament, 2nd place at the All-Japan Championship, and 1st place in the selection
                  for the World University Championship.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Although the World University Championship was canceled due to security concerns in the host country,
                  my desire to compete on the world stage continues to drive and motivate me to this day.
                </p>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex">
                <span className="text-gray-600 w-20">会社名</span>
                <span className="text-gray-900">Tamateco Co., Ltd.</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-20">設立</span>
                <span className="text-gray-900">2025年April</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-20">代表者</span>
                <div className="text-gray-900">
                  <div>CEO</div>
                  <div>IPPEI MATSUI – 松井一平 –</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex">
                <span className="text-gray-600 w-20">住所</span>
                <div className="text-gray-900">
                  <div className="font-semibold">Tamateco Co., Ltd.</div>
                  <div>Fukuoka Growth Next, 2-6-11 Daimyo,</div>
                  <div>Chuo-ku, Fukuoka City, Fukuoka 810-0041, Japan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            Contact
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg">
            We will respond to your inquiry within 2 business days.
          </p>
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-gray-700">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="IPPEI MATSUI"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="company" className="text-gray-700">
                Company Name
              </Label>
              <Input
                id="company"
                type="text"
                placeholder="tamateco.co.Ltd"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700">
                E-mail <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="info@tamate.co"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-gray-700">
                Contact number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="092-0000-0000"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="inquiry" className="text-gray-700">
                Inquiry details <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="inquiry"
                placeholder="Please enter your inquiry."
                className="mt-1 min-h-32"
                required
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
              >
                送信
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white">©tamate.co</p>
        </div>
      </footer>
    </div>
  );
}