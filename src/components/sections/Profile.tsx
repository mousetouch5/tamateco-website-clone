import Image from "next/image";

export default function Message() {
  return (
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
        <div className="space-y-6 text-xl">
          <div>
            <h4 className="text-lg font-semibold text-gray-600 mb-1">CEO</h4>
            <h5 className="text-2xl font-bold text-gray-900">
              IPPEI MATSUI - 松井 一平 -
            </h5>
          </div>
          <div>
            <h6 className="font-semibold text-gray-900 mb-3">– Background –</h6>
            <p className="text-gray-700 leading-relaxed">
              I started practicing Karate in the first grade of elementary
              school and earned six 3rd-place finishes at regional tournaments
              by the time I graduated middle school. In university, I
              transitioned to Taekwondo and, by the second year of my career, I
              retired after achieving four 1st-place finishes at the Kyushu
              Tournament, 2nd place at the All-Japan Championship, and 1st place
              in the selection for the World University Championship.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Although the World University Championship was canceled due to
              security concerns in the host country, my desire to compete on the
              world stage continues to drive and motivate me to this day.
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
  );
}
