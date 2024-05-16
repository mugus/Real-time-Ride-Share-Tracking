import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './CheckPointForm.css'; // Import the specific CSS file
import SummaryCard from './SummaryCard'; // Import the SummaryCard component

const CheckPointForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [point1, setPoint1] = useState('');
  const [point2, setPoint2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overlay">
      {submitted ? (
        <SummaryCard
          point1={point1}
          point2={point2}
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
                type="text"
                placeholder="Enter first checkpoint"
                value={point1}
                onChange={(e) => setPoint1(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formCheckPoint2" className="form-group">
              <Form.Label className="form-label">Checkpoint 2</Form.Label>
              <Form.Control
                className="form-control"
                type="text"
                placeholder="Enter second checkpoint"
                value={point2}
                onChange={(e) => setPoint2(e.target.value)}
              />
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