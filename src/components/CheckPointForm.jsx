import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './CheckPointForm.css'; // Import the specific CSS file
import SummaryCard from './SummaryCard'; // Import the SummaryCard component

const points = {
  "Nyabugogo": { lat: -1.939826787816454, lng: 30.0445426438232 },
  "Stop A": { lat: -1.9355377074007851, lng: 30.060163829002217 },
  "Stop B": { lat: -1.9358808342336546, lng: 30.08024820994666 },
  "Stop C": { lat: -1.9489196023037583, lng: 30.092607828989397 },
  "Stop D": { lat: -1.9592132952818164, lng: 30.106684061788073 },
  "Stop E": { lat: -1.9487480402200394, lng: 30.126596781356923 },
  "Kimironko": { lat: -1.9365670876910166, lng: 30.13020167024439 }
};

const CheckPointForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [point1, setPoint1] = useState('Nyabugogo');
  const [point2, setPoint2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overlay">
      {submitted ? (
        <SummaryCard
          point1={points[point1]}
          point2={points[point2]}
          nextStop="Kimihurura"
          distance="13"
          time="20"
        />
      ) : (
        <div className="form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCheckPoint1" className="form-group">
              <Form.Label className="form-label">Checkpoint 1</Form.Label>
              <Form.Control
                className="form-control"
                as="select"
                value={point1}
                onChange={(e) => setPoint1(e.target.value)}
                disabled
              >
                <option value="Nyabugogo">Nyabugogo</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formCheckPoint2" className="form-group">
              <Form.Label className="form-label">Checkpoint 2</Form.Label>
              <Form.Control
                className="form-control"
                as="select"
                value={point2}
                onChange={(e) => setPoint2(e.target.value)}
              >
                <option value="">Select a point</option>
                {Object.keys(points).map((key) => (
                  key !== 'Nyabugogo' && <option key={key} value={key}>{key}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Button className="form-button" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default CheckPointForm;