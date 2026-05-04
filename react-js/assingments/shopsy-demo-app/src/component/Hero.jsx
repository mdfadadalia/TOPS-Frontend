export default function Hero() {
  return (
    <section className="bg-green-50 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 items-center px-4">

        <div>
          <h4 className="text-green-600">100% Organic Foods</h4>
          <h1 className="text-4xl font-bold my-4">
            Organic Veggies & Fruits
          </h1>

          <div className="flex">
            <input
              className="border p-3 rounded-l-full w-full"
              placeholder="Search..."
            />
            <button className="bg-green-600 text-white px-6 rounded-r-full">
              Search
            </button>
          </div>
        </div>

        <img
          src="https://via.placeholder.com/500"
          className="rounded"
        />

      </div>
    </section>
  );
}