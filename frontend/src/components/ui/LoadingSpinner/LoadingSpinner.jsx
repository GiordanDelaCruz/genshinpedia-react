// LoadingSpinner.jsx
import { motion } from "framer-motion";
import "./LoadingSpinner.css"; // For custom styles

import NavbarDev from "@components/ui/Navbar/Navbar.dev";
import FooterDev from "@components/ui/Footer/Footer.dev";

export default function LoadingSpinner() {
  return (
    <>
      <NavbarDev />

      <div className="loading-wrapper">
        <div className="genshin-card-container">
          <h1 className="loading-message section-header">Loading...</h1>
          <div className="text-center">
            <motion.img
              src="/images/ganyu-dead.png"
              alt="Loading..."
              className="loader"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </div>

          <div className="bg-light text-black rounded">
            <h1 className="loading-message">Please wait :(</h1>
          </div>
        </div>
      </div>

      <FooterDev />
    </>
  );
}
