import React from 'react';
import { Form, Col, Button  } from 'react-bootstrap'

const styles = {
    contact: {
      margin: 'auto',
      padding: 70,
      borderRadius: 30,
      background: '#F9FAFA',
    },
    button: {
      padding: 30
    }
  
  };

  function Contact() {
    return (
      <div style={styles.contact} id="resume">
       <Form>
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name:</Form.Label>
                <Form.Control name="name" type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email"
                />
            </Form.Group>
  
            <Form.Group as={Col} id="formGridQuery">
                <Form.Label>Message:</Form.Label>
                <Form.Control name="query" as="textarea" rows={3} />
            </Form.Group>

            <Button className="formBtn" variant="primary" type="submit">
                Submit
                </Button>
        </Form >

      </div>
    );
  }


export default Contact;