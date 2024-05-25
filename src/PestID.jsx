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
import antBackgroundImg from '../assets/peter-f-wolf-XG8eYNYdz54-unsplash.jpg'


export default function PestID() {
  return (
    <>
      <Navbar></Navbar>



        <div className='pestid-header-wrapper'> 

       

        <div className='pestid-background-container'> 



          <div className='pestid-background-text-container'> 

            <h1>Pest ID</h1>

          </div>

        </div>


        {/* <h1>Pest Identification and Facts</h1> */} 


        <div className='pestid-header-text-container'> 

          <h1>Pest Identification and Facts</h1>

          <h3>Learn More About Common Pests and How to Spot Them</h3>

        </div>




        </div>
     

      {/* <div className="service-container-cards-wrapper">
        <div className="service-container">
          <img src={AntImg}></img>

          <div className="service-content-container">
            <h1>Ant Service Plan</h1>

            <p>
              An ant service plan offers a comprehensive approach to control and prevent ant infestations in your home
              or business. This plan includes regular inspections, targeted treatments, and proactive measures to ensure
              a pest-free environment.
            </p>

            <h3 className="features-header-text">Features Of The Plan</h3>

            <ul>
              <li>
                <span className="li-header-text">Regular Inspections: </span>Technicians conduct thorough inspections to
                identify ant colonies and entry points, assessing the extent of the infestation.
              </li>
              <li>
                <span className="li-header-text">Targeted Treatments: </span>The plan includes the application of safe
                and effective treatments specifically designed to eliminate ant colonies and prevent future
                infestations.
              </li>
              <li>
                <span className="li-header-text">Preventative Measures: </span> Recommendations and implementations of
                strategies to seal entry points, reduce attractants, and maintain a barrier to keep ants from returning.
              </li>
            </ul>
          </div>
        </div>

        <div className="service-container">
          <img src={bedBugImg}></img>

          <div className="service-content-container">
            <h1>Bed Bug Service Plan</h1>

            <p>
              A bed bug service plan provides a thorough strategy to eliminate and prevent bed bug infestations in
              residential or commercial settings. This plan includes detailed inspections, customized treatments, and
              ongoing monitoring to ensure effective control and long-term protection.
            </p>

            <h3 className="features-header-text">Features Of The Plan</h3>

            <ul>
              <li>
                <span className="li-header-text">Detailed Inspections: </span> Technicians perform comprehensive
                inspections of all potential hiding spots to accurately assess the severity and spread of the
                infestation.
              </li>
              <li>
                <span className="li-header-text">Customized Treatments: </span>The plan includes the application of
                targeted treatments using safe and effective methods tailored to eradicate bed bugs at all life stages.
              </li>
              <li>
                <span className="li-header-text">Ongoing Monitoring: </span> Continuous monitoring and follow-up visits
                are scheduled to ensure that the bed bugs are completely eradicated and to prevent future infestations
                through proactive measures.
              </li>
            </ul>
          </div>
        </div>

        <div className="service-container">
          <img src={cockroachImg}></img>

          <div className="service-content-container">
            <h1>Cockroaches Service Plan</h1>

            <p>
              A cockroach service plan provides a thorough and strategic approach to eliminate cockroach infestations
              and prevent their recurrence in both residential and commercial settings. This plan encompasses detailed
              inspections, targeted treatment methods, and ongoing monitoring to ensure long-lasting control.
            </p>

            <h3 className="features-header-text">Features Of The Plan</h3>

            <ul>
              <li>
                <span className="li-header-text">Comprehensive Assessments: </span> Skilled technicians perform
                exhaustive inspections to identify key infestation areas, entry points, and the severity of the problem.
              </li>
              <li>
                <span className="li-header-text">Strategic Treatments: </span>Utilizing a combination of baits,
                insecticides, and traps, the plan targets cockroaches at their source, aiming to disrupt their life
                cycles and prevent reproduction.
              </li>
              <li>
                <span className="li-header-text">Ongoing Surveillance: </span> Regular follow-up visits and continuous
                monitoring ensure the treatment's effectiveness, with proactive measures implemented to prevent future
                infestations and maintain a pest-free environment.
              </li>
            </ul>
          </div>
        </div>

        <div className="service-container">
          <img src={rodentsImg}></img>

          <div className="service-content-container">
            <h1>Rodents Service Plan</h1>

            <p>
              A cockroach service plan provides a thorough and strategic approach to eliminate cockroach infestations
              and prevent their recurrence in both residential and commercial settings. This plan encompasses detailed
              inspections, targeted treatment methods, and ongoing monitoring to ensure long-lasting control.
            </p>

            <h3 className="features-header-text">Features Of The Plan</h3>

            <ul>
              <li>
                <span className="li-header-text">Detailed Site Inspections: </span> Expert technicians conduct thorough
                inspections to identify rodent entry points, nesting sites, and signs of infestation, tailoring the plan
                to address specific problem areas.
              </li>
              <li>
                <span className="li-header-text">Custom Treatment Solutions: </span>The plan employs a range of methods
                such as traps, bait stations, and exclusion techniques, specifically designed to eliminate rodents and
                block their access to your property.
              </li>
              <li>
                <span className="li-header-text">Regular Monitoring and Maintenance: </span> Continuous follow-up visits
                and monitoring ensure the treatment’s effectiveness, with proactive adjustments made to maintain a
                rodent-free environment and prevent re-infestation.
              </li>
            </ul>
          </div>
        </div>

        <div className="service-container">
          <img src={mosquitoImg}></img>

          <div className="service-content-container">
            <h1>Mosquitos Service Plan</h1>

            <p>
              A mosquito service plan offers a comprehensive solution to eliminate mosquito populations and prevent
              their return, ensuring a comfortable and safe environment. This plan includes thorough site inspections,
              targeted treatments, and continuous monitoring for effective and lasting mosquito control.
            </p>

            <h3 className="features-header-text">Features Of The Plan</h3>

            <ul>
              <li>
                <span className="li-header-text">Detailed Site Inspections: </span> Professional technicians carry out
                thorough inspections to identify mosquito breeding sites, potential entry points, and areas of high
                activity, allowing for a customized treatment plan tailored to the specific needs of the property.
              </li>
              <li>
                <span className="li-header-text">Targeted Treatment Applications: </span>The plan employs a combination
                of larvicides, adulticides, and biological controls to effectively target mosquito populations at
                various life stages, ensuring thorough eradication.
              </li>
              <li>
                <span className="li-header-text">Ongoing Monitoring and Prevention: </span>Regular follow-up visits and
                continuous monitoring ensure the treatment remains effective, with proactive measures taken to prevent
                re-infestation and maintain a mosquito-free environment.
              </li>
            </ul>
          </div>
        </div>

        <div className="service-container">
          <img src={fleaImg}></img>

          <div className="service-content-container">
            <h1>Fleas Service Plan</h1>

            <p>
              A flea service plan offers a comprehensive approach to eliminate flea infestations and prevent future
              occurrences in homes and businesses. This plan includes meticulous inspections, targeted treatments, and
              ongoing monitoring to ensure effective and lasting control.
            </p>

            <h3 className="features-header-text">Features Of The Plan</h3>

            <ul>
              <li>
                <span className="li-header-text">Thorough Property Assessments: </span> Professional technicians conduct
                detailed inspections to identify flea hotspots, potential entry points, and the extent of the
                infestation, ensuring a customized treatment plan.
              </li>
              <li>
                <span className="li-header-text">Specialized Treatment Methods: </span>The plan utilizes a combination
                of safe and effective treatments, including insect growth regulators (IGRs), insecticides, and
                environmental modifications to disrupt the flea lifecycle and eradicate the infestation.
              </li>
              <li>
                <span className="li-header-text">Ongoing Surveillance and Support: </span>Regular follow-up visits and
                monitoring ensure the continued effectiveness of the treatment, with proactive steps taken to prevent
                re-infestation and maintain a flea-free environment.
              </li>
            </ul>
          </div>
        </div>

        <div className="service-container">
          <img src={spiderImg}></img>

          <div className="service-content-container">
            <h1>Spider Service Plan</h1>

            <p>
              A spider service plan provides a comprehensive approach to eliminate spider infestations and prevent
              future occurrences, ensuring a safe and comfortable living environment. This plan includes meticulous
              inspections, precise treatments, and continuous monitoring to ensure effective and lasting spider control.
            </p>

            <h3 className="features-header-text">Features Of The Plan</h3>

            <ul>
              <li>
                <span className="li-header-text">Comprehensive Inspections: </span> Expert technicians perform thorough
                inspections to locate spider nests, webs, and potential entry points, allowing for an accurate
                assessment of the infestation and the development of a tailored treatment plan.
              </li>
              <li>
                <span className="li-header-text">Specialized Treatments: </span> The plan includes the application of
                eco-friendly insecticides and strategic placement of traps to target spiders directly and eliminate
                their food sources, reducing spider populations effectively.
              </li>
              <li>
                <span className="li-header-text">Regular Monitoring and Prevention: </span>Ongoing follow-up visits and
                continuous monitoring ensure the treatment remains effective, with preventative measures implemented to
                reduce the risk of future spider infestations, maintaining a spider-free environment.
              </li>
            </ul>
          </div>
        </div>
      </div> */}

     
      {/* <Footer></Footer> */}





    </>
  );
}
