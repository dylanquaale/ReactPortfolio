import React, { useState } from 'react';
import { Form, Col, Button  } from 'react-bootstrap'
import { useForm } from '@formspree/react';
import { validateEmail } from '../../utils/helpers';
// require('dotenv').config()

const styles = {
    contact: {
      margin: 'auto',
      marginTop: 20,
      justifyContent: 'center',
      padding: 70,
      borderRadius: 30,
      background: '#F9FAFA',
    },
    button: {
      padding: 30
    }
  
  };

  function Contact() {

    const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (!errorMessage) {
    //     console.log('Submit Form', formState);
    //   }
    // };
  
    // function refreshPage() {
    //   window.location.reload(true);
    // }
  
  
    if (state.succeeded) {
      return (
        <div>
          <p>Thanks for reaching out!</p>
          <button className="button is-medium is-primary is-half m-6" onClick={()=> window.open("/#contact")}>Back to About</button>
          {/* This form button is broken. It was supposed to refresh the page so you can submit a new form, but I'm changing this bug into a feature that takes you back to the about section. */}
        </div>
      );
  }
  
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`A ${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };


    return (
      <div style={styles.contact} id="resume">

       <Form>
            <Form.Group as={Col} controlId="formGridName" onSubmit={handleSubmit}>
                <Form.Label>Name:</Form.Label>
                <Form.Control name="name" type="name" placeholder="Name" defaultValue={name} onBlur={handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" defaultValue={email} onBlur={handleChange}
                />
            </Form.Group>
  
            <Form.Group as={Col} id="formGridQuery">
                <Form.Label>Message:</Form.Label>
                <Form.Control name="query" as="textarea" rows={3} defaultValue={message} onBlur={handleChange}/>
            </Form.Group>

            <Button className="formBtn" variant="primary" type="submit" id="btn" >
                Submit
                </Button>
        </Form >

      </div>
    );
  }


export default Contact;