import React from 'react';
import Navbar from './Navbar';
import servicesHeaderBackgroundImg from '../assets/person-disinfecting-dangerous-area-while-wearing-protective-suit.jpg';
import { Link } from 'react-router-dom';
import rightArrow from '../assets/arrowright-svgrepo-com.svg';
import InsectCards from './InsectCards';
import AntImg from '../assets/pexels-ekamelev-1104974.jpg';
import bedBugImg from '../assets/pexels-pixabay-35804.jpg';
import cockroachImg from '../assets/pexels-ekamelev-7898268.jpg';
import rodentsImg from '../assets/pexels-skitterphoto-3773.jpg';
import mosquitoImg from '../assets/pexels-ekamelev-1685610.jpg';
import fleaImg from '../assets/171.jpg';
import spiderImg from '../assets/pexels-ekamelev-995466.jpg';
import PaymentPlans from './PaymentPlans';
import goldMedal from '../assets/medal.png';
import Footer from './Footer';
import PaymentPlansServicePage from './PaymentPlansServicesPage';
import antBackgroundImg from '../assets/peter-f-wolf-XG8eYNYdz54-unsplash.jpg';

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PestID() {

  const location = useLocation();
  const antSection = useRef(null);
  const bedBugSection = useRef(null);
  const cockroachSection = useRef(null);
  const rodentsSection = useRef(null);
  const mosquitoSection = useRef(null);
  const fleaSection = useRef(null);
  const spiderSection = useRef(null);


  useEffect(() => {
    const hash = location.hash;
    console.log('Current hash:', hash); // Debugging
    if (hash === '#ant-section') {
      antSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#bed-bug-section') { 
      bedBugSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#cockroaches-section') { 
      cockroachSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#rodents-section') { 
      rodentsSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#mosquito-section') { 
      mosquitoSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#flea-section') { 
      fleaSection.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#spider-section') { 
      spiderSection.current.scrollIntoView({ behavior: 'smooth' });
    } 
  }, [location]);




  return (
    <>
      <Navbar></Navbar>

      <div className="pestid-header-wrapper">
        <div className="pestid-background-container">
          <div className="pestid-background-text-container">
            <h1>Pest ID</h1>
          </div>
        </div>

        <div className="pestid-header-text-container">
          <h1>Pest Identification and Facts</h1>

          <h3>Learn More About Common Pests and How to Spot Them</h3>
        </div>
      </div>

      <div className="service-container-cards-wrapper-2" id="ant-section" ref={antSection}>
        <div className="service-container-2">
          <h1>Ants</h1>
          <img src={AntImg}></img>

          <div className="service-content-container-2">
            <h1>Facts About Ants</h1>

            <p>
              Ants are incredibly strong, capable of lifting objects up to 50 times their own body weight, and they live
              in highly organized colonies with a clear division of labor, including roles such as workers, soldiers,
              and queens. They communicate using chemicals called pheromones, which they use to leave trails for other
              ants to follow, and there are over 12,000 species of ants found on every continent except Antarctica. Some
              ant species form mutualistic relationships with plants and other insects, providing protection in exchange
              for food, and despite their small size, ants play a crucial role in the ecosystem by aiding in soil
              aeration and decomposition.
            </p>

            <h3 className="features-header-text-2">Types Of Ants</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Carpenter Ant: </span>Known for nesting in wood, often causing
                structural damage.
              </li>
              <li>
                <span className="li-header-text-2">Odorous House Ant: </span>Small ants that emit a foul odor when
                crushed.
              </li>
              <li>
                <span className="li-header-text-2">Pavement Ant: </span> Commonly found nesting in cracks in pavement
                and sidewalks.
              </li>
              <li>
                <span className="li-header-text-2">Fire Ant: </span> Recognizable by their reddish color and painful
                sting.
              </li>
              <li>
                <span className="li-header-text-2">Argentine Ant: </span> Often found in large colonies, known for
                displacing native ant species.
              </li>
            </ul>

            <h3 className="features-header-text-2">How to Identify</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Small Size: </span>Ants are typically small, ranging from 1/16 to 1/2
                inch in length.
              </li>
              <li>
                <span className="li-header-text-2">Segmented Body: </span>They have a segmented body with a narrow
                waist, known as the petiole, connecting the thorax and abdomen.
              </li>
              <li>
                <span className="li-header-text-2">Antennae: </span> Ants have elbowed antennae that bend in the middle,
                which they use for sensing their environment.
              </li>
            </ul>

            <h3 className="features-header-text-2">How to Treat</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Bait Traps: </span>Use bait traps to attract ants, which they then
                carry back to their colony, effectively eliminating the entire nest.
              </li>
              <li>
                <span className="li-header-text-2">Seal Entry Points: </span> Seal cracks and crevices around your home
                to prevent ants from entering.
              </li>
              <li>
                <span className="li-header-text-2">Cleanliness: </span> Maintain cleanliness by keeping food sealed and
                surfaces free of crumbs to reduce attractants for ants.
              </li>
            </ul>

            <div className="services-btn-container-2">
              <h3>Learn More Details About Our Treatment Options!</h3>
              
              <Link to="/Services#ant-section">
              <button>Pest Services</button>
              </Link>


            </div>
          </div>
        </div>

        <div className="service-container-2" id="bed-bug-section" ref={bedBugSection}>
          <h1>Bed Bugs</h1>
          <img src={bedBugImg}></img>

          <div className="service-content-container-2">
            <h1>Facts About Bed Bugs</h1>

            <p>
              Bed bugs are small, reddish-brown insects that feed on the blood of humans and animals, usually at night.
              They are excellent hitchhikers, often spreading through luggage, clothing, and used furniture. Bed bugs
              can survive for several months without feeding, making them particularly difficult to eliminate once they
              infest an area.
            </p>

            <h3 className="features-header-text-2">How to Identify</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Small Size: </span>Bed bugs are small, usually about the size of an
                apple seed, ranging from 1/4 to 3/8 inch in length.
              </li>
              <li>
                <span className="li-header-text-2">Flat, Oval Shape: </span>They have a flat, oval-shaped body that
                becomes more elongated and swollen after feeding.
              </li>
              <li>
                <span className="li-header-text-2">Reddish-Brown Color: </span> Bed bugs are reddish-brown in color, but
                they appear darker after feeding on blood.
              </li>
            </ul>

            <h3 className="features-header-text-2">How to Treat</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Heat Treatment: </span>Use professional heat treatments to raise the
                temperature in infested areas above 120°F, which effectively kills bed bugs at all life stages.
              </li>
              <li>
                <span className="li-header-text-2">Insecticide Application: </span> Apply insecticides specifically
                designed for bed bugs to cracks, crevices, and other hiding places, ensuring thorough coverage.
              </li>
              <li>
                <span className="li-header-text-2">Vacuuming: </span> Regularly vacuum carpets, furniture, and
                mattresses to remove bed bugs and their eggs, and immediately dispose of the vacuum bag outside.
              </li>
            </ul>

            <div className="services-btn-container-2">
              <h3>Learn More Details About Our Treatment Options!</h3>

              <button>Pest Services</button>
            </div>
          </div>
        </div>

        <div className="service-container-2" id="cockroaches-section" ref={cockroachSection}>
          <h1>Cockroaches</h1>
          <img src={cockroachImg}></img>

          <div className="service-content-container-2">
            <h1>Facts About Cockroaches</h1>

            <p>
              Cockroaches are ancient insects that have been around for millions of years, with over 4,500 species
              worldwide. They are known for their resilience and adaptability, able to survive in a wide range of
              environments, including urban areas, forests, and deserts. Cockroaches are scavengers, feeding on almost
              anything, including food scraps, paper, and even glue.
            </p>

            <h3 className="features-header-text-2">How to Identify</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Size and Shape: </span>Cockroaches vary in size depending on the
                species, but most are oval-shaped and range from about 1/2 to 2 inches in length.
              </li>
              <li>
                <span className="li-header-text-2">Color: </span>They can be brown, black, or reddish-brown, with some
                species exhibiting distinctive markings or patterns on their bodies.
              </li>
              <li>
                <span className="li-header-text-2">Antennae: </span> Cockroaches have long, flexible antennae that are
                often as long as or longer than their bodies. These antennae are used for sensing their environment and
                detecting food sources.
              </li>
            </ul>

            <h3 className="features-header-text-2">How to Treat</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Bait Stations: </span>Place bait stations in areas where cockroaches
                are frequently seen, as they will be attracted to the bait and carry it back to their nest, effectively
                eliminating the colony.
              </li>
              <li>
                <span className="li-header-text-2">Sealing Entry Points: </span> Seal cracks and crevices in walls,
                floors, and around pipes to prevent cockroaches from entering your home.
              </li>
              <li>
                <span className="li-header-text-2">Sanitation: </span> Keep your home clean and free of food crumbs and
                spills, as cockroaches are attracted to food sources. Regularly clean kitchen appliances and cabinets to
                remove food residues.
              </li>
            </ul>

            <div className="services-btn-container-2">
              <h3>Learn More Details About Our Treatment Options!</h3>

              <button>Pest Services</button>
            </div>
          </div>
        </div>

        <div className="service-container-2" id="rodents-section" ref={rodentsSection}>
          <h1>Rodents</h1>
          <img src={rodentsImg}></img>

          <div className="service-content-container-2">
            <h1>Facts About Rodents</h1>

            <p>
              Rodents are mammals characterized by their continuously growing incisors, which they must gnaw on to keep
              from overgrowing. They are highly adaptable creatures found on every continent except Antarctica, thriving
              in various habitats ranging from urban areas to forests and grasslands. Rodents play essential roles in
              ecosystems as both prey and predators, but they can also pose significant challenges as pests when they
              invade human dwellings, causing damage and transmitting diseases.
            </p>

            <h3 className="features-header-text-2">How to Identify</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Size and Shape: </span>Rodents vary in size and shape, but they
                generally have small, compact bodies with short legs and tails. Rats are typically larger and more
                robust than mice, with longer tails and thicker bodies.
              </li>
              <li>
                <span className="li-header-text-2">Fur Color and Texture: </span>Rodents may have different fur colors
                and textures depending on the species. Common colors include brown, gray, and black, with variations in
                patterns and markings. Some rodents may have sleek, smooth fur, while others have coarse or wiry coats.
              </li>
              <li>
                <span className="li-header-text-2">Facial Features: </span> Pay attention to the facial features of
                rodents, including the shape of their snouts, ears, and eyes. Mice usually have small, rounded snouts
                and large ears relative to their body size, while rats have more elongated snouts and ears that are
                proportionate to their head size.
              </li>
            </ul>

            <h3 className="features-header-text-2">How to Treat</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Bait Stations: </span> Place bait stations strategically in areas
                where rodents are active, using rodenticides that are specifically formulated to attract and kill
                rodents. The rodents will consume the bait and carry it back to their nests, effectively reducing the
                population.
              </li>
              <li>
                <span className="li-header-text-2">Sealing Entry Points: </span> Identify and seal any potential entry
                points that rodents may use to access your home or building. This includes gaps in walls, doors,
                windows, and utility penetrations, as well as cracks in the foundation.
              </li>
              <li>
                <span className="li-header-text-2">Sanitation: </span> Maintain cleanliness and eliminate potential food
                sources that may attract rodents. Store food in sealed containers, clean up spills and crumbs promptly,
                and dispose of garbage regularly to reduce the availability of food for rodents.
              </li>
            </ul>

            <div className="services-btn-container-2">
              <h3>Learn More Details About Our Treatment Options!</h3>

              <button>Pest Services</button>
            </div>
          </div>
        </div>

        <div className="service-container-2" id="mosquito-section" ref={mosquitoSection}>
          <h1>Mosquitos</h1>
          <img src={mosquitoImg}></img>

          <div className="service-content-container-2">
            <h1>Facts About Mosquitos</h1>

            <p>
              Mosquitoes are small, flying insects known for their ability to bite and feed on the blood of humans and
              animals. They are vectors for various diseases, including malaria, dengue fever, and Zika virus, making
              them a significant public health concern. Mosquitoes breed in stagnant water, where their larvae develop
              before emerging as adults
            </p>

            <h3 className="features-header-text-2">How to Identify</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Slender Body: </span>Mosquitoes have slender bodies that typically
                range from 1/8 to 3/8 inch in length, with long, thin legs and a narrow abdomen.
              </li>
              <li>
                <span className="li-header-text-2">Wings: </span>They have two long, translucent wings that often have
                tiny scales along the veins, giving them a delicate appearance.
              </li>
              <li>
                <span className="li-header-text-2">Long Proboscis: </span> Mosquitoes possess a long, needle-like
                proboscis used for piercing the skin and feeding on blood, which is a distinctive feature of their
                appearance.
              </li>
            </ul>

            <h3 className="features-header-text-2">How to Treat</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Eliminate Standing Water: </span> Remove or treat any standing water
                around your home, such as in birdbaths, flowerpots, and gutters, to prevent mosquitoes from breeding.
              </li>
              <li>
                <span className="li-header-text-2">Insect Repellents: </span> Use insect repellents containing DEET,
                picaridin, or oil of lemon eucalyptus on exposed skin and clothing to deter mosquito bites.
              </li>
              <li>
                <span className="li-header-text-2">Mosquito Traps: </span> Set up mosquito traps that use attractants
                like carbon dioxide and light to lure and capture mosquitoes, reducing their population in the area.
              </li>
            </ul>

            <div className="services-btn-container-2">
              <h3>Learn More Details About Our Treatment Options!</h3>

              <button>Pest Services</button>
            </div>
          </div>
        </div>

        <div className="service-container-2" id="flea-section" ref={fleaSection}>
          <h1>Fleas</h1>
          <img src={fleaImg}></img>

          <div className="service-content-container-2">
            <h1>Facts About Fleas</h1>

            <p>
              Fleas are small, wingless insects known for their ability to jump long distances and their role as
              external parasites on mammals and birds. They feed on the blood of their hosts, causing itching and
              discomfort, and can transmit diseases such as the plague and murine typhus. Flea infestations often begin
              with pets but can quickly spread to carpets, bedding, and furniture in a household.
            </p>

            <h3 className="features-header-text-2">How to Identify</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Small Size: </span>Fleas are very small, typically measuring about
                1/12 to 1/6 inch in length, making them difficult to spot with the naked eye.
              </li>
              <li>
                <span className="li-header-text-2">Flattened Body: </span>Fleas have a laterally flattened body, which
                allows them to move easily through the fur of their hosts.
              </li>
              <li>
                <span className="li-header-text-2">Jumping Ability: </span> Fleas are known for their powerful hind
                legs, enabling them to jump long distances relative to their size, often several inches high and far.
              </li>
            </ul>

            <h3 className="features-header-text-2">How to Treat</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Flea Treatments for Pets: </span> Use flea treatments such as topical
                solutions, oral medications, or flea collars specifically designed to kill and repel fleas on pets.
              </li>
              <li>
                <span className="li-header-text-2">Vacuum Regularly: </span> Vacuum carpets, rugs, furniture, and pet
                bedding frequently to remove fleas, eggs, and larvae. Dispose of the vacuum bag or contents immediately
                to prevent re-infestation.
              </li>
              <li>
                <span className="li-header-text-2">Insect Growth Regulators (IGRs): </span> Apply insect growth
                regulators in your home to disrupt the flea life cycle by preventing eggs and larvae from developing
                into adult fleas.
              </li>
            </ul>

            <div className="services-btn-container-2">
              <h3>Learn More Details About Our Treatment Options!</h3>

              <button>Pest Services</button>


            </div>
          </div>
        </div>

        <div className="service-container-2" id="spider-section" ref={spiderSection}>
          <h1>Spiders</h1>
          <img src={spiderImg}></img>

          <div className="service-content-container-2">
            <h1>Facts About Spiders</h1>

            <p>
              Spiders are arachnids, characterized by having eight legs and a body divided into two main segments: the
              cephalothorax and abdomen. They are found in nearly every habitat on Earth and play a crucial role in
              controlling insect populations. While most spiders are harmless to humans, some species, such as the black
              widow and brown recluse, have venomous bites that can pose health risks.
            </p>

            <h3 className="features-header-text-2">Types Of Spiders</h3>

            <ul>
              <li>
                <span className="li-header-text-2">House Spider: </span>Often found in homes, sheds, and basements.
              </li>
              <li>
                <span className="li-header-text-2">Black Widow: </span>Recognizable by the red hourglass shape on its
                abdomen.
              </li>
              <li>
                <span className="li-header-text-2">Brown Recluse: </span> Known for the violin-shaped marking on its
                back.
              </li>
              <li>
                <span className="li-header-text-2">Wolf Spider: </span> Large, hairy spiders commonly found in gardens
                and grassy areas.
              </li>
              <li>
                <span className="li-header-text-2">Jumping Spider: </span> Small, agile spiders with distinctive eye
                patterns, often found indoors and outdoors.
              </li>
            </ul>

            <h3 className="features-header-text-2">How to Identify</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Eight Legs: </span>Spiders have eight legs, distinguishing them from insects, which have six legs.
              </li>
              <li>
                <span className="li-header-text-2">Two Body Segments: </span>Spiders have two main body segments: the cephalothorax (head and thorax combined) and the abdomen.
              </li>
              <li>
                <span className="li-header-text-2">Silk Production: </span> Spiders produce silk from spinnerets located at the rear of their abdomen, which they use to build webs, wrap prey, and create egg sacs.
              </li>
            </ul>

            <h3 className="features-header-text-2">How to Treat</h3>

            <ul>
              <li>
                <span className="li-header-text-2">Remove Clutter: </span> Clear away clutter and debris from indoor and outdoor areas to eliminate hiding spots for spiders.
              </li>
              <li>
                <span className="li-header-text-2">Seal Entry Points: </span> Seal cracks, gaps, and openings around windows, doors, and foundation to prevent spiders from entering buildings.
              </li>
              <li>
                <span className="li-header-text-2">Regular Cleaning:  </span> Regularly clean and vacuum indoor spaces, especially corners, ceilings, and behind furniture, to remove webs and spiders.
              </li>
            </ul>

            <div className="services-btn-container-2">
              <h3>Learn More Details About Our Treatment Options!</h3>

              <button>Pest Services</button>
            </div>
          </div>
        </div>










      </div>

      <Footer></Footer>
    </>
  );
}
