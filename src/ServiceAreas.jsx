import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import philadelphiaImg from '../assets/pexels-trev-takes-photos-11531610.jpg';
import delcoImg from '../assets/chris-henry-rUMzI6Vn7hU-unsplash.jpg';
import chesterImg from '../assets/dan-mall-HL4LuaElk2I-unsplash (1).jpg';
import montgomeryCountyImg from '../assets/jason-pischke-TYrQCzejRxE-unsplash.jpg';
import bucksCountyImg from '../assets/luke-hodde-9MY4Ji2w6Zg-unsplash.jpg';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ServiceAreas() {
  const location = useLocation();
  const delcoSection = useRef(null);
  const phillySection = useRef(null);
  const chesterSection = useRef(null);
  const montcoSection = useRef(null);
  const bucksSection = useRef(null);

  useEffect(() => {
    const hash = location.hash;

    if (hash === '#delco-section') {
      delcoSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#philly-section') {
      phillySection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#chester-section') {
      chesterSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#montco-section') {
      montcoSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#bucks-section') {
      bucksSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  });

  return (
    <>
      <Navbar></Navbar>

      <div className="service-areas-tab-content-wrapper">
        <div className="service-areas-header-wrapper">
          <div className="service-areas-header-text-container">
            <h1>Service Areas</h1>
          </div>
        </div>

        <div className="service-header-text-container">
          <h1 className="serve-you-header-text">We Are Here To Serve You</h1>

          <h1>Proudly Serving The Following Areas </h1>
        </div>

        <div className="service-areas-wrapper">
          <div className="service-area-container" id="delco-section" ref={delcoSection}>
            <img src={delcoImg}></img>

            <div className="service-area-content-container">
              <h1>Delaware County</h1>

              <p>
                We proudly serve Delaware County, PA, providing top-notch pest control services to keep your homes and
                businesses pest-free. Our dedicated team is committed to ensuring a safe and healthy environment for all
                residents of Delaware County.
              </p>

              <ul>
                <li>Ridley</li>
                <li>Morton</li>
                <li>Springfield</li>
                <li>Darby</li>
                <li>Media</li>
                <li>Brookhaven</li>
                <li>Clifton Heights</li>
                <li>Prospect Park</li>
              </ul>
            </div>
          </div>

          <div className="service-area-container" id="philly-section" ref={phillySection}>
            <img src={philadelphiaImg}></img>

            <div className="service-area-content-container">
              <h1>Philadelphia</h1>

              <p>
                We proudly serve Philadelphia, PA, delivering exceptional pest control services to ensure your homes and
                businesses remain pest-free. Our experienced team is dedicated to providing a safe and healthy
                environment for all residents and businesses in the vibrant city of Philadelphia.
              </p>

              <ul>
                <li>Fishtown</li>
                <li>Center City</li>
                <li>Northern Liberties</li>
                <li>Chinatown</li>
                <li>Fairmont</li>
                <li>Callowhill</li>
                <li>South Philadelphia</li>
                <li>Rittenhouse</li>
              </ul>
            </div>
          </div>

          <div className="service-area-container" id="chester-section" ref={chesterSection}>
            <img src={chesterImg}></img>

            <div className="service-area-content-container">
              <h1>Chester County</h1>

              <p>
                We are proud to serve Chester County, PA, providing top-notch pest control services to ensure your homes
                and businesses stay pest-free. Our dedicated team is committed to creating a safe and healthy
                environment for all residents and businesses throughout the beautiful Chester County area.
              </p>

              <ul>
                <li>West Chester</li>
                <li>Dowingtown</li>
                <li>Malvern</li>
                <li>Coatesville</li>
                <li>West Grove</li>
                <li>Spring City</li>
                <li>Parkesburg</li>
                <li>Atglen</li>
              </ul>
            </div>
          </div>

          <div className="service-area-container" id="montco-section" ref={montcoSection}>
            <img src={montgomeryCountyImg}></img>

            <div className="service-area-content-container">
              <h1>Montgomery County</h1>

              <p>
                We are proud to extend our exceptional pest control services to Montgomery County, PA. Our experienced
                team is dedicated to safeguarding the homes and businesses of this vibrant community, ensuring a
                pest-free environment for all residents. Trust us to provide effective and reliable pest control
                solutions tailored to the unique needs of Montgomery County.
              </p>

              <ul>
                <li>East Norriton</li>
                <li>Abington</li>
                <li>Horsham</li>
                <li>Limerick</li>
                <li>Cheltenham</li>
                <li>Lansdale</li>
                <li>Conshohocken</li>
                <li>King Of Prussia</li>
              </ul>
            </div>
          </div>

          <div className="service-area-container" id="bucks-section" ref={bucksSection}>
            <img src={bucksCountyImg}></img>

            <div className="service-area-content-container">
              <h1>Bucks County</h1>

              <p>
                We are delighted to offer our comprehensive pest control services to the residents and businesses of
                Bucks County, PA. Our dedicated team is committed to protecting this beautiful area from unwanted pests,
                ensuring a safe and comfortable environment for all. Rely on us for effective and customized pest
                control solutions that meet the specific needs of Bucks County.
              </p>

              <ul>
                <li>Doylestown</li>
                <li>Bensalem</li>
                <li>Richboro</li>
                <li>Quakertown</li>
                <li>Levittown</li>
                <li>Perkasie</li>
                <li>New Hope</li>
                <li>Buckingham</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
