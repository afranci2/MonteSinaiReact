import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-red-900 h-full z-50 relative">
      <div className="logo">
        <p className="text-sm">MOVIMIENTO PENTECOSTAL</p>
        <p className="font-serif text-3xl text-gold">MONTE SINAI</p>
      </div>
      <div className="description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          veniam natus obcaecati rem rerum dolorem tempora adipisci, est
          veritatis, perferendis similique reprehenderit corrupti esse sit
          deleniti facere atque aliquam cupiditate.
        </p>
      </div>
      <div className="link">
        <ul>
          <li key={1}>
            <Link to="/">Conocernos</Link>
          </li>
          <li key={2}>
            <Link to="/">Iglesias</Link>
          </li>
          <li key={3}>
            <Link to="/">Unete</Link>
          </li>
          <li key={4}>
            <Link to="/">Donar</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
