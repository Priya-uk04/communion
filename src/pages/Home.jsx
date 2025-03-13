import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page"
    >
      <div className="hero-section">
        <h1 className="hero-title">Connecting People Across Faiths & Interests</h1>
        <p className="hero-description">
          Join our community to participate in meaningful events that bridge cultural and religious divides.
        </p>
        <Link to="/events" className="cta-button">
          Explore Events
        </Link>
      </div>
    </motion.div>
  );
}