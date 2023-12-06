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
import { Link, useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:3300/createUser",
        values
      );
      console.log("API Response:", response.data);
      navigate("/Signin");
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
            <Col lg={6} className="order-2 order-lg-1">
              <div className="headwrapper">
                <h1 className="mt-5">Tech Career Programs</h1>

                <p className="headpara">
                  <ul>
                    <li className="fs-3 mb-2">100% Job Placement Support.</li>
                    <li className="fs-3 mb-2">
                      Mentors from Top Global Product companies.
                    </li>
                    <li className="fs-3 mb-2">
                      A Portfolio of Real-world Projects.
                    </li>
                    <li className="fs-3 mb-2">
                      Globally Recognized Certification.
                    </li>
                  </ul>
                </p>
                <h3>Live Classes available in English, தமிழ்</h3>
                <div className="clientcount">
                  <Row className="gy-4">
                    <Col className="col-xs-6 col-sm-3 col-lg-3 ">
                      <div>
                        <p className="clientCountNumber1">
                          2000<sup>+</sup>
                        </p>

                        <p className="fs-5 clientCountLetter1">Students</p>
                      </div>
                    </Col>

                    <Col className="col-xs-6 col-sm-3 col-lg-3">
                      <div>
                        <p className="clientCountNumber2">
                          10<sup>+</sup>
                        </p>

                        <p className="fs-5 clientCountLetter2">Courses</p>
                      </div>
                    </Col>

                    <Col className="col-xs-6 col-sm-3 col-lg-3">
                      <div>
                        <p className="clientCountNumber3">
                          30<sup>+</sup>
                        </p>

                        <p className="fs-5 clientCountLetter3">Staffs</p>
                      </div>
                    </Col>

                    <Col className="col-xs-6 col-sm-3 col-lg-3">
                      <div>
                        <p className="clientCountNumber4">
                          30000<sup>+</sup>
                        </p>

                        <p className="fs-5 clientCountLetter4">
                          Students Placed
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={6} className="order-1 order-lg-2">
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
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <Row>
                        <h1 className="headSign fs-2"> SignUp</h1>
                        <Col>
                          <Form.Group
                            controlId="validationFormik101"
                            className="position-relative"
                          >
                            <Form.Group className="position-relative mb-3">
                              <Form.Label className="firstNameLabel">
                                First Name
                              </Form.Label>
                              <Form.Control
                                type="firstName"
                                required
                                name="firstName"
                                onChange={handleChange}
                                isInvalid={!!errors.firstName}
                                isValid={touched.firstName && !errors.firstName}
                                className="firstName"
                                placeholder="FirstName"
                              />

                              <Form.Control.Feedback
                                type="invalid"
                                tooltip
                                className="firstNameError"
                              >
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
                                Last Name
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
                                placeholder="LastName"
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
                          <Form.Group className="position-relative mb-3 mt-2">
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
                            <Form.Control.Feedback
                              type="invalid"
                              tooltip
                              className="dateError"
                            >
                              {errors.date}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="position-relative mb-3 mt-2">
                            <Form.Label className="emailLabel">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              required
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              isInvalid={!!errors.email}
                              isValid={touched.email && !errors.email}
                              className="email"
                              placeholder="Email"
                            />
                            <Form.Control.Feedback type="invalid" tooltip>
                              {errors.email}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group
                            as={Col}
                            controlId="validationFormik"
                            className="position-relative"
                          >
                            <Form.Label className="mobileNumberLabel mt-2">
                              MobileNumber
                            </Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="mobileNumber"
                              name="mobileNumber"
                              value={values.mobileNumber}
                              onChange={handleChange}
                              isInvalid={!!errors.mobileNumber}
                              isValid={touched.mob && !errors.state}
                              className="mobileNumber"
                            />

                            <Form.Control.Feedback
                              type="invalid"
                              tooltip
                              className="mobileError"
                            >
                              {errors.mobileNumber}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group
                            as={Col}
                            controlId="validationFormik103"
                            className="position-relative"
                          >
                            <Form.Label className="cityLabel mt-2">
                              City
                            </Form.Label>
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
                            <Form.Label className="stateLabel mt-4">
                              State
                            </Form.Label>
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
                            <Form.Control.Feedback
                              type="invalid"
                              tooltip
                              className="stateError"
                            >
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
                            <Form.Label className="zipLabel mt-4">
                              Zip
                            </Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Zip"
                              name="zip"
                              value={values.zip}
                              onChange={handleChange}
                              isInvalid={!!errors.zip}
                              isValid={touched.zip && !errors.zip}
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
                            controlId="validationFormik105"
                            className="position-relative"
                          >
                            <Form.Label className="userNameLabel mt-4">
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
                            <Form.Control.Feedback
                              type="invalid"
                              tooltip
                              className="userNameError"
                            >
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
                            <Form.Label className="passwordLabel mt-4">
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Password"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              isInvalid={!!errors.password}
                              isValid={touched.password && !errors.password}
                              className="password"
                            />

                            <Form.Control.Feedback type="invalid" tooltip>
                              {errors.password}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="position-relative mt-5 termsLabels">
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
                      <Button type="submit" className="mt-5 registerBtn ">
                        Register
                      </Button>
                      <h5 className="mt-3 mb-0 text-black">Let's Signin</h5>{" "}
                      <Link to="/Signin" type="submit mt-0" className="mt-5 ">
                        Signin
                      </Link>{" "}
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Courses;
