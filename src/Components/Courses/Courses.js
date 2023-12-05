import React from "react";
import "./Courses.css";
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
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    date: yup.string().required(),
    email: yup
      .string()
      .required()
      .matches(/@/, 'Email must contain "@" symbol'),
    mobileNumber: yup
      .string()
      .required()
      .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
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
                  firstName: "",
                  lastName: "",
                  date: "",
                  email: "",
                  date: "",
                  mobileNumber: "",
                  city: "",
                  state: "",
                  zip: "",
                  userName: "",
                  password: "",
                  terms: false,
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row>
                      <h1>SignUp</h1>
                      <Col>
                        <Form.Group
                          controlId="validationFormik101"
                          className="position-relative"
                        >
                          <Form.Group className="position-relative mb-3">
                            <Form.Label className="firstNameLabel">
                              FirstName
                            </Form.Label>
                            <Form.Control
                              type="firstName"
                              required
                              name="firstName"
                              onChange={handleChange}
                              isInvalid={!!errors.firstName}
                              isValid={touched.firstName && !errors.firstName}
                              className="firstName"
                            />

                            <Form.Control.Feedback type="invalid" tooltip>
                              {errors.firstName}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group
                          as={Col}
                          controlId="validationFormik101"
                          className="position-relative"
                        >
                          <Form.Group className="position-relative mb-3">
                            <Form.Label className="lastNameLabel ">
                              LastName
                            </Form.Label>
                            <Form.Control
                              type="lastName"
                              required
                              name="lastName"
                              onChange={handleChange}
                              value={values.lastName}
                              isInvalid={!!errors.lastName}
                              isValid={touched.lastName && !errors.lastName}
                              className="lastName"
                            />

                            <Form.Control.Feedback type="invalid" tooltip>
                              {errors.lastName}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="position-relative mb-3">
                          <Form.Label className="dateLabel">
                            Date of Birth
                          </Form.Label>
                          <Form.Control
                            type="date"
                            required
                            name="date"
                            value={values.date}
                            onChange={handleChange}
                            isInvalid={!!errors.date}
                            isValid={touched.date && !errors.date}
                            className="date"
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.date}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="position-relative mb-3">
                          <Form.Label className="emailLabel">Email</Form.Label>
                          <Form.Control
                            type="email"
                            required
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                            isValid={touched.email && !errors.email}
                            className="email"
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        {" "}
                        <Form.Group
                          as={Col}
                          controlId="validationFormikmobileN"
                        >
                          <Form.Label className="mobileNumberLabel">
                            MobileNumber
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="number"
                              placeholder="MobileNumber"
                              aria-describedby="inputGroupPrepend"
                              name="mobileNumber"
                              className="mobileNumber"
                              value={values.mobileNumber}
                              onChange={handleChange}
                              isInvalid={!!errors.mobileNumber}
                              isValid={
                                touched.mobileNumber && !errors.mobileNumber
                              }
                            />

                            <Form.Control.Feedback type="invalid" tooltip>
                              {errors.mobileNumber}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group
                          as={Col}
                          controlId="validationFormik103"
                          className="position-relative"
                        >
                          <Form.Label className="cityLabel">City</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="City"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                            isValid={touched.city && !errors.city}
                            isInvalid={!!errors.city}
                            className="city"
                          />

                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.city}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group
                          as={Col}
                          controlId="validationFormik104"
                          className="position-relative"
                        >
                          <Form.Label className="stateLabel">State</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="State"
                            name="state"
                            value={values.state}
                            onChange={handleChange}
                            isValid={touched.state && !errors.state}
                            isInvalid={!!errors.state}
                            className="state"
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.state}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group
                          as={Col}
                          controlId="validationFormik105"
                          className="position-relative"
                        >
                          <Form.Label className="zipLabel">Zip</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Zip"
                            name="zip"
                            value={values.zip}
                            onChange={handleChange}
                            isInvalid={!!errors.zip}
                            isValid={touched.state && !errors.state}
                            className="zip"
                          />

                          <Form.Control.Feedback type="invalid" tooltip>
                            {errors.zip}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

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
                    <Button type="submit" className="mt-5">
                      Submit
                    </Button>
                    <h5 className="mt-5 mb-0">Let's Signin</h5>
                    <Link to="/Signin" type="submit mt-0" className="mt-5 ">
                      Signin
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
