import {Link} from "react-router";
import {FaTwitterSquare, FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal p-10 bg-base-300">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to={"/aboutUs"} className="link link-hover">
          About us
        </Link>
        <Link to={"/contact"} className="link link-hover">
          Contact
        </Link>
        <Link to={"/jobs"} className="link link-hover">
          Jobs
        </Link>
      </nav>

      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href={"https://x.com/dipongkorroy000"} target="_blank">
            <FaTwitterSquare size={30} />
          </a>
          <a href={"https://www.facebook.com/profile.php?id=61570830432784"} target="_blank">
            <FaFacebook size={30} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
