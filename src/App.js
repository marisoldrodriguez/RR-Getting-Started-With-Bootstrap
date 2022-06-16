import './App.css';
import React from 'react';
import { Button, Nav, Form, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="about">About Us</Nav.Link>
        </Nav.Item>        
      </Nav>
      <h1>Hello World</h1>
      <Button variant="danger">Danger</Button>     
      <br />
<Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
    <Form.Group>
      <Form.Label>Form Dropdown with favorite movies</Form.Label>
      <br />
      <Form.Control as="select">
        <option>Inception</option>
        <option>Forrest Gump</option>
        <option>Shawshank Redemption</option>
        <option>Spiderman: Into the Spiderverse</option>
        <option>Avengers: Endgame</option>
      </Form.Control>
    </Form.Group>
</Form>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

     
    </div>
  );
}

export default App;
