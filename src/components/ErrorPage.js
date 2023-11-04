import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Notfound() {
  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "135%",
        backgroundPositionY: "center",
      }}
    >
      <div className="w-2/3 sm:w-96 bg-white rounded-lg shadow-md border-2 border-blue m-auto flex flex-col font-mono">
        <div className="flex justify-between bg-blue text-white">
          <div className="font-semibold font-mono p-2">UH-NO, ERROR 404! </div>
          <Link
            to="/"
            className="flex bg-red border-2 rounded mx-2 my-auto px-1 py-0.5 scale-110"
          >
            <FontAwesomeIcon icon={faXmark} className="scale-150" />
          </Link>
        </div>
        <div className="m-4 text-gray-700 px-2">
          Sorry, the page you were looking for does not exist.
        </div>

        <Link
          to="/"
          className="mb-4 border-2 rounded border-black hover:border-blue w-fit mx-auto text-black py-1 px-3 hover:bg-blue hover:text-white"
        >
          <button>Go Back</button>
        </Link>
      </div>
    </div>
  );
}
