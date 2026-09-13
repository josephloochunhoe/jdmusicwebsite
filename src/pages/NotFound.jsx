import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-40 pb-24 text-center">
      <h1 className="text-5xl font-serif mb-6">Page not found</h1>
      <p className="text-lg text-gray-600 mb-8">The link may have changed. Let’s help you find your next music lesson.</p>
      <Link to="/" className="inline-block bg-jd-burgundy text-white rounded-full px-8 py-4">Back to home</Link>
    </section>
  );
}
