import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import '../css/components.css';

import { groupsEndpoint } from '../EnvironmentVariables.js';

function SignupCard()
{
    return (
        <Container fluid className="d-flex justify-content-center align-items-center min-vh-25">
            <Row>
                <Col>
                    <Card className="shadow-lg mb-3">
                        <Card.Body>
                            <Card.Text>
                            We have partnered with ID.me to safely and securely
                            verify your veteran status. Please click this button to
                            visit ID.me to complete your registration.

                            <a href={groupsEndpoint()}>
                                <img
                                className="idme-button"
                                src={
                                    "https://s3.amazonaws.com/idme/buttons/v4/verify-with-idme-green.png"
                                }
                                alt="Verify with ID.me"
                                />
                            </a>

                            <a href={"https://www.id.me/about"} target="_blank" rel="noreferrer">
                                Learn more about ID.me
                            </a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="d-flex justify-content-center">
                        <Button variant="primary" href="https://www.markdivinecouragefoundation.org/">Go home</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SignupCard;