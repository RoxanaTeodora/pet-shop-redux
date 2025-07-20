import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="relative  bg-[#544463]  pt-20">
        <nav
          aria-label="Footer Navigation"
          className="m-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left justify-center"
        >
          <ul className="navbar">
            <li className="list">
              <Link to="/about">About</Link>
            </li>
            <Link to="/" className="list">
              Pets
            </Link>
            <li className="list">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <p className="py-10 text-center text-gray-300">
          © 2024 Pet Adoption Center | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
