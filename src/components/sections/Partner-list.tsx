// components/CompanyList.tsx
export const COMPANIES = [
  "IP4",
  "Ultra New Planning",
  "Yell",
  "Kitan Club",
  "Qualia",
  "SO-TA",
  "Toys Cabin",
  "Toys Spirits",
  "Peanuts Club",
  "Bushiroad",
  "Bright Link",
  "Kenelephant",
  "J-Dream",
  "Ikimon",
  "Tarlin",
  "Blue Mountain",
  "Sakura",
  "Rimeiyu",
  "Parade",
  "SK Japan",
];

export default function CompanyList() {
  return (
    <section id="Partners" className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-xs text-gray-500 text-center leading-5">
          {COMPANIES.slice(0, 10).join(" • ")}
          <br />
          {COMPANIES.slice(10).join(" • ")}
        </p>
      </div>
    </section>
  );
}
