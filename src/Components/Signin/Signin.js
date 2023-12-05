import React from "react";
import "./Signin.css";
import { Container } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

const Courses = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:3300/createUser",
        values
      );
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setSubmitting(false);
    }
  };
  const { Formik } = formik;

  const schema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),

    terms: yup.bool().required().oneOf([true], "terms must be accepted"),
  });

  return (
    <div>
      <div className="headbg">
        <Container className="headwrapper1">
          <Row>
            <div className="registerPage">
              <Formik
                className="form"
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={{
                  userName: "",
                  password: "",
                  terms: false,
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <h1>Signin</h1>

                    <Row>
                      <Col>
                        <Form.Group
                          as={Col}
                          controlId="validationFormik104"
                          className="position-relative"
                        >
                          <Form.Label className="userNameLabel">
                            UserName
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="username"
                            name="userName"
                            value={values.userName}
                            onChange={handleChange}
                            isValid={touched.userName && !errors.userName}
                            isInvalid={!!errors.userName}
                            className="userName"
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.userName}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group
                          as={Col}
                          controlId="validationFormik105"
                          className="position-relative"
                        >
                          <Form.Label className="passwordLabel">
                            Password
                          </Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            isInvalid={!!errors.password}
                            isValid={touched.pasword && !errors.password}
                            className="zip"
                          />

                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.password}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="position-relative mt-5">
                      <Form.Check
                        required
                        name="terms"
                        label="Agree to terms and conditions"
                        onChange={handleChange}
                        isInvalid={!!errors.terms}
                        feedback={errors.terms}
                        feedbackType="invalid"
                        id="validationFormik106"
                        feedbackTooltip
                        className="termsLabel"
                      />
                    </Form.Group>
                    <Button type="submit mt-0" className="mt-5 ">
                      Signin
                    </Button>

                    <h5 className="mt-5 mb-0">Let's SignUp</h5>
                    <Link to="/Courses" type="submit" className="mt-5">
                      SignUp
                    </Link>
                  </Form>
                )}
              </Formik>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Courses;
