import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import validator from "validator";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const styles = {
  contact: {
    borderRadius: 20,
    background: "#F9FAFA",
    padding: "30px 0",
    marginTop: "10%",
  },
  button: {
    padding: 30,
  },
};

const Contact = () => {
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <div style={styles.contact} id="resume">
            <form>
              {/* <pre> */}
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control name="name" type="name" placeholder="Name" />
              </Form.Group>
              <input
                type="text"
                id="userEmail"
                onChange={(e) => validateEmail(e)}
                placeholder="Email"
              ></input>{" "}
              <br />
              <span
                style={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                {emailError}
              </span>
              <Form.Group as={Col} id="formGridQuery">
                <Form.Label>Message:</Form.Label>
                <Form.Control name="query" as="textarea" rows={3} />
              </Form.Group>
              <Button
                className="formBtn"
                variant="primary"
                type="submit"
                id="btn"
              >
                Send
              </Button>
              {/* </pre> */}
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

