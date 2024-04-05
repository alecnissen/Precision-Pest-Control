import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bedBugImg from "../assets/pps-bed-bug-img.jpg";
import roachesImg from "../assets/pps-roaches-img.jpg";
import termitesImg from "../assets/pps-termites-img.jpg"
import antImg from "../assets/pps-ants-img.jpg"

export default function Services() {
  return (
    <div className='services-content-wrapper'>
    <h1>Services</h1>


    <div className='services-card-wrapper'> 

    <Card className='service-card-styles'>
      <Card.Img variant="top" src={bedBugImg} className='service-card-img' />
      <Card.Body className='service-card-body'>
        <Card.Title className='service-card-title-text'>Bed Bugs</Card.Title>
        <Card.Text className='service-card-body-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='service-card-learn-more-btn'>Learn More</Button>
      </Card.Body>
    </Card>

    <Card className='service-card-styles'>
      <Card.Img variant="top" src={roachesImg} className='service-card-img' />
      <Card.Body className='service-card-body'>
        <Card.Title className='service-card-title-text'>Roaches</Card.Title>
        <Card.Text className='service-card-body-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='service-card-learn-more-btn'>Learn More</Button>
      </Card.Body>
    </Card>

    <Card className='service-card-styles'>
      <Card.Img variant="top" src={termitesImg} className='service-card-img' />
      <Card.Body className='service-card-body'>
        <Card.Title className='service-card-title-text'>Termites</Card.Title>
        <Card.Text className='service-card-body-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='service-card-learn-more-btn'>Learn More</Button>
      </Card.Body>
    </Card>

    <Card className='service-card-styles'>
      <Card.Img variant="top" src={antImg} className='service-card-img' />
      <Card.Body className='service-card-body'>
        <Card.Title className='service-card-title-text'>Ants</Card.Title>
        <Card.Text className='service-card-body-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='service-card-learn-more-btn'>Learn More</Button>
      </Card.Body>
    </Card>

    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={roachesImg} />
      <Card.Body>
        <Card.Title>Roaches</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card> */}

    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={termitesImg} />
      <Card.Body>
        <Card.Title>Termites</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card> */}

    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={antImg} />
      <Card.Body>
        <Card.Title>Ants</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card> */}

    </div>



    </div>
  )
}
