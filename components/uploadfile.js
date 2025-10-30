"use client";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

export default function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    // opcional: resetar o input real
    const input = document.getElementById("file");
    if (input) input.value = "";
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <label
        className="custum-file-upload cursor-pointer border border-gray-300 rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-gray-50 transition"
        htmlFor="file"
      >
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 10.5L12 6m0 0l4.5 4.5M12 6v12"
            />
          </svg>
        </div>
        <div className="text text-center text-sm mt-2 text-gray-700">
          <span className="block text-gray-500">(facultatif)</span>
          <span className="block">Cliquez pour télécharger l'image</span>
        </div>
        <input
          type="file"
          name="file"
          id="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {file && (
        <div className="mt-3 flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl">
          <span className="text-sm text-gray-800">{file.name}</span>
          <button
            type="button"
            onClick={handleRemoveFile}
            className="text-gray-500 hover:text-red-500 transition"
          >
            <RiCloseFill size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
