import React from "react";
import { FileDown } from "lucide-react";

const ResumeButton = () => {
  return (
    <a
      href="/resume.pdf"
      download="Krishna_Agrawal_Resume.pdf"
      className="inline-flex items-center gap-2 px-5 py-3 bg-purple-600 text-white rounded-2xl shadow-md hover:bg-purple-700 transition-all duration-300"
    >
      <FileDown className="w-5 h-5" />
      Download Resume
    </a>
  );
};

export default ResumeButton;
