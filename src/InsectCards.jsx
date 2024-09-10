import React from 'react';
import spiderImg from '../assets/spider-4-svgrepo-com.svg';
import antImg from '../assets/ant-svgrepo-com.svg';
import rodentImg from '../assets/rat-svgrepo-com (1).svg';
import mosquitoImg from '../assets/mosquito-3-svgrepo-com.svg';
import bedbugImg from '../assets/bed-bug-buggy-svgrepo-com.svg';
import fleaImg from '../assets/flea-svgrepo-com.svg';
import { HashLink as Link } from 'react-router-hash-link';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function InsectCards() {
  return (
    <div className="insect-cards-content-wrapper">
      <div className="insect-cards-container">
        <Link to="/Services#spider-section">
          <div className="insect-card">
            <img src={spiderImg}></img>
            <h3>Spiders</h3>
          </div>
        </Link>

        <Link to="/Services#ant-section">
          <div className="insect-card">
            <img src={antImg}></img>
            <h3>Ants</h3>
          </div>
        </Link>

        <Link to="/Services#rodents-section">
          <div className="insect-card">
            <img src={rodentImg}></img>
            <h3>Rodents</h3>
          </div>
        </Link>

        <Link to="/Services#mosquito-section">
          <div className="insect-card">
            <img src={mosquitoImg}></img>
            <h3>Mosquitos</h3>
          </div>
        </Link>

        <Link to="/Services#bed-bug-section">
          <div className="insect-card">
            <img src={bedbugImg}></img>
            <h3>Bed Bugs</h3>
          </div>
        </Link>

        <Link to="/Services#flea-section">
          <div className="insect-card">
            <img src={fleaImg}></img>
            <h3>Fleas</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
