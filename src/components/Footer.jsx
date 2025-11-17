import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary-bg dark:bg-secondary text-black dark:text-white pt-20 pb-5">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8 ">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">
            <Link to={"/"}>Panto.</Link>
          </h2>
          <p className="text-base md:mr-12">
            The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary">
              <Link to={"/"}>Email Marketing</Link>
            </li>
            <li className="hover:text-primary">
              <Link to={"/"}>Campings</Link>
            </li>
            <li className="hover:text-primary">
              <Link to={"/"}>Branding</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">Furniture</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary">Beds</li>
            <li className="hover:text-primary">
              <Link to={"/"}>Chair</Link>
            </li>
            <li className="hover:text-primary">
              <Link to={"/"}>All</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">Follow Us</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary ">
              <Link to={"/"} className="flex items-center gap-2">
                <FaFacebookF /> <span>Facebook</span>
              </Link>
            </li>
            <li className="hover:text-primary">
              <Link to={"/"} className="flex items-center gap-2">
                <FaTwitter /> <span>Twitter</span>
              </Link>
            </li>
            <li className="hover:text-primary">
              <Link to={"/"} className="flex items-center gap-2">
                <FaInstagram />
                <span>Instagram</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-container py-0 flex items-center justify-between gap-2 border-t border-gray-300 text-black dark:bg-gray-800 text-sm font-thin pt-4">
        <div className="text-left ">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="flex items-center gap-2">
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
