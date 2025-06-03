// LoadingSpinner.jsx
import { motion } from "framer-motion";
import "./LoadingSpinner.css"; // For custom styles

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <motion.img
        src="/vision-loading.gif" // Genshin-style animated loader (custom asset)
        alt="Loading..."
        className="w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
      <p className="text-white text-sm mt-2">
        Starting up server... please wait
      </p>
    </div>
  );
}
