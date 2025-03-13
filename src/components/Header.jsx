import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">CommunionHub</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>
      </nav>
    </header>
  );
}