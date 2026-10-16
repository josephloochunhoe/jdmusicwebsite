import { Link } from 'react-router-dom';
import { TrialButton } from '../components/ui';

export default function NotFound() {
  return (
    <section className="wrap not-found" data-cta="not_found">
      <h1 className="display">Page not found</h1>
      <p>The link may have changed. Let’s help you find your next music lesson.</p>
      <div className="actions">
        <Link to="/" className="btn btn-wine">Back to home</Link>
        <TrialButton />
      </div>
    </section>
  );
}
