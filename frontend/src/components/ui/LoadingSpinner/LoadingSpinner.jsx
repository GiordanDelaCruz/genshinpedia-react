// LoadingSpinner.jsx
import { motion } from "framer-motion";
import "./LoadingSpinner.css"; // For custom styles

import Navbar from "@components/ui/Navbar/Navbar";
import Footer from "@components/ui/Footer/Footer";

export default function LoadingSpinner() {
  return (
    <>
      <Navbar />
      <div className="loading-wrapper">
        <div className="bg-dark text-white rounded border shadow text-center rounded px-5 py-5">
          <div className="bg-danger text-black rounded">
            <h1 className="loading-message text-white px-2 py-2">Loading...</h1>
          </div>

          <motion.img
            src="/images/ganyu-dead.png"
            alt="Loading..."
            className="loader"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />

          <div className="bg-light text-black rounded">
            <h1 className="loading-message text-dark px-2 py-2">
              Please wait :(
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
