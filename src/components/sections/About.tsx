import Box from "@/components/sections/Box";

export default function About() {
  return (
    <section id="About" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          About <span className="text-yellow-500">tamateco</span>
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          Inspired by the Japanese folktale <strong>Urashima Tarou</strong> a
          tale of time, wonder, and discovery{" "}
          <span className="font-semibold">tamateco</span> opens a treasure chest
          for the world through technology and playful culture.
        </p>
      </div>

      {/* Branding Block */}
      <div className="flex flex-wrap mx-auto mt-12 gap-8">
        <div className="bg-black py-16 mt-12 rounded-lg max-w-3xl mx-auto shadow-xl px-6">
          <div className="text-center px-6">
            <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              tamateco
            </h3>
            <p className="text-xl text-white mb-6 italic">
              technology × economic • ecology
            </p>
            <h4 className="text-2xl md:text-3xl font-semibold text-white mb-8 leading-snug">
              A serendipitous discovery,
              <br />
              like a treasure chest left by time.
            </h4>
            <div className="text-white space-y-2 text-lg">
              <p>
                <strong>tec</strong>: technology
              </p>
              <p>
                <strong>eco</strong>: economy • ecology
              </p>
            </div>
          </div>
        </div>

        <Box />
      </div>

      {/* Mission Statement */}
      <div className="py-16 bg-white mt-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sharing Japan's Gacha Culture with the World.
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Gacha born in Japan is more than toys. It’s wonder, suspense,
            delight. As this culture spreads globally, we aim to elevate Japan’s
            'Galapagos Gacha' into a worldwide experience just like opening a
            tamatebako.
          </p>
        </div>
      </div>
    </section>
  );
}
