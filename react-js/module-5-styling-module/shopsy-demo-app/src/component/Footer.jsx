export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10 p-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

        <div>
          <h2 className="text-xl font-bold">Fruitables</h2>
          <p>Fresh products everyday</p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div>
          <h3 className="font-bold">Contact</h3>
          <p>Email: test@gmail.com</p>
        </div>

      </div>
    </footer>
  );
}