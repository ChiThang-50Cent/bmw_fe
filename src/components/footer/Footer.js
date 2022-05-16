import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="follow__container">
        <div className="category__list--container">
          <ul>
            <li>
              <Link to="/products">
                <h3>MEN</h3>
              </Link>
            </li>
            <li>
              <Link to="/products">All men</Link>
            </li>
            <li>
              <Link to="/products">Shorts</Link>
            </li>
            <li>
              <Link to="/products">Shirts</Link>
            </li>
            <li>
              <Link to="/products">BoardShirts</Link>
            </li>
            <li>
              <Link to="/products">Jackets</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/products">
                <h3>WOMAN</h3>
              </Link>
            </li>
            <li>
              <Link to="/products">All men</Link>
            </li>
            <li>
              <Link to="/products">Shorts</Link>
            </li>
            <li>
              <Link to="/products">Shirts</Link>
            </li>
            <li>
              <Link to="/products">BoardShirts</Link>
            </li>
            <li>
              <Link to="/products">Jackets</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/products">
                <h3>ABOUT</h3>
              </Link>
            </li>
            <li>
              <Link to="/products">All men</Link>
            </li>
            <li>
              <Link to="/products">Shorts</Link>
            </li>
            <li>
              <Link to="/products">Shirts</Link>
            </li>
            <li>
              <Link to="/products">BoardShirts</Link>
            </li>
            <li>
              <Link to="/products">Jackets</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
