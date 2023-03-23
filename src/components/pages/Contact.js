import React from 'react';
import { Form, Col, Button  } from 'react-bootstrap'

const styles = {
    contact: {
      margin: 70,
      padding: 50,
      borderRadius: 30,
      background: '#e8eaf6',
    },
    button: {
      padding: 30
    }
  
  };

  function Contact() {
    return (
      <div style={styles.contact}>
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