import { React, useState, useRef, useEffect } from "react";
import { Card, Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';

// import Form from "react-bootstrap/Form";
// import Alert from "react-bootstrap/Alert";

import PageHeader from '../components/PageHeader.js';


export default function RedirectPage()
{
    var urlParameters;
    var token;

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [inputs, setInputs] = useState({
        email: ""
    });

    // on page load,
    useEffect(() => {
        urlParameters = new URLSearchParams(window.location.search);

        // TODO: update token once we know the name of the returned URL parameter
        // token = urlParams.get()
    }, [token]);


    // TODO: implement API call to verify token


    // handle email submission
    const handleEmail = (e) => {
        setInputs({ ...inputs, email: e.target.value });
    };

    const handleSubmitClick = (e) => {
        e.preventDefault();

        // check that the email field was entered
        if (inputs.email == "")
        {
            setErrorMessage("An email is required!");
            setShowError(true);
        }

        // TODO: implement regex check to see if a properly formatted email was entered

        else
        {
            // TODO: implement Wix create account API call
            createUser();
        }
    };

    // TODO: implement Wix create account API call
    const createUser = async () => {

        // if successful:
        setShowSuccess(true);
    };

    return (
        <div>
        <PageHeader />

        <Container fluid className="d-flex justify-content-center align-items-center min-vh-25">
            <Row>
                <Col>
                    <Card className="shadow-lg mb-3">
                        <Card.Body>
                            <Card.Text>
                                You're almost there! We just need the email you would like to sign up with.
                            </Card.Text>

                            <Form className="form">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        onChange={handleEmail}
                                    />
                                </Form.Group>
                            </Form>

                            <div className="d-flex justify-content-center">
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={handleSubmitClick}
                            >
                                Submit
                            </Button>
                            </div>
                        </Card.Body>
                    </Card>

                    {showError && (
                        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                            <Alert.Heading>Error:</Alert.Heading>
                            <p>{errorMessage}</p>
                        </Alert>
                    )}

                    {showSuccess && (
                        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                            <Alert.Heading>Veteran status verified!</Alert.Heading>
                            <p>You will shortly be sent an email invite to finish signing up for the site.</p>
                        </Alert>
                    )}


                    <div className="d-flex justify-content-center">
                    <Button
                        variant="primary"
                        href="https://www.markdivinecouragefoundation.org/"
                    >
                        Return to main page
                    </Button>
                    </div>

                    <div className="d-flex justify-content-center">
                    <p>ALTERNATIVELY:</p>
                    </div>

                    <Card className="shadow-lg mb-3">
                        <Card.Body>
                            <Card.Text>
                                <p>There was an issue verifying your information.</p>
                                <p>Please try again later or <a href="https://www.markdivinecouragefoundation.org/contact">contact us</a>.</p>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Col>
            </Row>
        </Container>
        </div>
        
    )
}