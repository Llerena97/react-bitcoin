import Link from 'next/link'

const Navigation = () => (
  <nav className="navbar navbar-expand navbar-dark bg-warning">
    <div className="container">
      <Link href="/"><a className="navbar-brand">Todo Bitcoin</a></Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><Link href="/"><a className="nav-link">Home</a></Link></li>
          <li className="nav-item"><Link href="/info"><a className="nav-link">Info</a></Link></li>
          <li></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
