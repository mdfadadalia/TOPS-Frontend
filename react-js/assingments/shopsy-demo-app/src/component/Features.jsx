const features = [
  { title: "Free Shipping", icon: "fa-car-side" },
  { title: "Secure Payment", icon: "fa-user-shield" },
  { title: "30 Days Return", icon: "fa-exchange-alt" },
  { title: "24/7 Support", icon: "fa-phone-alt" },
];

export default function Features() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 px-4">

        {features.map((f, i) => (
          <div key={i} className="bg-white p-6 text-center rounded shadow">
            <i className={`fas ${f.icon} text-3xl text-green-600 mb-3`}></i>
            <h3 className="font-bold">{f.title}</h3>
          </div>
        ))}

      </div>
    </section>
  );
}