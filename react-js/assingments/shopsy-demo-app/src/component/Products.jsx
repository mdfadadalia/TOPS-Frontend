import { products } from "../data/products";

export default function Products() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Our Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {products.map((p) => (
            <div key={p.id} className="bg-white rounded shadow p-3">
              <img src={p.img} className="w-full rounded" />
              <h3 className="mt-2">{p.name}</h3>
              <p className="text-green-600 font-bold">₹{p.price}</p>

              <button className="mt-2 w-full bg-green-600 text-white py-1 rounded">
                Add to Cart
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}