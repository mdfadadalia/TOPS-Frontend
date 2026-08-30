import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="main">
    <section className="section--lg container" style={{ textAlign: 'center' }}>
      <h1 className="section__title" style={{ display: 'block' }}>404</h1>
      <p>Sorry, we couldn't find the page you were looking for.</p>
      <Link to="/" className="btn1 btn1--md">Back to Home</Link>
    </section>
  </main>
);

export default NotFound;
