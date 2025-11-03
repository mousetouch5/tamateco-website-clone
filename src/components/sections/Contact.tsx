import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  return (
    <section id="Contact" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
          Contact
        </h2>
        <p className="text-center text-gray-700 mb-12 text-lg">
          Please visit Official Website to make inquiries.
        </p>
        <p className="text-center text-gray-700 mb-12 text-lg font-bold">
          https://tamate.co/en/
        </p>

        {/* Footnote in Japanese */}
        <p className="text-center text-gray-500 text-sm italic max-w-2xl mx-auto">
          本サイトは提案用ウェブサイトです。お問い合わせは公式ウェブサイトよりお願いいたします。
        </p>
        {/*}
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

      */}
      </div>
    </section>
  );
}
