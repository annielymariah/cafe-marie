import React from "react";

export default function Footer() {
  return (
    <footer className="text-center bg-dark text-white p-5 mt-5">
      <p className="fw-bold">Cafe Marie | Transformando sua experiência com café</p>
      <p>
        &copy; {new Date().getFullYear()} Todos os direitos reservados 
      </p>
    </footer>
  );
}
